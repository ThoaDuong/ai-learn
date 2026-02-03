"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Trophy, RotateCcw, Flame, Timer } from "lucide-react";
import Link from "next/link";
import { Vocabulary } from "@/types";

interface SpeedRunGameProps {
    vocabularies: Vocabulary[];
    onComplete: () => void;
}

interface QuizQuestion {
    vocabulary: Vocabulary;
    options: string[];
    correctIndex: number;
}

const TIMER_DURATION = 3000; // 3 seconds

export default function SpeedRunGame({ vocabularies, onComplete }: SpeedRunGameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
    const [isAnswering, setIsAnswering] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number>(Date.now());

    // Generate quiz questions with shuffled options
    const questions: QuizQuestion[] = useMemo(() => {
        return vocabularies.map((vocab) => {
            const otherVocabs = vocabularies.filter(v => v.word !== vocab.word);
            const shuffledOthers = otherVocabs.sort(() => Math.random() - 0.5).slice(0, 3);
            const wrongAnswers = shuffledOthers.map(v => v.word);

            const allOptions = [vocab.word, ...wrongAnswers];
            const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
            const correctIndex = shuffledOptions.indexOf(vocab.word);

            return {
                vocabulary: vocab,
                options: shuffledOptions,
                correctIndex
            };
        });
    }, [vocabularies]);

    const currentQuestion = questions[currentIndex];

    // Timer logic
    useEffect(() => {
        if (isGameOver || isAnswering) return;

        startTimeRef.current = Date.now();
        setTimeLeft(TIMER_DURATION);

        const updateTimer = () => {
            const elapsed = Date.now() - startTimeRef.current;
            const remaining = Math.max(0, TIMER_DURATION - elapsed);
            setTimeLeft(remaining);

            if (remaining <= 0) {
                // Time's up - game over
                setIsGameOver(true);
            }
        };

        timerRef.current = setInterval(updateTimer, 50);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [currentIndex, isGameOver, isAnswering]);

    const handleAnswer = useCallback((optionIndex: number) => {
        if (selectedAnswer !== null || isGameOver) return;

        setIsAnswering(true);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        setSelectedAnswer(optionIndex);
        const correct = optionIndex === currentQuestion.correctIndex;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 1);

            // Move to next question after short delay
            setTimeout(() => {
                if (currentIndex < questions.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                    setSelectedAnswer(null);
                    setIsCorrect(null);
                    setIsAnswering(false);
                } else {
                    // Completed all questions!
                    setIsGameOver(true);
                }
            }, 500);
        } else {
            // Wrong answer - game over
            setTimeout(() => {
                setIsGameOver(true);
            }, 1000);
        }
    }, [selectedAnswer, currentQuestion, currentIndex, questions.length, isGameOver]);

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setScore(0);
        setIsGameOver(false);
        setTimeLeft(TIMER_DURATION);
        setIsAnswering(false);
    };

    const timerPercentage = (timeLeft / TIMER_DURATION) * 100;
    const timerColor = timerPercentage > 50 ? 'from-green-400 to-emerald-500' :
        timerPercentage > 25 ? 'from-yellow-400 to-amber-500' :
            'from-red-400 to-rose-500';

    if (isGameOver) {
        const isWin = currentIndex === questions.length - 1 && isCorrect;

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${score > 0 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-red-400 to-rose-500'
                        }`}
                >
                    {score > 0 ? (
                        <Trophy className="w-12 h-12 text-white" />
                    ) : (
                        <XCircle className="w-12 h-12 text-white" />
                    )}
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {isWin ? '🎉 Xuất sắc!' : 'Game Over!'}
                </h2>

                <div className="flex items-center justify-center gap-2 mb-6">
                    <Flame className="text-orange-500" />
                    <span className="text-4xl font-bold text-gray-800">{score}</span>
                    <span className="text-gray-500">điểm</span>
                </div>

                {!isWin && isCorrect === false && (
                    <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200">
                        <p className="text-red-600 text-sm mb-1">Đáp án đúng:</p>
                        <p className="font-bold text-red-700">{currentQuestion?.vocabulary.word}</p>
                    </div>
                )}

                <div className="flex gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleRestart}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium flex items-center gap-2 shadow-lg"
                    >
                        <RotateCcw size={18} />
                        Chơi lại
                    </motion.button>
                    <Link href="/learn">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium"
                        >
                            Quay lại
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Score & Timer */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                        <Flame className="text-orange-500" />
                        <span className="text-2xl font-bold text-gray-800">{score}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <Timer size={18} />
                        <span>{(timeLeft / 1000).toFixed(1)}s</span>
                    </div>
                </div>

                {/* Timer Bar */}
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full bg-gradient-to-r ${timerColor}`}
                        style={{ width: `${timerPercentage}%` }}
                        transition={{ duration: 0.05 }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-6"
                >
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Nghĩa tiếng Việt</p>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {currentQuestion.vocabulary.meaning}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        ({currentQuestion.vocabulary.partOfSpeech})
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* Options */}
            <div className="grid grid-cols-2 gap-3">
                {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrectOption = index === currentQuestion.correctIndex;
                    const showResult = selectedAnswer !== null;

                    let bgClass = "bg-white hover:bg-gray-50 border-gray-200";
                    if (showResult) {
                        if (isCorrectOption) {
                            bgClass = "bg-green-100 border-green-500";
                        } else if (isSelected && !isCorrect) {
                            bgClass = "bg-red-100 border-red-500";
                        }
                    }

                    return (
                        <motion.button
                            key={index}
                            whileHover={!showResult ? { scale: 1.03 } : {}}
                            whileTap={!showResult ? { scale: 0.97 } : {}}
                            onClick={() => handleAnswer(index)}
                            disabled={showResult}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${bgClass} ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                            <div className="flex items-center justify-between">
                                <span className={`font-medium ${showResult && isCorrectOption ? 'text-green-700' : showResult && isSelected && !isCorrect ? 'text-red-700' : 'text-gray-700'}`}>
                                    {option}
                                </span>
                                {showResult && isCorrectOption && (
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
        </div>
    );
}
