"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, X } from "lucide-react";
import Confetti from "./Confetti";
import { useGameSounds } from "../hooks/useGameSounds";

interface StreakCongratulationsDialogProps {
    isOpen: boolean;
    newStreak: number;
    onClose: () => void;
}

export default function StreakCongratulationsDialog({
    isOpen,
    newStreak,
    onClose
}: StreakCongratulationsDialogProps) {
    const { playGameOverHappy } = useGameSounds();
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (isOpen) {
            playGameOverHappy();
            setShowConfetti(true);
        } else {
            setShowConfetti(false);
        }
    }, [isOpen, playGameOverHappy]);


    return (
        <>
            <Confetti active={showConfetti} />
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1.2, rotate: [0, -10, 10, -5, 5, 0] }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mb-6 relative"
                                >
                                    <Flame className="w-20 h-20 text-orange-500 fill-orange-500 animate-pulse" />
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 }}
                                        className="absolute -bottom-2 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-lg shadow-lg"
                                    >
                                        {newStreak}
                                    </motion.div>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-2xl font-bold text-gray-800 mb-2"
                                >
                                    Congratulations!
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-lg text-gray-600 font-medium"
                                >
                                    {newStreak} day streak! Amazing! 🔥
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="text-sm text-gray-400 mt-4"
                                >
                                    Keep it up!
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
