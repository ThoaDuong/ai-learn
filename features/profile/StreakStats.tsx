"use client";

import { motion } from "framer-motion";

interface StreakStatsProps {
    streak: number;
}

export default function StreakStats({ streak }: StreakStatsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 shadow-sm p-6"
        >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Daily Streak</h3>

            <div className="flex flex-col items-center justify-center py-4">
                {/* Fire Icon with Animation */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="text-6xl mb-2"
                >
                    🔥
                </motion.div>

                {/* Streak Number */}
                <div className="text-5xl font-extrabold text-orange-600 mb-2">
                    {streak}
                </div>

                {/* Streak Text */}
                <p className="text-lg font-semibold text-gray-700">
                    {streak === 1 ? "day streak" : "days streak"}
                </p>

                {/* Motivational Text */}
                <p className="text-sm text-gray-600 mt-3 text-center">
                    {streak >= 7
                        ? "🎉 Amazing! Keep it up!"
                        : streak >= 3
                            ? "💪 You're on fire!"
                            : "✨ Great start!"}
                </p>

                {/* Progress Indicator */}
                <div className="w-full mt-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{streak} / {Math.ceil(streak / 7) * 7} days</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(streak % 7 || 7) * (100 / 7)}%` }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="h-full bg-gradient-to-r from-orange-400 to-red-500"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
