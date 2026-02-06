"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Trophy, RotateCcw, Lightbulb, X, Heart, XCircle, Volume2 } from "lucide-react";
import Link from "next/link";
import { Vocabulary } from "@/types";
import CloseConfirmDialog from "./CloseConfirmDialog";
import { useActivityTimer } from "../hooks/useActivityTimer";
import StreakCongratulationsDialog from "./StreakCongratulationsDialog";
import { useGameSounds } from "../hooks/useGameSounds";

interface MasterWritingGameProps {
    vocabularies: Vocabulary[];
    onComplete: () => void;
}

const MAX_LIVES = 5;

export default function MasterWritingGame({ vocabularies, onComplete }: MasterWritingGameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [lives, setLives] = useState(MAX_LIVES);
    const [isComplete, setIsComplete] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [showCloseDialog, setShowCloseDialog] = useState(false);
    const [gameKey, setGameKey] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    // Streak & Timer logic
    const [hasShownStreakDialog, setHasShownStreakDialog] = useState(false);
    const [showStreakDialog, setShowStreakDialog] = useState(false);
    const [newStreakValue, setNewStreakValue] = useState(0);
    const { start, getMinutes } = useActivityTimer();
    const { playCorrect, playWrong, playGameOverSad, playGameOverHappy } = useGameSounds();

    // Start timer on mount
    useEffect(() => {
        start();
        return () => {
            const minutes = getMinutes();
            if (minutes > 0) saveActivity(minutes);
        };
    }, []);

    const saveActivity = async (minutes: number) => {
        const today = new Date().toISOString().split('T')[0];
        try {
            await fetch('/api/activity', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ minutes, date: today })
            });
        } catch (error) {
            console.error('Failed to save activity:', error);
        }
    };

    // Speak word function
    const speakWord = useCallback((word: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    // Shuffle vocabularies on start and when gameKey changes (restart)
    const shuffledVocabularies = useMemo(() => {
        return [...vocabularies].sort(() => Math.random() - 0.5);
    }, [vocabularies, gameKey]);

    const currentVocab = shuffledVocabularies[currentIndex];

    useEffect(() => {
        if (inputRef.current && !isFlipped && !isGameOver) {
            inputRef.current.focus();
        }
    }, [currentIndex, isFlipped, isGameOver]);

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

    const checkAnswer = useCallback(() => {
        const trimmedInput = userInput.trim().toLowerCase();
        const correctAnswer = currentVocab.word.toLowerCase();

        if (trimmedInput === correctAnswer) {
            playCorrect();
            setIsCorrect(true);
            const newCorrectCount = correctCount + 1;
            setCorrectCount(prev => prev + 1);

            // Speak the word when correct
            speakWord(currentVocab.word);

            // Flip to show answer
            setIsFlipped(true);

            // Check streak at 5 correct answers
            if (newCorrectCount === 5 && !hasShownStreakDialog) {
                checkStreak();
            }
        } else {
            playWrong();

            // Shake animation
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);

            // Lose a life immediately
            const newLives = lives - 1;
            setLives(newLives);

            // Stay on same question, don't show answer, keep input
            setIsCorrect(null);
            setIsFlipped(false);

            if (newLives <= 0) {
                // Game over
                setIsCorrect(false);
                setTimeout(() => {
                    playGameOverSad();
                    setIsGameOver(true);
                }, 500);
            }
            // Otherwise stay on same question - user can retry
        }
    }, [userInput, currentVocab, correctCount, hasShownStreakDialog, lives, speakWord, playCorrect, playWrong, playGameOverSad]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userInput.trim()) {
            checkAnswer();
        }
    };

    const handleContinue = () => {
        if (currentIndex < shuffledVocabularies.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setUserInput("");
            setIsCorrect(null);
            setIsFlipped(false);
        } else {
            playGameOverHappy();
            setIsComplete(true);
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setUserInput("");
        setIsCorrect(null);
        setIsFlipped(false);
        setCorrectCount(0);
        setLives(MAX_LIVES);
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
        if (minutes > 0) saveActivity(minutes);
        setShowCloseDialog(false);
        onComplete();
    };

    // Hearts component - hearts disappear from LEFT to RIGHT
    // When lives = 5: all visible, lives = 4: index 0 hidden, lives = 3: indices 0,1 hidden, etc.
    const HeartsDisplay = () => (
        <div className="flex items-center gap-1">
            {[...Array(MAX_LIVES)].map((_, index) => {
                // Hearts disappear from left: index must be >= (MAX_LIVES - lives) to be visible
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
    );

    // Header component - reusable across states
    const GameHeader = () => (
        <div className="mb-8">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>Word {currentIndex + 1}/{shuffledVocabularies.length}</span>
                <div className="flex items-center gap-3">
                    <HeartsDisplay />
                    <span>Correct: {correctCount}</span>
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
    );

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
                    className="text-center"
                >
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

                    <div className="flex gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRestart}
                            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium flex items-center gap-2"
                        >
                            <RotateCcw size={18} />
                            Try Again
                        </motion.button>
                        <Link href="/learn">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium"
                            >
                                Other Modes
                            </motion.button>
                        </Link>
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
            <GameHeader />

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

            {/* Input Form - Only show when not flipped */}
            {!isFlipped && (
                <form onSubmit={handleSubmit}>
                    <motion.div
                        animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type the English word..."
                            className={`w-full px-6 py-4 rounded-2xl border-2 text-lg font-medium outline-none transition-all ${isShaking
                                ? 'border-red-400 bg-red-50'
                                : 'border-gray-200 focus:border-purple-400 bg-white'
                                }`}
                            autoComplete="off"
                            autoCapitalize="off"
                            spellCheck={false}
                        />
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={!userInput.trim()}
                        className="w-full mt-4 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
