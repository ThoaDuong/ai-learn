"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StreakCardProps {
    currentStreak: number;
}

export default function StreakCard({ currentStreak }: StreakCardProps) {
    return (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 shadow-sm p-6 flex flex-col items-center justify-center">
            <div className="h-40 w-40 border-4 border-orange-300 rounded-full flex flex-col items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    className="text-5xl mb-2"
                >
                    <Image src="/images/fire.png" alt="Fire" width={50} height={50} />
                </motion.div>
                <div className="text-4xl font-extrabold text-orange-600">{currentStreak}</div>
                <p className="text-sm font-semibold text-gray-700 mt-1">
                    {currentStreak === 1 ? "day streak" : "days streak"}
                </p>
            </div>
        </div>
    );
}
