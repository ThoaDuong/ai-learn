"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Timer, PenLine } from "lucide-react";

interface GameModePickerProps {
    onSelectGame: (mode: "flash-choice" | "speed-run" | "master-writing") => void;
    disabledModes?: string[];
}

const gameModes = [
    {
        id: "flash-choice" as const,
        title: "Flash Choice",
        description: "4-option quiz: pick the correct English word!",
        icon: Zap,
        gradient: "from-yellow-400 via-orange-400 to-amber-500",
        shadowColor: "shadow-yellow-500/30",
        bgGlow: "bg-yellow-400/20",
        minWords: 4,
    },
    {
        id: "speed-run" as const,
        title: "Speed Run",
        description: "Race against time! Answer within 3 seconds.",
        icon: Timer,
        gradient: "from-emerald-400 via-green-500 to-teal-500",
        shadowColor: "shadow-green-500/30",
        bgGlow: "bg-green-400/20",
        minWords: 4,
    },
    {
        id: "master-writing" as const,
        title: "Master Writing",
        description: "See the meaning, write the English word.",
        icon: PenLine,
        gradient: "from-purple-500 via-violet-500 to-indigo-500",
        shadowColor: "shadow-purple-500/30",
        bgGlow: "bg-purple-400/20",
        minWords: 1,
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 14 },
    },
};

export default function GameModePicker({ onSelectGame, disabledModes = [] }: GameModePickerProps) {
    return (
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Practice Games</h3>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {gameModes.map((mode) => {
                    const isDisabled = disabledModes.includes(mode.id);

                    return (
                        <motion.button
                            key={mode.id}
                            variants={cardVariants}
                            whileHover={isDisabled ? {} : { scale: 1.04, y: -4 }}
                            whileTap={isDisabled ? {} : { scale: 0.97 }}
                            onClick={() => !isDisabled && onSelectGame(mode.id)}
                            disabled={isDisabled}
                            className={`relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br ${mode.gradient} ${mode.shadowColor} shadow-lg text-left transition-all group cursor-pointer ${
                                isDisabled ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {/* Glow */}
                            <div
                                className={`absolute -top-12 -right-12 w-28 h-28 ${mode.bgGlow} rounded-full blur-2xl opacity-50 group-hover:opacity-90 transition-opacity duration-400`}
                            />

                            <div className="relative z-10">
                                <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <mode.icon className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-1">{mode.title}</h4>
                                <p className="text-white/85 text-xs leading-relaxed">{mode.description}</p>

                                <div className="mt-3 flex items-center text-white/70 group-hover:text-white transition-colors">
                                    <span className="text-xs font-medium">Start</span>
                                    <motion.span
                                        className="ml-1.5 text-sm"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        →
                                    </motion.span>
                                </div>
                            </div>

                            {/* Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.button>
                    );
                })}
            </motion.div>
        </div>
    );
}
