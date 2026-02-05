"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { ChevronLeft, Users, Lock, BookOpen } from "lucide-react";
import Link from "next/link";

interface VocabularyGroup {
    _id: string;
    name: string;
    wordCount: number;
}

interface GroupSelectorProps {
    onSelectGroup: (groupId: string | null) => void;
    minWords?: number;
}

export default function GroupSelector({ onSelectGroup, minWords = 4 }: GroupSelectorProps) {
    const { data: session, status } = useSession();
    const [groups, setGroups] = useState<VocabularyGroup[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMode, setSelectedMode] = useState<"guest" | "user" | null>(null);

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
        } finally {
            setLoading(false);
        }
    }, [status, minWords]);

    useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);

    useEffect(() => {
        if (status === "unauthenticated") {
            setLoading(false);
        }
    }, [status]);

    const handleGuestMode = () => {
        setSelectedMode("guest");
        onSelectGroup(null);
    };

    const handleSelectGroup = (groupId: string) => {
        setSelectedMode("user");
        onSelectGroup(groupId);
    };

    if (selectedMode !== null) {
        return null; // Selection made, component should be hidden
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full mx-auto"
        >
            <Link
                href="/learn"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 transition-colors"
            >
                <ChevronLeft size={20} />
                <span>Back</span>
            </Link>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Learning Source</h2>
            <p className="text-gray-500 mb-6">Learn from the B2 set or your own vocabulary groups</p>

            <div className="space-y-4">
                {/* Guest Mode - B2 Vocabulary */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGuestMode}
                    className="w-full p-6 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white text-left shadow-lg hover:shadow-amber-500/40 transition-shadow"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                            <Users size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">B2 Vocabulary Set</h3>
                            <p className="text-white/80 text-sm">50 essential B2 level words</p>
                        </div>
                    </div>
                </motion.button>

                {/* User Mode - Personal Groups */}
                {status === "authenticated" ? (
                    <div className="space-y-3">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            Your Groups
                        </p>

                        {loading ? (
                            <div className="p-6 rounded-2xl bg-gray-100 text-center">
                                <div className="animate-spin w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full mx-auto" />
                            </div>
                        ) : groups.length > 0 ? (
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
                                        className="w-full p-5 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-400 text-left transition-all shadow-sm hover:shadow-lg"
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
                    <div className="p-6 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300">
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
        </motion.div>
    );
}
