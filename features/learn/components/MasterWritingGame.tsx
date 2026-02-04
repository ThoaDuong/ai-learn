"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, RotateCcw, Lightbulb, AlertCircle, X } from "lucide-react";
import Link from "next/link";
import { Vocabulary } from "@/types";
import VocabularyInfoCard from "./VocabularyInfoCard";
import CloseConfirmDialog from "./CloseConfirmDialog";

interface MasterWritingGameProps {
    vocabularies: Vocabulary[];
    onComplete: () => void;
}

const MAX_ATTEMPTS = 3;

export default function MasterWritingGame({ vocabularies, onComplete }: MasterWritingGameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showingInfo, setShowingInfo] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [showCloseDialog, setShowCloseDialog] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const currentVocab = vocabularies[currentIndex];

    useEffect(() => {
        if (inputRef.current && !showingInfo) {
            inputRef.current.focus();
        }
    }, [currentIndex, showingInfo]);

    const checkAnswer = useCallback(() => {
        const trimmedInput = userInput.trim().toLowerCase();
        const correctAnswer = currentVocab.word.toLowerCase();

        if (trimmedInput === correctAnswer) {
            setIsCorrect(true);
            setCorrectCount(prev => prev + 1);
            setShowingInfo(true);
        } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);

            // Shake animation
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);

            if (newAttempts >= MAX_ATTEMPTS) {
                // Max attempts reached - show correct answer
                setIsCorrect(false);
                setShowingInfo(true);
            } else {
                // Clear input for retry
                setUserInput("");
            }
        }
    }, [userInput, currentVocab, attempts]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userInput.trim()) {
            checkAnswer();
        }
    };

    const handleContinue = () => {
        if (currentIndex < vocabularies.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setUserInput("");
            setAttempts(0);
            setIsCorrect(null);
            setShowingInfo(false);
        } else {
            setIsComplete(true);
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setUserInput("");
        setAttempts(0);
        setIsCorrect(null);
        setShowingInfo(false);
        setCorrectCount(0);
        setIsComplete(false);
    };

    const handleClose = () => {
        setShowCloseDialog(true);
    };

    const handleConfirmClose = () => {
        setShowCloseDialog(false);
        onComplete();
    };

    if (isComplete) {
        const percentage = Math.round((correctCount / vocabularies.length) * 100);

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
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center shadow-lg"
                >
                    <Trophy className="w-12 h-12 text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-800 mb-2">Hoàn thành!</h2>
                <p className="text-gray-500 mb-6">Bạn đã viết đúng {correctCount}/{vocabularies.length} từ</p>

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
                        Làm lại
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

    if (showingInfo) {
        return (
            <div className="flex justify-center">
                <div>
                    {!isCorrect && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4 p-4 rounded-2xl bg-red-50 border border-red-200 text-center"
                        >
                            <p className="text-red-600 font-medium">Đáp án đúng là: <strong>{currentVocab.word}</strong></p>
                        </motion.div>
                    )}
                    <VocabularyInfoCard
                        vocabulary={currentVocab}
                        onContinue={handleContinue}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Header: Progress + Close Button */}
            <div className="mb-8">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>Từ {currentIndex + 1}/{vocabularies.length}</span>
                    <div className="flex items-center gap-3">
                        <span>Đúng: {correctCount}</span>
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
                        animate={{ width: `${((currentIndex + 1) / vocabularies.length) * 100}%` }}
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
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Nghĩa tiếng Việt</p>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
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
                        <span>Gợi ý: {currentVocab.word.length} ký tự</span>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Input Form */}
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
                        placeholder="Nhập từ tiếng Anh..."
                        className={`w-full px-6 py-4 rounded-2xl border-2 text-lg font-medium outline-none transition-all ${isShaking
                            ? 'border-red-400 bg-red-50'
                            : 'border-gray-200 focus:border-purple-400 bg-white'
                            }`}
                        autoComplete="off"
                        autoCapitalize="off"
                        spellCheck={false}
                    />
                </motion.div>

                {/* Attempts indicator */}
                {attempts > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mt-3 text-red-500"
                    >
                        <AlertCircle size={16} />
                        <span className="text-sm">Sai rồi! Còn {MAX_ATTEMPTS - attempts} lần thử</span>
                    </motion.div>
                )}

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={!userInput.trim()}
                    className="w-full mt-4 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Kiểm tra
                </motion.button>
            </form>

            {/* Close Confirmation Dialog */}
            <CloseConfirmDialog
                isOpen={showCloseDialog}
                onConfirm={handleConfirmClose}
                onCancel={() => setShowCloseDialog(false)}
            />
        </div>
    );
}
