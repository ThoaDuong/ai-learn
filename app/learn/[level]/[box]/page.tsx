"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Package, BookOpenCheck } from "lucide-react";
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

const LEVEL_ORDER = ["B1", "B2", "C1"];

interface LevelStat {
    level: string;
    total: number;
    boxes: number;
}

const levelConfig: Record<string, { gradient: string; emoji: string }> = {
    B1: { gradient: "from-yellow-400 via-amber-400 to-orange-400", emoji: "📗" },
    B2: { gradient: "from-orange-400 via-orange-500 to-red-400", emoji: "📙" },
    C1: { gradient: "from-red-400 via-rose-500 to-pink-500", emoji: "📕" },
};

export default function BoxDetailPage() {
    const params = useParams();
    const level = (params.level as string)?.toUpperCase();
    const boxParam = params.box as string;
    const isReview = boxParam === "review";
    const boxNum = isReview ? 0 : parseInt(boxParam);

    const [vocabularies, setVocabularies] = useState<Vocabulary[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeGame, setActiveGame] = useState<"flash-choice" | "speed-run" | "master-writing" | null>(null);
    const [levelStats, setLevelStats] = useState<LevelStat[]>([]);

    const config = levelConfig[level] || levelConfig.B1;

    // Fetch level stats (for next-box navigation)
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("/api/learn/vocabulary");
                const data = await res.json();
                if (data.levels) setLevelStats(data.levels);
            } catch { }
        };
        fetchStats();
    }, []);

    // Fetch vocabulary for this box
    useEffect(() => {
        const fetchVocabulary = async () => {
            setLoading(true);
            setError(null);
            try {
                const boxQuery = isReview ? "review" : boxNum;
                const response = await fetch(`/api/learn/vocabulary?level=${level}&box=${boxQuery}`);
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
        if (level && boxParam) {
            fetchVocabulary();
        }
    }, [level, boxParam, boxNum, isReview]);

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

    // Next box navigation
    const handleNext = useCallback(() => {
        if (isReview) return;
        const currentStat = levelStats.find((l) => l.level === level);
        if (!currentStat) return;

        let nextLevel = level;
        let nextBox = boxNum + 1;

        if (nextBox > currentStat.boxes) {
            const idx = LEVEL_ORDER.indexOf(level);
            if (idx < LEVEL_ORDER.length - 1) {
                nextLevel = LEVEL_ORDER[idx + 1];
                nextBox = 1;
            } else {
                return;
            }
        }

        window.location.href = `/learn/${nextLevel}/${nextBox}`;
    }, [level, boxNum, isReview, levelStats]);

    const currentTotalBoxes = levelStats.find((l) => l.level === level)?.boxes ?? 0;

    const hasNext = (() => {
        if (isReview) return false;
        const currentStat = levelStats.find((l) => l.level === level);
        if (!currentStat) return false;
        if (boxNum < currentStat.boxes) return true;
        const idx = LEVEL_ORDER.indexOf(level);
        return idx < LEVEL_ORDER.length - 1;
    })();

    // Determine which game modes are disabled (not enough words)
    const disabledModes: string[] = [];
    if (vocabularies.length < 4) {
        disabledModes.push("flash-choice", "speed-run");
    }

    // Build levelInfo for game components
    const levelInfo = isReview
        ? undefined
        : { level, box: boxNum, totalBoxes: currentTotalBoxes };

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
                        <div
                            className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r ${config.gradient} text-white shadow-lg mb-4`}
                        >
                            <span className="text-2xl">{config.emoji}</span>
                            <div>
                                <h1 className="text-xl font-bold">
                                    {level} Vocabulary{" "}
                                    {isReview ? (
                                        <span className="font-normal text-white/80">— Review All</span>
                                    ) : (
                                        <span className="font-normal text-white/80">— Box {boxNum}</span>
                                    )}
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
                                    levelInfo={levelInfo}
                                    onNext={hasNext ? handleNext : undefined}
                                />
                            )}
                            {activeGame === "speed-run" && (
                                <SpeedRunGame
                                    vocabularies={vocabularies}
                                    onComplete={handleGameComplete}
                                    levelInfo={levelInfo}
                                    onNext={hasNext ? handleNext : undefined}
                                />
                            )}
                            {activeGame === "master-writing" && (
                                <MasterWritingGame
                                    vocabularies={vocabularies}
                                    onComplete={handleGameComplete}
                                    levelInfo={levelInfo}
                                    onNext={hasNext ? handleNext : undefined}
                                />
                            )}
                        </motion.div>
                    )}

                    {/* Content: Learn + Games (shown when no game is active) */}
                    {!loading && !activeGame && vocabularies.length > 0 && (
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Learn This Vocabulary */}
                            <VocabularyDetail vocabularies={vocabularies} />

                            {/* Divider */}
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

                            {/* Game Modes */}
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
                                No vocabulary found for this set.
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
