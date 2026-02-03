"use client";

import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { Vocabulary } from "@/types";

interface VocabularyInfoCardProps {
    vocabulary: Vocabulary;
    onContinue: () => void;
}

export default function VocabularyInfoCard({ vocabulary, onContinue }: VocabularyInfoCardProps) {
    const playAudio = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(vocabulary.word);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            speechSynthesis.speak(utterance);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-md w-full"
        >
            {/* Word Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">{vocabulary.word}</h2>
                    <p className="text-gray-500 text-lg">{vocabulary.phonetic}</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={playAudio}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/40 transition-shadow"
                >
                    <Volume2 size={22} />
                </motion.button>
            </div>

            {/* Part of Speech & Level */}
            <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                    {vocabulary.partOfSpeech}
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    {vocabulary.level}
                </span>
            </div>

            {/* Meaning */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Nghĩa
                </h3>
                <p className="text-xl text-gray-700 font-medium">{vocabulary.meaning}</p>
            </div>

            {/* Example */}
            <div className="mb-8 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Ví dụ
                </h3>
                <p className="text-gray-800 font-medium mb-2">{vocabulary.example}</p>
                <p className="text-gray-500 text-sm italic">{vocabulary.exampleTranslation}</p>
            </div>

            {/* Continue Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onContinue}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg shadow-lg hover:shadow-green-500/40 transition-all"
            >
                Tiếp tục →
            </motion.button>
        </motion.div>
    );
}
