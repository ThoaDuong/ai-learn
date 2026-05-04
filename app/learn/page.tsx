"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useSession } from "next-auth/react";
import {
    Sparkles,
    ChevronDown,
    ChevronRight,
    Lock,
    BookOpen,
    Package,
    CheckCircle,
    BookOpenCheck,
} from "lucide-react";
import Link from "next/link";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";

interface LevelInfo {
    level: string;
    total: number;
    boxes: number;
}

interface VocabularyGroup {
    _id: string;
    name: string;
    wordCount: number;
}

const levelConfig: Record<
    string,
    { gradient: string; shadow: string; bgGlow: string; emoji: string }
> = {
    B1: {
        gradient: "from-yellow-400 via-amber-400 to-orange-400",
        shadow: "shadow-amber-400/30",
        bgGlow: "bg-yellow-400/20",
        emoji: "📗",
    },
    B2: {
        gradient: "from-orange-400 via-orange-500 to-red-400",
        shadow: "shadow-orange-500/30",
        bgGlow: "bg-orange-400/20",
        emoji: "📙",
    },
    C1: {
        gradient: "from-red-400 via-rose-500 to-pink-500",
        shadow: "shadow-rose-500/30",
        bgGlow: "bg-red-400/20",
        emoji: "📕",
    },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 },
    },
};

const BOX_SIZE = 50;

interface ProgressEntry {
    level: string;
    box: number;
    gameMode: string;
}

const GAME_MODES = ["flash-choice", "speed-run", "master-writing"];

export default function LearnPage() {
    const { data: session, status } = useSession();
    const [levels, setLevels] = useState<LevelInfo[]>([]);
    const [groups, setGroups] = useState<VocabularyGroup[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
    const [progress, setProgress] = useState<ProgressEntry[]>([]);

    // Fetch level stats + progress in parallel (async-parallel rule)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [levelsRes, progressRes] = await Promise.all([
                    fetch("/api/learn/vocabulary"),
                    status === "authenticated"
                        ? fetch("/api/learn/progress")
                        : Promise.resolve(null),
                ]);

                const levelsData = await levelsRes.json();
                if (levelsData.levels) {
                    setLevels(levelsData.levels.filter((l: LevelInfo) => l.total > 0));
                }

                if (progressRes) {
                    const progressData = await progressRes.json();
                    setProgress(progressData.completed || []);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [status]);

    // Build a Set for O(1) lookups (js-set-map-lookups rule)
    const completedSet = useMemo(() => {
        const set = new Set<string>();
        progress.forEach((p) => set.add(`${p.level}-${p.box}-${p.gameMode}`));
        return set;
    }, [progress]);

    const getBoxCompletionInfo = useCallback(
        (level: string, box: number) => {
            const completed = GAME_MODES.filter((mode) =>
                completedSet.has(`${level}-${box}-${mode}`)
            );
            return {
                completedModes: completed,
                isFullyCompleted: completed.length === 3,
                completedCount: completed.length,
            };
        },
        [completedSet]
    );

    // Fetch user groups
    const fetchGroups = useCallback(async () => {
        if (status !== "authenticated") return;
        try {
            const response = await fetch("/api/vocabulary/groups?minWords=1");
            const data = await response.json();
            if (data.groups) {
                setGroups(data.groups.filter((g: VocabularyGroup) => g.wordCount >= 1));
            }
        } catch (error) {
            console.error("Error fetching groups:", error);
        }
    }, [status]);

    useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);

    const handleToggleLevel = (level: string) => {
        setExpandedLevel((prev) => (prev === level ? null : level));
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 py-8 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Hero Section */}
                    <motion.div
                        className="text-center mb-10"
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
                            Choose a vocabulary set to study. Learn new words, then practice with games!
                        </p>
                    </motion.div>

                    {/* Content */}
                    {loading ? (
                        <div className="p-8 rounded-2xl bg-gray-100 text-center">
                            <div className="animate-spin w-8 h-8 border-3 border-purple-500 border-t-transparent rounded-full mx-auto mb-3" />
                            <p className="text-gray-500 text-sm">Loading vocabulary sets...</p>
                        </div>
                    ) : (
                        <motion.div
                            className="space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Level Cards */}
                            {levels.map((levelInfo) => {
                                const config = levelConfig[levelInfo.level] || levelConfig.B1;
                                const isExpanded = expandedLevel === levelInfo.level;

                                return (
                                    <motion.div key={levelInfo.level} variants={cardVariants} layout>
                                        {/* Level Header */}
                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            onClick={() => handleToggleLevel(levelInfo.level)}
                                            className={`w-full p-5 rounded-2xl bg-gradient-to-r ${config.gradient} text-white text-left ${config.shadow} shadow-lg transition-all cursor-pointer`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                                                        {config.emoji}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg">
                                                            {levelInfo.level} Vocabulary
                                                        </h3>
                                                        <p className="text-white/80 text-sm">
                                                            {levelInfo.total} words · {levelInfo.boxes}{" "}
                                                            {levelInfo.boxes === 1 ? "box" : "boxes"}
                                                        </p>
                                                    </div>
                                                </div>
                                                <motion.div
                                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown size={24} className="text-white/80" />
                                                </motion.div>
                                            </div>
                                        </motion.button>

                                        {/* Boxes Dropdown */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-3 px-1">
                                                        {Array.from({ length: levelInfo.boxes }, (_, i) => {
                                                            const boxNum = i + 1;
                                                            const wordsInBox =
                                                                boxNum === levelInfo.boxes
                                                                    ? levelInfo.total - (levelInfo.boxes - 1) * BOX_SIZE
                                                                    : BOX_SIZE;
                                                            const boxInfo = getBoxCompletionInfo(levelInfo.level, boxNum);

                                                            return (
                                                                <Link
                                                                    key={boxNum}
                                                                    href={`/learn/${levelInfo.level}/${boxNum}`}
                                                                >
                                                                    <motion.div
                                                                        initial={{ opacity: 0, y: -10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: i * 0.03 }}
                                                                        whileHover={{ scale: 1.03, y: -2 }}
                                                                        whileTap={{ scale: 0.97 }}
                                                                        className={`p-3 rounded-xl border-2 bg-white transition-all shadow-sm hover:shadow-md text-left cursor-pointer group ${
                                                                            boxInfo.isFullyCompleted
                                                                                ? "border-green-400 bg-green-50/50 hover:border-green-500"
                                                                                : "border-gray-200 hover:border-gray-400"
                                                                        }`}
                                                                    >
                                                                        <div className="flex items-center gap-2">
                                                                            <div
                                                                                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                                                                    boxInfo.isFullyCompleted
                                                                                        ? "bg-green-100"
                                                                                        : config.bgGlow
                                                                                }`}
                                                                            >
                                                                                {boxInfo.isFullyCompleted ? (
                                                                                    <CheckCircle size={16} className="text-green-600" />
                                                                                ) : (
                                                                                    <Package size={14} className="text-gray-600" />
                                                                                )}
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <p className={`font-semibold text-sm ${
                                                                                    boxInfo.isFullyCompleted ? "text-green-700" : "text-gray-800"
                                                                                }`}>
                                                                                    Box {boxNum}
                                                                                </p>
                                                                                <p className="text-gray-500 text-xs">
                                                                                    {wordsInBox} words
                                                                                </p>
                                                                            </div>
                                                                            {/* Game mode dots */}
                                                                            {boxInfo.completedCount > 0 && !boxInfo.isFullyCompleted && (
                                                                                <div className="flex gap-1 mr-1">
                                                                                    {GAME_MODES.map((mode) => (
                                                                                        <div
                                                                                            key={mode}
                                                                                            className={`w-2 h-2 rounded-full ${
                                                                                                boxInfo.completedModes.includes(mode)
                                                                                                    ? "bg-green-500"
                                                                                                    : "bg-gray-300"
                                                                                            }`}
                                                                                            title={mode}
                                                                                        />
                                                                                    ))}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        {!boxInfo.isFullyCompleted && (
                                                                            <ChevronRight
                                                                                size={14}
                                                                                className="text-gray-300 group-hover:text-gray-500 transition-colors"
                                                                                style={{
                                                                                    position: "relative",
                                                                                    float: "right",
                                                                                    marginTop: "-20px",
                                                                                }}
                                                                            />
                                                                        )}
                                                                    </motion.div>
                                                                </Link>
                                                            );
                                                        })}

                                                        {/* Review All Box */}
                                                        <Link
                                                            href={`/learn/${levelInfo.level}/review`}
                                                            className="col-span-2 sm:col-span-3"
                                                        >
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: levelInfo.boxes * 0.03 }}
                                                                whileHover={{ scale: 1.03, y: -2 }}
                                                                whileTap={{ scale: 0.97 }}
                                                                className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 hover:border-indigo-400 transition-all shadow-sm hover:shadow-md text-left cursor-pointer group"
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                                                                        <BookOpenCheck size={14} className="text-indigo-600" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-semibold text-indigo-700 text-sm">
                                                                            📝 Review All
                                                                        </p>
                                                                        <p className="text-indigo-500 text-xs">
                                                                            {levelInfo.total} words
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <ChevronRight
                                                                    size={14}
                                                                    className="text-indigo-300 group-hover:text-indigo-500 transition-colors"
                                                                    style={{
                                                                        position: "relative",
                                                                        float: "right",
                                                                        marginTop: "-20px",
                                                                    }}
                                                                />
                                                            </motion.div>
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}

                            {/* User Personal Groups */}
                            {status === "authenticated" ? (
                                groups.length > 0 && (
                                    <div className="space-y-3 mt-6">
                                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                            Your Groups
                                        </p>
                                        <AnimatePresence>
                                            {groups.map((group, index) => (
                                                <Link key={group._id} href={`/learn/group/${group._id}`}>
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.08 }}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="w-full p-5 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-400 text-left transition-all shadow-sm hover:shadow-lg cursor-pointer mb-3"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                                                                    <BookOpen size={20} className="text-purple-600" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="font-semibold text-gray-800">
                                                                        {group.name}
                                                                    </h3>
                                                                    <p className="text-gray-500 text-sm">
                                                                        {group.wordCount} words
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <ChevronRight size={20} className="text-gray-400" />
                                                        </div>
                                                    </motion.div>
                                                </Link>
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                )
                            ) : (
                                <div className="p-6 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 mt-6">
                                    <div className="flex items-center gap-4 text-gray-500">
                                        <Lock size={24} />
                                        <div>
                                            <h3 className="font-semibold text-gray-700">
                                                Login to Unlock
                                            </h3>
                                            <p className="text-sm">
                                                Learn from your personal vocabulary groups
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* Tip */}
                    <motion.div
                        className="mt-10 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="inline-block px-6 py-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                            <p className="text-gray-600 text-sm">
                                💡 <strong>Tip:</strong> Click a box to study the words first, then
                                practice with games!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
