"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Trophy, RotateCcw, Flame, Timer } from "lucide-react";
import Link from "next/link";
import { Vocabulary } from "@/types";
import { useGameSounds } from "../hooks/useGameSounds";
import Confetti from "./Confetti";

interface SpeedRunGameProps {
    vocabularies: Vocabulary[];
    onComplete: () => void;
}

interface QuizQuestion {
    vocabulary: Vocabulary;
    options: string[];
    correctIndex: number;
}

const TIMER_DURATION = 5000; // 5 seconds
const WIN_THRESHOLD = 20; // Score threshold for win celebration

export default function SpeedRunGame({ vocabularies, onComplete }: SpeedRunGameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
    const [isAnswering, setIsAnswering] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [hasPlayedEndSound, setHasPlayedEndSound] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number>(Date.now());

    const { playCorrect, playGameOverSad, playGameOverHappy } = useGameSounds();

    // Generate quiz questions with shuffled Vietnamese meaning options
    const questions: QuizQuestion[] = useMemo(() => {
        return vocabularies.map((vocab) => {
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

    // Speak word function
    const speakWord = useCallback((word: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop any current speech
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    // Auto-read word when question changes
    useEffect(() => {
        if (isGameOver || !currentQuestion) return;
        speakWord(currentQuestion.vocabulary.word);
    }, [currentIndex, isGameOver, currentQuestion, speakWord]);

    // Timer logic - starts after word is spoken
    useEffect(() => {
        if (isGameOver || isAnswering) return;

        // Small delay to let speech start first
        const startDelay = setTimeout(() => {
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
        }, 300); // 300ms delay for speech to start

        return () => {
            clearTimeout(startDelay);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [currentIndex, isGameOver, isAnswering]);

    // Play end sound when game over
    useEffect(() => {
        if (isGameOver && !hasPlayedEndSound) {
            setHasPlayedEndSound(true);
            if (score >= WIN_THRESHOLD) {
                setShowConfetti(true);
                playGameOverHappy();
            } else {
                playGameOverSad();
            }
        }
    }, [isGameOver, hasPlayedEndSound, score, playGameOverHappy, playGameOverSad]);

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
            playCorrect();
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
    }, [selectedAnswer, currentQuestion, currentIndex, questions.length, isGameOver, playCorrect]);

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setScore(0);
        setIsGameOver(false);
        setTimeLeft(TIMER_DURATION);
        setIsAnswering(false);
        setShowConfetti(false);
        setHasPlayedEndSound(false);
    };

    const timerPercentage = (timeLeft / TIMER_DURATION) * 100;
    const timerColor = timerPercentage > 50 ? 'from-green-400 to-emerald-500' :
        timerPercentage > 25 ? 'from-yellow-400 to-amber-500' :
            'from-red-400 to-rose-500';

    if (isGameOver) {
        const isWin = score >= WIN_THRESHOLD;
        const isAllCorrect = currentIndex === questions.length - 1 && isCorrect;

        return (
            <>
                <Confetti active={showConfetti} />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${isWin ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-red-400 to-rose-500'
                            }`}
                    >
                        {isWin ? (
                            <Trophy className="w-12 h-12 text-white" />
                        ) : (
                            <XCircle className="w-12 h-12 text-white" />
                        )}
                    </motion.div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Game Over!
                    </h2>

                    {isWin && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-emerald-600 font-medium mb-2"
                        >
                            🎉 Tuyệt vời! Bạn đạt {">"}= {WIN_THRESHOLD} điểm!
                        </motion.p>
                    )}

                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Flame className="text-orange-500" />
                        <span className="text-4xl font-bold text-gray-800">{score}</span>
                        <span className="text-gray-500">điểm</span>
                    </div>

                    {!isAllCorrect && isCorrect === false && currentQuestion && (
                        <div className="mb-6 p-5 rounded-2xl bg-red-50 border border-red-200 text-left max-w-md mx-auto">
                            <p className="text-red-600 text-sm mb-3 font-medium">Đáp án đúng:</p>

                            {/* English word with part of speech */}
                            <div className="mb-3">
                                <span className="text-2xl font-bold text-red-700">
                                    {currentQuestion.vocabulary.word}
                                </span>
                                <span className="ml-2 px-2 py-1 rounded-lg bg-red-100 text-red-600 text-sm">
                                    {currentQuestion.vocabulary.partOfSpeech}
                                </span>
                                {currentQuestion.vocabulary.phonetic && (
                                    <span className="ml-2 text-red-500 text-sm italic">
                                        {currentQuestion.vocabulary.phonetic}
                                    </span>
                                )}
                            </div>

                            {/* Vietnamese meaning */}
                            <p className="text-gray-700 mb-3">
                                <span className="text-gray-500">Nghĩa: </span>
                                <span className="font-medium">{currentQuestion.vocabulary.meaning}</span>
                            </p>

                            {/* Example sentence */}
                            {currentQuestion.vocabulary.example && (
                                <div className="pt-3 border-t border-red-200">
                                    <p className="text-gray-600 text-sm italic">
                                        "{currentQuestion.vocabulary.example}"
                                    </p>
                                    {currentQuestion.vocabulary.exampleTranslation && (
                                        <p className="text-gray-500 text-sm mt-1">
                                            → {currentQuestion.vocabulary.exampleTranslation}
                                        </p>
                                    )}
                                </div>
                            )}
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
            </>
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

            {/* Question Card - English word with phonetic */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-6"
                >
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Từ tiếng Anh</p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {currentQuestion.vocabulary.word}
                    </h2>
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
