"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, BookOpen } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import VocabularyDetail from "@/features/learn/components/VocabularyDetail";
import GameModePicker from "@/features/learn/components/GameModePicker";
import FlashChoiceGame from "@/features/learn/components/FlashChoiceGame";
import SpeedRunGame from "@/features/learn/components/SpeedRunGame";
import MasterWritingGame from "@/features/learn/components/MasterWritingGame";
import { Vocabulary } from "@/types";

export default function GroupDetailPage() {
    const params = useParams();
    const groupId = params.groupId as string;

    const [vocabularies, setVocabularies] = useState<Vocabulary[]>([]);
    const [groupName, setGroupName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeGame, setActiveGame] = useState<"flash-choice" | "speed-run" | "master-writing" | null>(null);

    // Fetch vocabulary for this group
    useEffect(() => {
        const fetchVocabulary = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/learn/vocabulary?groupId=${groupId}`);
                const data = await response.json();
                if (data.error) {
                    setError(data.error);
                } else {
                    setVocabularies(data.vocabularies || []);
                }
            } catch {
                setError("Unable to load vocabulary. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        // Fetch group name
        const fetchGroupName = async () => {
            try {
                const response = await fetch("/api/vocabulary/groups?minWords=0");
                const data = await response.json();
                if (data.groups) {
                    const group = data.groups.find((g: { _id: string; name: string }) => g._id === groupId);
                    if (group) setGroupName(group.name);
                }
            } catch { }
        };

        if (groupId) {
            fetchVocabulary();
            fetchGroupName();
        }
    }, [groupId]);

    const handleSelectGame = (mode: "flash-choice" | "speed-run" | "master-writing") => {
        if (mode === "flash-choice" && vocabularies.length < 4) {
            setError("You need at least 4 words to play Flash Choice.");
            return;
        }
        if (mode === "speed-run" && vocabularies.length < 4) {
            setError("You need at least 4 words to play Speed Run.");
            return;
        }
        setError(null);
        setActiveGame(mode);
    };

    const handleGameComplete = () => {
        setActiveGame(null);
    };

    const disabledModes: string[] = [];
    if (vocabularies.length < 4) {
        disabledModes.push("flash-choice", "speed-run");
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 py-8 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 transition-colors"
                    >
                        <ChevronLeft size={20} />
                        <span>Back to Vocabulary Sets</span>
                    </Link>

                    {/* Page Header */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-white shadow-lg mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <BookOpen size={20} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">
                                    {groupName || "My Group"}
                                </h1>
                                {!loading && (
                                    <p className="text-white/80 text-sm">{vocabularies.length} words</p>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Loading */}
                    {loading && (
                        <div className="p-12 text-center">
                            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-gray-500">Loading vocabulary...</p>
                        </div>
                    )}

                    {/* Error */}
                    {error && !activeGame && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="p-6 rounded-2xl bg-red-50 border border-red-200 text-center mb-6"
                        >
                            <p className="text-red-600 mb-3">{error}</p>
                            <button
                                onClick={() => setError(null)}
                                className="px-5 py-2 rounded-xl bg-gray-200 text-gray-700 font-medium cursor-pointer hover:bg-gray-300 transition-colors"
                            >
                                Dismiss
                            </button>
                        </motion.div>
                    )}

                    {/* Active Game */}
                    {activeGame && vocabularies.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <button
                                onClick={() => setActiveGame(null)}
                                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4 transition-colors cursor-pointer"
                            >
                                <ChevronLeft size={18} />
                                <span className="text-sm">Back to Vocabulary</span>
                            </button>

                            {activeGame === "flash-choice" && (
                                <FlashChoiceGame
                                    vocabularies={vocabularies}
                                    onComplete={handleGameComplete}
                                />
                            )}
                            {activeGame === "speed-run" && (
                                <SpeedRunGame
                                    vocabularies={vocabularies}
                                    onComplete={handleGameComplete}
                                />
                            )}
                            {activeGame === "master-writing" && (
                                <MasterWritingGame
                                    vocabularies={vocabularies}
                                    onComplete={handleGameComplete}
                                />
                            )}
                        </motion.div>
                    )}

                    {/* Content: Learn + Games */}
                    {!loading && !activeGame && vocabularies.length > 0 && (
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <VocabularyDetail vocabularies={vocabularies} />

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-gray-50 px-4 text-sm text-gray-500 font-medium">
                                        Ready to practice?
                                    </span>
                                </div>
                            </div>

                            <GameModePicker
                                onSelectGame={handleSelectGame}
                                disabledModes={disabledModes}
                            />
                        </motion.div>
                    )}

                    {/* Empty State */}
                    {!loading && !error && vocabularies.length === 0 && (
                        <div className="p-12 text-center">
                            <p className="text-gray-500 text-lg">
                                No vocabulary found in this group.
                            </p>
                            <Link
                                href="/learn"
                                className="inline-block mt-4 px-6 py-2 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                            >
                                Back to Vocabulary Sets
                            </Link>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
