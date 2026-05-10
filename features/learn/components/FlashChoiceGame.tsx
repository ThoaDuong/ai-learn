"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Trophy, RotateCcw, X, Volume2, Heart, Bookmark, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Vocabulary } from "@/types";
import { useGameSounds } from "../hooks/useGameSounds";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";
import Confetti from "./Confetti";
import CloseConfirmDialog from "./CloseConfirmDialog";
import { useActivityTimer } from "../hooks/useActivityTimer";
import StreakCongratulationsDialog from "./StreakCongratulationsDialog";

interface FlashChoiceGameProps {
    vocabularies: Vocabulary[];
    onComplete: () => void;
    levelInfo?: { level: string; box: number; totalBoxes: number };
    onNext?: () => void;
}

interface QuizQuestion {
    vocabulary: Vocabulary;
    options: string[];
    correctIndex: number;
}

const MAX_LIVES = 5;

export default function FlashChoiceGame({ vocabularies, onComplete, levelInfo, onNext }: FlashChoiceGameProps) {
    const { data: session } = useSession();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const correctCountRef = useRef(0);
    const wrongCountRef = useRef(0);
    const [lives, setLives] = useState(MAX_LIVES);
    const [isComplete, setIsComplete] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showCloseDialog, setShowCloseDialog] = useState(false);
    const [gameKey, setGameKey] = useState(0);

    // Save word state
    const [savedWords, setSavedWords] = useState<Set<string>>(new Set());
    const [savingWord, setSavingWord] = useState(false);

    // Streak & Timer logic
    const [hasShownStreakDialog, setHasShownStreakDialog] = useState(false);

    const TOTAL_QUESTIONS = vocabularies.length;
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

    // Generate quiz questions with shuffled Vietnamese meaning options
    const questions: QuizQuestion[] = useMemo(() => {
        const extendedVocabs: Vocabulary[] = [];
        while (extendedVocabs.length < TOTAL_QUESTIONS) {
            const shuffled = [...vocabularies].sort(() => Math.random() - 0.5);
            extendedVocabs.push(...shuffled);
        }

        return extendedVocabs.slice(0, TOTAL_QUESTIONS).map((vocab) => {
            const otherVocabs = vocabularies.filter(v => v.word !== vocab.word);
            const shuffledOthers = otherVocabs.sort(() => Math.random() - 0.5).slice(0, 3);
            const wrongAnswers = shuffledOthers.map(v => v.meaning);

            const allOptions = [vocab.meaning, ...wrongAnswers];
            const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
            const correctIndex = shuffledOptions.indexOf(vocab.meaning);

            return {
                vocabulary: vocab,
                options: shuffledOptions,
                correctIndex
            };
        });
    }, [vocabularies, gameKey]);

    const currentQuestion = questions[currentIndex];

    // Auto-speak word when question changes
    useEffect(() => {
        if (isComplete || isGameOver || !currentQuestion) return;
        speakWord(currentQuestion.vocabulary.word);
    }, [currentIndex, isComplete, isGameOver, currentQuestion, speakWord, gameKey]);

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
        if (!levelInfo || levelInfo.box === 0) return; // Don't save review progress
        try {
            await fetch('/api/learn/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    level: levelInfo.level,
                    box: levelInfo.box,
                    gameMode: 'flash-choice'
                })
            });
        } catch (error) {
            console.error('Failed to save progress:', error);
        }
    };

    const handleAnswer = useCallback((optionIndex: number) => {
        if (selectedAnswer !== null) return; // Already answered, wait for reset

        const correct = optionIndex === currentQuestion.correctIndex;
        setSelectedAnswer(optionIndex);
        setIsCorrect(correct);

        if (correct) {
            playCorrect();
            const newCorrectCount = correctCount + 1;
            setCorrectCount(newCorrectCount);
            correctCountRef.current = newCorrectCount;

            if (newCorrectCount === 5 && !hasShownStreakDialog) {
                checkStreak();
            }

            if (newCorrectCount >= TOTAL_QUESTIONS) {
                setShowConfetti(true);
                playGameOverHappy();
                saveProgress();
                setTimeout(() => {
                    setIsComplete(true);
                }, 500);
                return;
            }

            // Auto advance after short delay
            setTimeout(() => {
                if (currentIndex < questions.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                    setSelectedAnswer(null);
                    setIsCorrect(null);
                } else {
                    setIsComplete(true);
                }
            }, 800);
        } else {
            playWrong();
            const newLives = lives - 1;
            setLives(newLives);

            if (newLives <= 0) {
                setTimeout(() => {
                    playGameOverSad();
                    setIsGameOver(true);
                }, 800);
            } else {
                // Reset after short delay to allow retry on same question
                setTimeout(() => {
                    setSelectedAnswer(null);
                    setIsCorrect(null);
                }, 800);
            }
            // Allow retry - don't advance, just reset selectedAnswer after showing wrong state
            // User can try again on same question
            setWrongCount(prev => {
                wrongCountRef.current = prev + 1;
                return prev + 1;
            });
        }
    }, [selectedAnswer, isCorrect, currentQuestion, currentIndex, questions.length, correctCount, lives, playCorrect, playWrong, playGameOverSad, playGameOverHappy, hasShownStreakDialog]);

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setCorrectCount(0);
        setWrongCount(0);
        correctCountRef.current = 0;
        wrongCountRef.current = 0;
        setLives(MAX_LIVES);
        setIsComplete(false);
        setIsGameOver(false);
        setShowConfetti(false);
        setHasShownStreakDialog(false);
        setGameKey(prev => prev + 1);
        start();
    };

    const handleSaveWord = async () => {
        if (!session || !currentQuestion || savingWord) return;
        const vocab = currentQuestion.vocabulary;
        if (savedWords.has(vocab.word)) return;

        setSavingWord(true);
        try {
            const res = await fetch('/api/vocabulary', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    word: vocab.word,
                    meaning: vocab.meaning,
                    partOfSpeech: vocab.partOfSpeech,
                    level: vocab.level,
                    phonetic: vocab.phonetic,
                    example: vocab.example || '',
                    exampleTranslation: vocab.exampleTranslation || '',
                }),
            });
            if (res.ok || res.status === 409) {
                setSavedWords(prev => new Set(prev).add(vocab.word));
            }
        } catch (error) {
            console.error('Failed to save word:', error);
        } finally {
            setSavingWord(false);
        }
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

    // Listen for Enter key on game over screen to restart
    useEffect(() => {
        if (!isGameOver) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleRestart();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isGameOver]);

    // Game Over screen
    if (isGameOver) {
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
                        className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-400 to-rose-500 flex items-center justify-center shadow-lg"
                    >
                        <XCircle className="w-12 h-12 text-white" />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Game Over!</h2>
                    <p className="text-gray-500 mb-2">You ran out of lives 💔</p>
                    <p className="text-gray-500 mb-6">Correct: {correctCount}</p>

                    {currentQuestion && (
                        <div className="mb-6 p-5 rounded-2xl bg-red-50 border border-red-200 text-left max-w-md mx-auto">
                            <p className="text-red-600 text-sm mb-3 font-medium">Last question:</p>
                            <div className="mb-3">
                                <span className="text-2xl font-bold text-red-700">
                                    {currentQuestion.vocabulary.word}
                                </span>
                                <span className="ml-2 px-2 py-1 rounded-lg bg-red-100 text-red-600 text-sm">
                                    {currentQuestion.vocabulary.partOfSpeech}
                                </span>
                            </div>
                            <p className="text-gray-700">
                                <span className="text-gray-500">Meaning: </span>
                                <span className="font-medium">{currentQuestion.vocabulary.meaning}</span>
                            </p>
                        </div>
                    )}

                    <div className="flex gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRestart}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-medium flex items-center gap-2 shadow-lg"
                        >
                            <RotateCcw size={18} />
                            Play Again
                            <span className="text-xs opacity-75">(Enter)</span>
                        </motion.button>
                    </div>
                </motion.div>
            </>
        );
    }

    if (isComplete) {
        const percentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
        const isFullCompletion = correctCount >= TOTAL_QUESTIONS;

        return (
            <>
                <Confetti active={showConfetti} />
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
                        className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg"
                    >
                        <Trophy className="w-12 h-12 text-white" />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {isFullCompletion ? "Excellent! 🏆" : "Completed!"}
                    </h2>
                    {isFullCompletion && (
                        <p className="text-lg text-amber-600 font-medium mb-2">
                            You&apos;ve completed this vocabulary set!
                        </p>
                    )}
                    <p className="text-gray-500 mb-6">Correct: {correctCount}/{TOTAL_QUESTIONS}</p>

                    <div className="w-full max-w-xs mx-auto mb-8">
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full rounded-full ${percentage >= 80 ? 'bg-green-500' :
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
                            Play Again
                        </motion.button>
                        {isFullCompletion && onNext && (
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
            <div className="mb-8">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>Question {currentIndex + 1}/{TOTAL_QUESTIONS}</span>
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
                        className="h-full bg-gradient-to-r from-yellow-400 to-amber-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentIndex + 1) / TOTAL_QUESTIONS) * 100}%` }}
                    />
                </div>
            </div>

            {/* Question Card - English word with phonetic */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-6"
                >
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">English Word</p>
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl font-bold text-gray-800">
                            {currentQuestion.vocabulary.word}
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => speakWord(currentQuestion.vocabulary.word)}
                            className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors"
                            type="button"
                        >
                            <Volume2 className="w-5 h-5 text-amber-600" />
                        </motion.button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500">
                            <span className="px-2 py-1 rounded-lg bg-gray-100 text-sm">
                                {currentQuestion.vocabulary.partOfSpeech}
                            </span>
                            <span className="text-sm italic">
                                {currentQuestion.vocabulary.phonetic}
                            </span>
                        </div>
                        {session && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleSaveWord}
                                disabled={savingWord || savedWords.has(currentQuestion.vocabulary.word)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${savedWords.has(currentQuestion.vocabulary.word)
                                    ? 'bg-green-100 text-green-700 cursor-default'
                                    : 'bg-amber-100 hover:bg-amber-200 text-amber-700'
                                    } disabled:opacity-70`}
                                type="button"
                            >
                                <Bookmark size={14} className={savedWords.has(currentQuestion.vocabulary.word) ? 'fill-green-600' : ''} />
                                {savingWord ? 'Saving...' : savedWords.has(currentQuestion.vocabulary.word) ? 'Saved' : 'Save'}
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Options - Vietnamese meanings */}
            <div className="grid grid-cols-2 gap-3">
                {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrectOption = index === currentQuestion.correctIndex;
                    const showResult = selectedAnswer !== null;

                    let bgClass = "bg-white hover:bg-gray-50 border-gray-200";
                    if (showResult) {
                        if (isCorrectOption && isCorrect) {
                            bgClass = "bg-green-100 border-green-500";
                        } else if (isSelected && !isCorrect) {
                            bgClass = "bg-red-100 border-red-500 animate-shake";
                        }
                    }

                    return (
                        <motion.button
                            key={index}
                            whileHover={!showResult || !isCorrect ? { scale: 1.03 } : {}}
                            whileTap={!showResult || !isCorrect ? { scale: 0.97 } : {}}
                            onClick={() => handleAnswer(index)}
                            disabled={showResult && isCorrect === true}
                            className={`p-4 rounded-2xl border-2 text-left transition-colors backface-hidden ${bgClass} ${showResult && isCorrect ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                            <div className="flex items-center justify-between">
                                <span className={`font-medium ${showResult && isCorrectOption && isCorrect ? 'text-green-700' : showResult && isSelected && !isCorrect ? 'text-red-700' : 'text-gray-700'}`}>
                                    {option}
                                </span>
                                {showResult && isCorrectOption && isCorrect && (
                                    <CheckCircle className="text-green-500" size={20} />
                                )}
                                {showResult && isSelected && !isCorrect && (
                                    <XCircle className="text-red-500" size={20} />
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* Close Confirmation Dialog */}
            <CloseConfirmDialog
                isOpen={showCloseDialog}
                onConfirm={handleConfirmClose}
                onCancel={() => setShowCloseDialog(false)}
            />
        </div>
    );
}
