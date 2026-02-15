"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import GroupSelector from "@/features/learn/components/GroupSelector";
import MasterWritingGame from "@/features/learn/components/MasterWritingGame";
import { Vocabulary } from "@/types";

const LEVEL_ORDER = ["B1", "B2", "C1"];

interface LevelStat {
    level: string;
    total: number;
    boxes: number;
}

export default function MasterWritingPage() {
    const [vocabularies, setVocabularies] = useState<Vocabulary[]>([]);
    const [loading, setLoading] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentLevelInfo, setCurrentLevelInfo] = useState<{ level: string; box: number } | null>(null);
    const [levelStats, setLevelStats] = useState<LevelStat[]>([]);

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

    const loadVocabulary = useCallback(async (level: string, box: number | string) => {
        setLoading(true);
        setError(null);
        try {
            const url = `/api/learn/vocabulary?level=${level}&box=${box}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.error) { setError(data.error); return; }
            if (data.vocabularies.length < 1) { setError("No vocabulary available to learn yet."); return; }

            setVocabularies(data.vocabularies);
            setGameStarted(true);
        } catch {
            setError("Unable to load vocabulary. Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    const handleSelectGroup = useCallback(async (groupId: string | null, levelInfo?: { level: string; box: number }) => {
        if (levelInfo) {
            setCurrentLevelInfo(levelInfo);
            const boxParam = levelInfo.box === 0 ? "review" : levelInfo.box;
            await loadVocabulary(levelInfo.level, boxParam);
        } else if (groupId) {
            setCurrentLevelInfo(null);
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/learn/vocabulary?groupId=${groupId}`);
                const data = await response.json();
                if (data.error) { setError(data.error); return; }
                if (data.vocabularies.length < 1) { setError("No vocabulary available to learn yet."); return; }
                setVocabularies(data.vocabularies);
                setGameStarted(true);
            } catch {
                setError("Unable to load vocabulary. Please try again.");
            } finally {
                setLoading(false);
            }
        } else {
            setError("Please select a vocabulary set.");
        }
    }, [loadVocabulary]);

    const handleComplete = () => {
        setGameStarted(false);
        setVocabularies([]);
        setCurrentLevelInfo(null);
    };

    const handleNext = useCallback(() => {
        if (!currentLevelInfo) return;
        const { level, box } = currentLevelInfo;
        if (box === 0) return;

        const currentStat = levelStats.find(l => l.level === level);
        if (!currentStat) return;

        let nextLevel = level;
        let nextBox = box + 1;

        if (nextBox > currentStat.boxes) {
            const currentLevelIndex = LEVEL_ORDER.indexOf(level);
            if (currentLevelIndex < LEVEL_ORDER.length - 1) {
                nextLevel = LEVEL_ORDER[currentLevelIndex + 1];
                nextBox = 1;
            } else {
                return;
            }
        }

        setCurrentLevelInfo({ level: nextLevel, box: nextBox });
        setGameStarted(false);
        setVocabularies([]);
        loadVocabulary(nextLevel, nextBox);
    }, [currentLevelInfo, levelStats, loadVocabulary]);

    const currentTotalBoxes = currentLevelInfo
        ? (levelStats.find(l => l.level === currentLevelInfo.level)?.boxes ?? 0)
        : 0;

    const hasNext = (() => {
        if (!currentLevelInfo || currentLevelInfo.box === 0) return false;
        const currentStat = levelStats.find(l => l.level === currentLevelInfo.level);
        if (!currentStat) return false;
        if (currentLevelInfo.box < currentStat.boxes) return true;
        const idx = LEVEL_ORDER.indexOf(currentLevelInfo.level);
        return idx < LEVEL_ORDER.length - 1;
    })();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 font-medium text-sm mb-4">
                            <PenLine size={16} />
                            <span>Master Writing</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Word Writing Practice
                        </h1>
                        <p className="text-gray-500">
                            See the Vietnamese meaning, write the English word. Max 3 attempts!
                        </p>
                    </motion.div>

                    <div className="flex justify-center">
                        {loading ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                                <p className="text-gray-500">Loading vocabulary...</p>
                            </motion.div>
                        ) : error ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12"
                            >
                                <p className="text-red-500 mb-4">{error}</p>
                                <button
                                    onClick={() => {
                                        setError(null);
                                        setGameStarted(false);
                                    }}
                                    className="px-6 py-2 rounded-xl bg-gray-200 text-gray-700 font-medium"
                                >
                                    Try Again
                                </button>
                            </motion.div>
                        ) : gameStarted && vocabularies.length > 0 ? (
                            <MasterWritingGame
                                vocabularies={vocabularies}
                                onComplete={handleComplete}
                                levelInfo={currentLevelInfo ? { ...currentLevelInfo, totalBoxes: currentTotalBoxes } : undefined}
                                onNext={hasNext ? handleNext : undefined}
                            />
                        ) : (
                            <GroupSelector onSelectGroup={handleSelectGroup} gameMode="master-writing" />
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
