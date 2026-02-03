"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Trophy, RotateCcw, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Vocabulary } from "@/types";

interface FlashChoiceGameProps {
    vocabularies: Vocabulary[];
    onComplete: () => void;
}

interface QuizQuestion {
    vocabulary: Vocabulary;
    options: string[];
    correctIndex: number;
}

export default function FlashChoiceGame({ vocabularies, onComplete }: FlashChoiceGameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // Generate quiz questions with shuffled options
    const questions: QuizQuestion[] = useMemo(() => {
        return vocabularies.map((vocab) => {
            // Get 3 random wrong answers
            const otherVocabs = vocabularies.filter(v => v.word !== vocab.word);
            const shuffledOthers = otherVocabs.sort(() => Math.random() - 0.5).slice(0, 3);
            const wrongAnswers = shuffledOthers.map(v => v.word);

            // Combine and shuffle all options
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

    const handleAnswer = useCallback((optionIndex: number) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(optionIndex);
        const correct = optionIndex === currentQuestion.correctIndex;
        setIsCorrect(correct);

        if (correct) {
            setCorrectCount(prev => prev + 1);
        }

        // Auto advance after delay
        setTimeout(() => {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setIsComplete(true);
            }
        }, correct ? 800 : 1500);
    }, [selectedAnswer, currentQuestion, currentIndex, questions.length]);

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setCorrectCount(0);
        setIsComplete(false);
    };

    if (isComplete) {
        const percentage = Math.round((correctCount / questions.length) * 100);

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
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg"
                >
                    <Trophy className="w-12 h-12 text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-800 mb-2">Hoàn thành!</h2>
                <p className="text-gray-500 mb-6">Bạn đã trả lời đúng {correctCount}/{questions.length} câu</p>

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
                        Chơi lại
                    </motion.button>
                    <Link href="/learn">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium"
                        >
                            Chế độ khác
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Progress */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Câu {currentIndex + 1}/{questions.length}</span>
                    <span>Đúng: {correctCount}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-yellow-400 to-amber-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
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
