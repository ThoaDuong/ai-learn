"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Timer, PenLine, Sparkles } from "lucide-react";
import Link from "next/link";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";

const learningModes = [
    {
        id: "flash-choice",
        title: "Flash Choice",
        description: "Trắc nghiệm 4 đáp án Việt - Anh. Chọn đúng để tiếp tục!",
        icon: Zap,
        gradient: "from-yellow-400 via-orange-400 to-amber-500",
        shadowColor: "shadow-yellow-500/40",
        bgGlow: "bg-yellow-400/20",
        href: "/learn/flash-choice"
    },
    {
        id: "speed-run",
        title: "Speed Run",
        description: "Đua tốc độ! Trả lời đúng trong 3 giây để ghi điểm.",
        icon: Timer,
        gradient: "from-emerald-400 via-green-500 to-teal-500",
        shadowColor: "shadow-green-500/40",
        bgGlow: "bg-green-400/20",
        href: "/learn/speed-run"
    },
    {
        id: "master-writing",
        title: "Master Writing",
        description: "Xem nghĩa tiếng Việt, viết từ tiếng Anh. Thử thách thực sự!",
        icon: PenLine,
        gradient: "from-purple-500 via-violet-500 to-indigo-500",
        shadowColor: "shadow-purple-500/40",
        bgGlow: "bg-purple-400/20",
        href: "/learn/master-writing"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default function LearnPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 font-medium text-sm mb-4">
                            <Sparkles size={16} />
                            <span>Gamified Learning</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4">
                            Learn Vocabulary
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Chọn chế độ học phù hợp với bạn. Học từ vựng B2 hoặc từ các nhóm cá nhân của bạn!
                        </p>
                    </motion.div>

                    {/* Mode Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {learningModes.map((mode) => (
                            <motion.div
                                key={mode.id}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link href={mode.href}>
                                    <div className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${mode.gradient} ${mode.shadowColor} shadow-2xl cursor-pointer group`}>
                                        {/* Glow Effect */}
                                        <div className={`absolute -top-20 -right-20 w-40 h-40 ${mode.bgGlow} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                                        <div className={`absolute -bottom-20 -left-20 w-40 h-40 ${mode.bgGlow} rounded-full blur-3xl opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <mode.icon className="w-8 h-8 text-white" />
                                            </div>

                                            <h2 className="text-2xl font-bold text-white mb-3">
                                                {mode.title}
                                            </h2>

                                            <p className="text-white/90 text-sm leading-relaxed">
                                                {mode.description}
                                            </p>

                                            {/* Arrow indicator */}
                                            <div className="mt-6 flex items-center text-white/80 group-hover:text-white transition-colors">
                                                <span className="text-sm font-medium">Bắt đầu học</span>
                                                <motion.span
                                                    className="ml-2"
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                                >
                                                    →
                                                </motion.span>
                                            </div>
                                        </div>

                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="inline-block px-6 py-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                            <p className="text-gray-600 text-sm">
                                💡 <strong>Tip:</strong> Đăng nhập để học từ các nhóm từ vựng cá nhân của bạn!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
