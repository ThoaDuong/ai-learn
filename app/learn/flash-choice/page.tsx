"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import GroupSelector from "@/features/learn/components/GroupSelector";
import FlashChoiceGame from "@/features/learn/components/FlashChoiceGame";
import { Vocabulary } from "@/types";

export default function FlashChoicePage() {
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

            if (data.vocabularies.length < 4) {
                setError("Cần ít nhất 4 từ vựng để chơi chế độ này.");
                return;
            }

            setVocabularies(data.vocabularies);
            setGameStarted(true);
        } catch (err) {
            setError("Không thể tải từ vựng. Vui lòng thử lại.");
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-700 font-medium text-sm mb-4">
                            <Zap size={16} />
                            <span>Flash Choice</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Trắc nghiệm nhanh
                        </h1>
                        <p className="text-gray-500">
                            Chọn từ tiếng Anh đúng với nghĩa tiếng Việt
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
                                <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                                <p className="text-gray-500">Đang tải từ vựng...</p>
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
                                    Thử lại
                                </button>
                            </motion.div>
                        ) : gameStarted && vocabularies.length > 0 ? (
                            <FlashChoiceGame
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
