"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { ChevronLeft, ChevronDown, ChevronRight, Lock, BookOpen, Package } from "lucide-react";
import Link from "next/link";

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

interface GroupSelectorProps {
    onSelectGroup: (groupId: string | null, levelInfo?: { level: string; box: number }) => void;
    minWords?: number;
}

const levelConfig: Record<string, { gradient: string; shadow: string; bgGlow: string; emoji: string }> = {
    B1: {
        gradient: "from-yellow-400 via-amber-400 to-orange-400",
        shadow: "shadow-amber-400/30",
        bgGlow: "bg-yellow-400/20",
        emoji: "📗"
    },
    B2: {
        gradient: "from-orange-400 via-orange-500 to-red-400",
        shadow: "shadow-orange-500/30",
        bgGlow: "bg-orange-400/20",
        emoji: "📙"
    },
    C1: {
        gradient: "from-red-400 via-rose-500 to-pink-500",
        shadow: "shadow-rose-500/30",
        bgGlow: "bg-red-400/20",
        emoji: "📕"
    }
};

export default function GroupSelector({ onSelectGroup, minWords = 4 }: GroupSelectorProps) {
    const { data: session, status } = useSession();
    const [levels, setLevels] = useState<LevelInfo[]>([]);
    const [groups, setGroups] = useState<VocabularyGroup[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
    const [selectedMode, setSelectedMode] = useState<string | null>(null);

    // Fetch level stats
    useEffect(() => {
        const fetchLevels = async () => {
            try {
                const response = await fetch("/api/learn/vocabulary");
                const data = await response.json();
                if (data.levels) {
                    setLevels(data.levels.filter((l: LevelInfo) => l.total > 0));
                }
            } catch (error) {
                console.error("Error fetching levels:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLevels();
    }, []);

    // Fetch user groups
    const fetchGroups = useCallback(async () => {
        if (status !== "authenticated") return;
        try {
            const response = await fetch(`/api/vocabulary/groups?minWords=${minWords}`);
            const data = await response.json();
            if (data.groups) {
                setGroups(data.groups.filter((g: VocabularyGroup) => g.wordCount >= minWords));
            }
        } catch (error) {
            console.error("Error fetching groups:", error);
        }
    }, [status, minWords]);

    useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);

    const handleToggleLevel = (level: string) => {
        setExpandedLevel(prev => prev === level ? null : level);
    };

    const handleSelectBox = (level: string, box: number) => {
        setSelectedMode("level");
        onSelectGroup(null, { level, box });
    };

    const handleSelectGroup = (groupId: string) => {
        setSelectedMode("user");
        onSelectGroup(groupId);
    };

    if (selectedMode !== null) {
        return null;
    }

    const BOX_SIZE = 50;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg w-full mx-auto"
        >
            <Link
                href="/learn"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 transition-colors"
            >
                <ChevronLeft size={20} />
                <span>Back</span>
            </Link>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Vocabulary Set</h2>
            <p className="text-gray-500 mb-6">Choose a level and box to start learning</p>

            {loading ? (
                <div className="p-8 rounded-2xl bg-gray-100 text-center">
                    <div className="animate-spin w-8 h-8 border-3 border-purple-500 border-t-transparent rounded-full mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">Loading vocabulary sets...</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {/* Level Cards */}
                    {levels.map((levelInfo) => {
                        const config = levelConfig[levelInfo.level] || levelConfig.B1;
                        const isExpanded = expandedLevel === levelInfo.level;

                        return (
                            <motion.div key={levelInfo.level} layout>
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
                                                <h3 className="font-bold text-lg">{levelInfo.level} Vocabulary</h3>
                                                <p className="text-white/80 text-sm">
                                                    {levelInfo.total} words · {levelInfo.boxes} {levelInfo.boxes === 1 ? "box" : "boxes"}
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
                                                    const wordsInBox = boxNum === levelInfo.boxes
                                                        ? levelInfo.total - (levelInfo.boxes - 1) * BOX_SIZE
                                                        : BOX_SIZE;

                                                    return (
                                                        <motion.button
                                                            key={boxNum}
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: i * 0.03 }}
                                                            whileHover={{ scale: 1.03, y: -2 }}
                                                            whileTap={{ scale: 0.97 }}
                                                            onClick={() => handleSelectBox(levelInfo.level, boxNum)}
                                                            className="p-3 rounded-xl bg-white border-2 border-gray-200 hover:border-gray-400 transition-all shadow-sm hover:shadow-md text-left cursor-pointer group"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <div className={`w-8 h-8 rounded-lg ${config.bgGlow} flex items-center justify-center`}>
                                                                    <Package size={14} className="text-gray-600" />
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-gray-800 text-sm">Box {boxNum}</p>
                                                                    <p className="text-gray-500 text-xs">{wordsInBox} words</p>
                                                                </div>
                                                            </div>
                                                            <ChevronRight
                                                                size={14}
                                                                className="text-gray-300 group-hover:text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                                                                style={{ position: "relative", float: "right", marginTop: "-20px" }}
                                                            />
                                                        </motion.button>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}

                    {/* User Mode - Personal Groups */}
                    {status === "authenticated" ? (
                        <div className="space-y-3 mt-6">
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                Your Groups
                            </p>

                            {groups.length > 0 ? (
                                <AnimatePresence>
                                    {groups.map((group, index) => (
                                        <motion.button
                                            key={group._id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleSelectGroup(group._id)}
                                            className="w-full p-5 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-400 text-left transition-all shadow-sm hover:shadow-lg cursor-pointer"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                                                        <BookOpen size={20} className="text-purple-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-800">{group.name}</h3>
                                                        <p className="text-gray-500 text-sm">{group.wordCount} words</p>
                                                    </div>
                                                </div>
                                                <ChevronLeft size={20} className="text-gray-400 rotate-180" />
                                            </div>
                                        </motion.button>
                                    ))}
                                </AnimatePresence>
                            ) : (
                                <div className="p-6 rounded-2xl bg-gray-100 text-center text-gray-500">
                                    <p className="mb-2">No groups with at least {minWords} words yet</p>
                                    <p className="text-sm">Add words to your groups to see them here!</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="p-6 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 mt-6">
                            <div className="flex items-center gap-4 text-gray-500">
                                <Lock size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-700">Login to Unlock</h3>
                                    <p className="text-sm">Learn from your personal vocabulary groups</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </motion.div>
    );
}
