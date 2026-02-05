"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Trophy, RotateCcw, X, Volume2 } from "lucide-react";
import Link from "next/link";
import { Vocabulary } from "@/types";
import { useGameSounds } from "../hooks/useGameSounds";
import Confetti from "./Confetti";
import CloseConfirmDialog from "./CloseConfirmDialog";
import { useActivityTimer } from "../hooks/useActivityTimer";
import StreakCongratulationsDialog from "./StreakCongratulationsDialog";

interface FlashChoiceGameProps {
    vocabularies: Vocabulary[];
    onComplete: () => void;
}

interface QuizQuestion {
    vocabulary: Vocabulary;
    options: string[];
    correctIndex: number;
}

const TOTAL_QUESTIONS = 50;

export default function FlashChoiceGame({ vocabularies, onComplete }: FlashChoiceGameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showCloseDialog, setShowCloseDialog] = useState(false);

    // Streak & Timer logic
    const [hasShownStreakDialog, setHasShownStreakDialog] = useState(false);
    const [showStreakDialog, setShowStreakDialog] = useState(false);
    const [newStreakValue, setNewStreakValue] = useState(0);
    const { start, getMinutes } = useActivityTimer();

    const { playCorrect, playWrong } = useGameSounds();

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

    // Generate quiz questions with shuffled Vietnamese meaning options
    const questions: QuizQuestion[] = useMemo(() => {
        // Repeat vocabularies if less than TOTAL_QUESTIONS
        const extendedVocabs: Vocabulary[] = [];
        while (extendedVocabs.length < TOTAL_QUESTIONS) {
            const shuffled = [...vocabularies].sort(() => Math.random() - 0.5);
            extendedVocabs.push(...shuffled);
        }

        return extendedVocabs.slice(0, TOTAL_QUESTIONS).map((vocab) => {
            // Get 3 random wrong Vietnamese meanings
            const otherVocabs = vocabularies.filter(v => v.word !== vocab.word);
            const shuffledOthers = otherVocabs.sort(() => Math.random() - 0.5).slice(0, 3);
            const wrongAnswers = shuffledOthers.map(v => v.meaning);

            // Combine and shuffle all options (Vietnamese meanings)
            const allOptions = [vocab.meaning, ...wrongAnswers];
            const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
            const correctIndex = shuffledOptions.indexOf(vocab.meaning);

            return {
                vocabulary: vocab,
                options: shuffledOptions,
                correctIndex
            };
        });
    }, [vocabularies]);

    const currentQuestion = questions[currentIndex];

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

    const handleAnswer = useCallback((optionIndex: number) => {
        if (selectedAnswer !== null && isCorrect) return; // Already answered correctly

        const correct = optionIndex === currentQuestion.correctIndex;
        setSelectedAnswer(optionIndex);
        setIsCorrect(correct);

        if (correct) {
            playCorrect();
            const newCorrectCount = correctCount + 1;
            setCorrectCount(newCorrectCount);

            // Check streak at 5 correct answers
            if (newCorrectCount === 5 && !hasShownStreakDialog) {
                checkStreak();
            }

            // Check if reached 50 correct answers
            if (newCorrectCount >= TOTAL_QUESTIONS) {
                setShowConfetti(true);
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
            // Allow retry - don't advance, just show wrong state
        }
    }, [selectedAnswer, isCorrect, currentQuestion, currentIndex, questions.length, correctCount, playCorrect, playWrong, hasShownStreakDialog]);

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setCorrectCount(0);
        setIsComplete(false);
        setShowConfetti(false);
        setHasShownStreakDialog(false);
        start(); // Restart timer
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

    const speakWord = (word: string) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    };

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
                    className="text-center"
                >
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

                    <div className="flex gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRestart}
                            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium flex items-center gap-2"
                        >
                            <RotateCcw size={18} />
                            Play Again
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

            {/* Header: Progress + Close Button */}
            <div className="mb-8">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>Question {currentIndex + 1}/{TOTAL_QUESTIONS}</span>
                    <div className="flex items-center gap-3">
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
                    <div className="flex items-center gap-2 text-gray-500">
                        <span className="px-2 py-1 rounded-lg bg-gray-100 text-sm">
                            {currentQuestion.vocabulary.partOfSpeech}
                        </span>
                        <span className="text-sm italic">
                            {currentQuestion.vocabulary.phonetic}
                        </span>
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
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${bgClass} ${showResult && isCorrect ? 'cursor-default' : 'cursor-pointer'}`}
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

            {/* Hint when wrong */}
            {selectedAnswer !== null && !isCorrect && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-500 mt-4 text-sm"
                >
                    Wrong! Try again.
                </motion.p>
            )}

            {/* Close Confirmation Dialog */}
            <CloseConfirmDialog
                isOpen={showCloseDialog}
                onConfirm={handleConfirmClose}
                onCancel={() => setShowCloseDialog(false)}
            />
        </div>
    );
}
