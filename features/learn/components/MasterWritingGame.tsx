"use client";

import { useState, useCallback, useRef, useEffect, useMemo, createRef, RefObject } from "react";
import { motion } from "framer-motion";
import { Trophy, RotateCcw, Lightbulb, X, Heart, XCircle, Volume2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Vocabulary } from "@/types";
import CloseConfirmDialog from "./CloseConfirmDialog";
import { useActivityTimer } from "../hooks/useActivityTimer";
import StreakCongratulationsDialog from "./StreakCongratulationsDialog";
import { useGameSounds } from "../hooks/useGameSounds";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";

interface MasterWritingGameProps {
    vocabularies: Vocabulary[];
    onComplete: () => void;
    levelInfo?: { level: string; box: number; totalBoxes: number };
    onNext?: () => void;
}

const MAX_LIVES = 5;

export default function MasterWritingGame({ vocabularies, onComplete, levelInfo, onNext }: MasterWritingGameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charInputs, setCharInputs] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [lives, setLives] = useState(MAX_LIVES);
    const [wrongCount, setWrongCount] = useState(0);
    const correctCountRef = useRef(0);
    const wrongCountRef = useRef(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [showCloseDialog, setShowCloseDialog] = useState(false);
    const [gameKey, setGameKey] = useState(0);
    const inputRefs = useRef<RefObject<HTMLInputElement | null>[]>([]);

    // Streak & Timer logic
    const [hasShownStreakDialog, setHasShownStreakDialog] = useState(false);
    const [showStreakDialog, setShowStreakDialog] = useState(false);
    const [newStreakValue, setNewStreakValue] = useState(0);
    const { start, getMinutes } = useActivityTimer();
    const { playCorrect, playWrong, playGameOverSad, playGameOverHappy } = useGameSounds();
    const { speak: speakWord } = useSpeechSynthesis();

    // Start timer on mount
    useEffect(() => {
        start();
        return () => {
            const minutes = getMinutes();
            if (minutes > 0 || correctCountRef.current > 0 || wrongCountRef.current > 0) {
                saveActivity(minutes, correctCountRef.current, wrongCountRef.current);
            }
        };
    }, []);

    const saveActivity = async (minutes: number, correct?: number, wrong?: number) => {
        const today = new Date().toISOString().split('T')[0];
        try {
            await fetch('/api/activity', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ minutes, date: today, correct, wrong })
            });
        } catch (error) {
            console.error('Failed to save activity:', error);
        }
    };

    // Shuffle vocabularies on start and when gameKey changes (restart)
    const shuffledVocabularies = useMemo(() => {
        return [...vocabularies].sort(() => Math.random() - 0.5);
    }, [vocabularies, gameKey]);

    const currentVocab = shuffledVocabularies[currentIndex];

    // Initialize charInputs and refs whenever the word changes
    useEffect(() => {
        if (!currentVocab) return;
        const len = currentVocab.word.length;
        setCharInputs(Array(len).fill(""));
        inputRefs.current = Array(len).fill(null).map(() => createRef<HTMLInputElement>());
    }, [currentIndex, gameKey]);

    // Focus first empty cell when word changes
    useEffect(() => {
        if (!isFlipped && !isGameOver && inputRefs.current.length > 0) {
            setTimeout(() => inputRefs.current[0]?.current?.focus(), 50);
        }
    }, [currentIndex, isFlipped, isGameOver, gameKey]);

    // Listen for Enter key when card is flipped to continue
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isFlipped && e.key === 'Enter') {
                handleContinue();
            }
        };

        if (isFlipped) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFlipped]);

    const checkStreak = async () => {
        try {
            const res = await fetch('/api/streak/activity', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ activityType: 'game_complete', score: 5 })
            });
            const data = await res.json();

            if (data.streakAwarded) {
                setNewStreakValue(data.newStreak);
                setShowStreakDialog(true);
                setHasShownStreakDialog(true);
            }
        } catch (error) {
            console.error('Failed to check streak:', error);
        }
    };

    const saveProgress = async () => {
        if (!levelInfo || levelInfo.box === 0) return;
        try {
            await fetch('/api/learn/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    level: levelInfo.level,
                    box: levelInfo.box,
                    gameMode: 'master-writing'
                })
            });
        } catch (error) {
            console.error('Failed to save progress:', error);
        }
    };

    const userInput = charInputs.join("");
    const allFilled = currentVocab ? charInputs.every((c, i) => currentVocab.word[i] === " " || c !== "") : false;

    const checkAnswer = useCallback(() => {
        if (isShaking || isFlipped || isGameOver) return;
        const trimmedInput = charInputs.join("").trim().toLowerCase();
        const correctAnswer = currentVocab.word.toLowerCase();

        if (trimmedInput === correctAnswer) {
            playCorrect();
            setIsCorrect(true);
            const newCorrectCount = correctCount + 1;
            setCorrectCount(prev => prev + 1);
            correctCountRef.current = newCorrectCount;
            speakWord(currentVocab.word);
            setIsFlipped(true);
            if (newCorrectCount === 5 && !hasShownStreakDialog) {
                checkStreak();
            }
        } else {
            playWrong();
            setIsShaking(true);
            setTimeout(() => {
                setIsShaking(false);
                // Clear all cells and focus first on wrong answer
                setCharInputs(Array(currentVocab.word.length).fill(""));
                setTimeout(() => inputRefs.current[0]?.current?.focus(), 20);
            }, 500);

            setWrongCount(prev => {
                wrongCountRef.current = prev + 1;
                return prev + 1;
            });

            const newLives = lives - 1;
            setLives(newLives);
            setIsCorrect(null);
            setIsFlipped(false);

            if (newLives <= 0) {
                setIsCorrect(false);
                setTimeout(() => {
                    playGameOverSad();
                    setIsGameOver(true);
                }, 500);
            }
        }
    }, [charInputs, currentVocab, correctCount, hasShownStreakDialog, lives, speakWord, playCorrect, playWrong, playGameOverSad, isShaking, isFlipped, isGameOver]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (allFilled) {
            checkAnswer();
        }
    };

    const handleCellChange = (index: number, value: string) => {
        if (!currentVocab) return;
        // Skip space positions
        if (currentVocab.word[index] === " ") return;

        const char = value.slice(-1); // only last typed char
        const next = [...charInputs];
        next[index] = char;
        setCharInputs(next);

        if (char && index < currentVocab.word.length - 1) {
            // Advance to next non-space cell
            let nextIdx = index + 1;
            while (nextIdx < currentVocab.word.length && currentVocab.word[nextIdx] === " ") nextIdx++;
            inputRefs.current[nextIdx]?.current?.focus();
        }
    };

    const handleCellKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!currentVocab) return;
        if (e.key === "Backspace") {
            if (charInputs[index] !== "") {
                const next = [...charInputs];
                next[index] = "";
                setCharInputs(next);
            } else {
                // Move focus back
                let prevIdx = index - 1;
                while (prevIdx >= 0 && currentVocab.word[prevIdx] === " ") prevIdx--;
                if (prevIdx >= 0) {
                    inputRefs.current[prevIdx]?.current?.focus();
                    const next = [...charInputs];
                    next[prevIdx] = "";
                    setCharInputs(next);
                }
            }
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (allFilled) checkAnswer();
        }
    };

    const handleCellPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!currentVocab) return;
        const pasted = e.clipboardData.getData("text").trim();
        if (pasted.length === 0) return;
        const next = [...charInputs];
        let pi = 0;
        for (let i = 0; i < currentVocab.word.length && pi < pasted.length; i++) {
            if (currentVocab.word[i] === " ") continue;
            next[i] = pasted[pi++];
        }
        setCharInputs(next);
        // Focus last filled cell
        const lastFilled = next.reduce((acc, c, i) => (c !== "" ? i : acc), 0);
        inputRefs.current[lastFilled]?.current?.focus();
    };

    const handleContinue = () => {
        if (currentIndex < shuffledVocabularies.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setCharInputs([]);
            setIsCorrect(null);
            setIsFlipped(false);
        } else {
            playGameOverHappy();
            saveProgress();
            setIsComplete(true);
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setCharInputs([]);
        setIsCorrect(null);
        setIsFlipped(false);
        setCorrectCount(0);
        setLives(MAX_LIVES);
        setWrongCount(0);
        correctCountRef.current = 0;
        wrongCountRef.current = 0;
        setIsComplete(false);
        setIsGameOver(false);
        setHasShownStreakDialog(false);
        setGameKey(prev => prev + 1);
        start();
    };

    const handleClose = () => {
        setShowCloseDialog(true);
    };

    const handleConfirmClose = () => {
        const minutes = getMinutes();
        if (minutes > 0 || correctCount > 0 || wrongCount > 0) saveActivity(minutes, correctCount, wrongCount);
        setShowCloseDialog(false);
        onComplete();
    };

    // Hearts display - memoized to avoid remounting on every keystroke
    const heartsDisplay = useMemo(() => (
        <div className="flex items-center gap-1">
            {[...Array(MAX_LIVES)].map((_, index) => {
                const isVisible = index >= (MAX_LIVES - lives);
                return (
                    <motion.div
                        key={index}
                        initial={{ scale: 1, opacity: 1 }}
                        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.3 }}
                    >
                        <Heart
                            size={18}
                            className={isVisible ? "text-red-500 fill-red-500" : "text-gray-300"}
                        />
                    </motion.div>
                );
            })}
        </div>
    ), [lives]);

    // Game header - memoized to prevent progress bar flicker on typing
    const gameHeader = useMemo(() => (
        <div className="mb-8">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>Word {currentIndex + 1}/{shuffledVocabularies.length}</span>
                <div className="flex items-center gap-3">
                    {heartsDisplay}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleClose}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                        <X className="w-4 h-4 text-gray-600" />
                    </motion.button>
                </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-violet-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / shuffledVocabularies.length) * 100}%` }}
                />
            </div>
        </div>
    ), [currentIndex, shuffledVocabularies.length, correctCount, lives, heartsDisplay]);

    // Game Over screen
    if (isGameOver) {
        return (
            <div className="w-full max-w-lg mx-auto">
                <StreakCongratulationsDialog
                    isOpen={showStreakDialog}
                    newStreak={newStreakValue}
                    onClose={() => setShowStreakDialog(false)}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-400 to-rose-500 flex items-center justify-center shadow-lg"
                    >
                        <XCircle className="w-12 h-12 text-white" />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Game Over!</h2>
                    <p className="text-gray-500 mb-2">You ran out of lives 💔</p>
                    <p className="text-gray-500 mb-6">Correct: {correctCount}</p>

                    {currentVocab && (
                        <div className="mb-6 p-5 rounded-2xl bg-red-50 border border-red-200 text-left max-w-md mx-auto">
                            <p className="text-red-600 text-sm mb-3 font-medium">Last word:</p>
                            <div className="mb-3">
                                <span className="text-2xl font-bold text-red-700">
                                    {currentVocab.word}
                                </span>
                                <span className="ml-2 px-2 py-1 rounded-lg bg-red-100 text-red-600 text-sm">
                                    {currentVocab.partOfSpeech}
                                </span>
                            </div>
                            <p className="text-gray-700">
                                <span className="text-gray-500">Meaning: </span>
                                <span className="font-medium">{currentVocab.meaning}</span>
                            </p>
                        </div>
                    )}

                    <div className="flex gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRestart}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-white font-medium flex items-center gap-2 shadow-lg"
                        >
                            <RotateCcw size={18} />
                            Play Again
                        </motion.button>
                        <Link href="/learn">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium"
                            >
                                Back
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                <CloseConfirmDialog
                    isOpen={showCloseDialog}
                    onConfirm={handleConfirmClose}
                    onCancel={() => setShowCloseDialog(false)}
                />
            </div>
        );
    }

    if (isComplete) {
        const percentage = Math.round((correctCount / shuffledVocabularies.length) * 100);

        return (
            <>
                <StreakCongratulationsDialog
                    isOpen={showStreakDialog}
                    newStreak={newStreakValue}
                    onClose={() => setShowStreakDialog(false)}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center relative"
                >
                    {/* Close button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onComplete}
                        className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors"
                    >
                        <X size={20} className="text-red-500" />
                    </motion.button>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center shadow-lg"
                    >
                        <Trophy className="w-12 h-12 text-white" />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Completed!</h2>
                    <p className="text-gray-500 mb-6">You wrote {correctCount}/{shuffledVocabularies.length} words correctly</p>

                    <div className="w-full max-w-xs mx-auto mb-8">
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full rounded-full ${percentage >= 80 ? 'bg-purple-500' :
                                    percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                            />
                        </div>
                        <p className="text-2xl font-bold mt-2 text-gray-700">{percentage}%</p>
                    </div>

                    <div className="flex gap-3 justify-center flex-wrap">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRestart}
                            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium flex items-center gap-2"
                        >
                            <RotateCcw size={18} />
                            Try Again
                        </motion.button>
                        {onNext && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onNext}
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium flex items-center gap-2 shadow-lg"
                            >
                                Next Box
                                <ChevronRight size={18} />
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            <StreakCongratulationsDialog
                isOpen={showStreakDialog}
                newStreak={newStreakValue}
                onClose={() => setShowStreakDialog(false)}
            />

            {/* Header: Progress + Hearts + Close Button */}
            {gameHeader}

            {/* Flip Card Container */}
            <div className="perspective-1000 mb-6">
                <motion.div
                    className="relative w-full"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
                >
                    {/* Front Card - Question */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                        style={{
                            backfaceVisibility: "hidden",
                            display: isFlipped ? "none" : "block"
                        }}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">Vietnamese Meaning</p>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    {currentVocab.meaning}
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    ({currentVocab.partOfSpeech})
                                </p>
                            </div>
                            {currentVocab.level && (
                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                                    {currentVocab.level}
                                </span>
                            )}
                        </div>

                        {/* Hint */}
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Lightbulb size={16} />
                            <span>Hint: {currentVocab.word.length} characters</span>
                        </div>
                    </motion.div>

                    {/* Back Card - Answer */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            display: isFlipped ? "block" : "none"
                        }}
                    >
                        {/* Word Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex gap-2">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800">{currentVocab.word}</h2>
                                    <p className="text-gray-500 text-lg">{currentVocab.phonetic}</p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => speakWord(currentVocab.word)}
                                    className="w-8 h-8 mt-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/40 transition-shadow"
                                >
                                    <Volume2 size={18} />
                                </motion.button>
                            </div>
                            {/* Part of Speech & Level */}
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                                    {currentVocab.partOfSpeech}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                                    {currentVocab.level}
                                </span>

                            </div>
                        </div>


                        {/* Meaning */}
                        <div className="mb-6">
                            {/* <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                                Nghĩa
                            </h3> */}
                            <p className="text-xl text-gray-700 font-medium">{currentVocab.meaning}</p>
                        </div>

                        {/* Example */}
                        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
                            {/* <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                                Ví dụ
                            </h3> */}
                            <p className="text-gray-800 font-medium mb-2">{currentVocab.example}</p>
                            <p className="text-gray-500 text-sm italic">{currentVocab.exampleTranslation}</p>
                        </div>

                        {/* Continue Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleContinue}
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg shadow-lg hover:shadow-green-500/40 transition-all"
                        >
                            Continue →
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Character Dash Input - Only show when not flipped */}
            {!isFlipped && currentVocab && (
                <form onSubmit={handleSubmit}>
                    <motion.div
                        animate={isShaking ? { x: [-12, 12, -12, 12, -8, 8, 0] } : {}}
                        transition={{ duration: 0.45 }}
                        className="flex flex-wrap justify-center gap-x-2 gap-y-3 mb-6"
                    >
                        {currentVocab.word.split("").map((char, i) => {
                            if (char === " ") {
                                return <div key={i} className="w-4" />;
                            }
                            const isFocused = document.activeElement === inputRefs.current[i]?.current;
                            const filled = charInputs[i] !== "";
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.03 }}
                                    className={`relative w-10 h-12 flex items-end justify-center pb-1 border-b-2 transition-colors ${isShaking
                                            ? "border-red-400"
                                            : filled
                                                ? "border-purple-500"
                                                : "border-gray-300"
                                        }`}
                                >
                                    <input
                                        ref={inputRefs.current[i]}
                                        type="text"
                                        maxLength={2}
                                        value={charInputs[i] || ""}
                                        onChange={e => handleCellChange(i, e.target.value)}
                                        onKeyDown={e => handleCellKeyDown(i, e)}
                                        onPaste={handleCellPaste}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                                        autoComplete="off"
                                        autoCapitalize="off"
                                        spellCheck={false}
                                        aria-label={`Character ${i + 1}`}
                                    />
                                    <span className={`text-xl font-bold select-none ${isShaking ? "text-red-500" : filled ? "text-gray-800" : "text-transparent"
                                        }`}>
                                        {charInputs[i] || "_"}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={!allFilled}
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Check
                    </motion.button>
                </form>
            )}

            {/* Close Confirmation Dialog */}
            <CloseConfirmDialog
                isOpen={showCloseDialog}
                onConfirm={handleConfirmClose}
                onCancel={() => setShowCloseDialog(false)}
            />

            {/* Add perspective style */}
            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
}
