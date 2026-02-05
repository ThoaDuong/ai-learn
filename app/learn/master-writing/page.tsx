"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import GroupSelector from "@/features/learn/components/GroupSelector";
import MasterWritingGame from "@/features/learn/components/MasterWritingGame";
import { Vocabulary } from "@/types";

export default function MasterWritingPage() {
    const [vocabularies, setVocabularies] = useState<Vocabulary[]>([]);
    const [loading, setLoading] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSelectGroup = useCallback(async (groupId: string | null) => {
        setLoading(true);
        setError(null);

        try {
            const url = groupId
                ? `/api/learn/vocabulary?groupId=${groupId}`
                : '/api/learn/vocabulary';

            const response = await fetch(url);
            const data = await response.json();

            if (data.error) {
                setError(data.error);
                return;
            }

            if (data.vocabularies.length < 1) {
                setError("No vocabulary available to learn yet.");
                return;
            }

            setVocabularies(data.vocabularies);
            setGameStarted(true);
        } catch (err) {
            setError("Unable to load vocabulary. Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    const handleComplete = () => {
        setGameStarted(false);
        setVocabularies([]);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
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

                    {/* Game Area */}
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
                            />
                        ) : (
                            <GroupSelector onSelectGroup={handleSelectGroup} />
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
