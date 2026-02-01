"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface VocabularyData {
    _id: string;
    word: string;
    meaning: string;
    partOfSpeech?: string;
    level?: string;
    example?: string;
    exampleTranslation?: string;
    phonetic?: string;
    groupId?: string;
    createdAt?: string;
}

interface VocaCardProps {
    vocabulary: VocabularyData;
    onEdit: (vocab: VocabularyData) => void;
    onDelete: (vocab: VocabularyData) => void;
}

export default function VocaCard({ vocabulary, onEdit, onDelete }: VocaCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleSpeak = (e: React.MouseEvent) => {
        e.stopPropagation();

        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(vocabulary.word);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            utterance.pitch = 1;

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);

            window.speechSynthesis.speak(utterance);
        }
    };

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        onEdit(vocabulary);
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete(vocabulary);
    };

    const getLevelColor = (level?: string) => {
        switch (level?.toLowerCase()) {
            case 'a1':
                return 'bg-emerald-100 text-emerald-700';
            case 'a2':
                return 'bg-green-100 text-green-700';
            case 'b1':
                return 'bg-blue-100 text-blue-700';
            case 'b2':
                return 'bg-indigo-100 text-indigo-700';
            case 'c1':
                return 'bg-purple-100 text-purple-700';
            case 'c2':
                return 'bg-pink-100 text-pink-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div
            className="perspective-1000 cursor-pointer h-[220px]"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full transition-transform duration-500 preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="h-full p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all">
                        {/* Header with word and actions */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 capitalize mb-1">
                                    {vocabulary.word}
                                </h3>
                                {vocabulary.phonetic && (
                                    <p className="text-sm text-gray-500 font-mono">
                                        {vocabulary.phonetic}
                                    </p>
                                )}
                            </div>

                            {/* Speaker Button */}
                            <button
                                onClick={handleSpeak}
                                className={`p-2 rounded-full transition-all ${isSpeaking
                                    ? 'bg-blue-100 text-blue-600 animate-pulse'
                                    : 'hover:bg-gray-100 text-gray-500 hover:text-blue-600'
                                    }`}
                                title="Pronounce word"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                            </button>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            {vocabulary.level && (
                                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getLevelColor(vocabulary.level)}`}>
                                    {vocabulary.level.toUpperCase()}
                                </span>
                            )}
                            {vocabulary.partOfSpeech && (
                                <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                                    {vocabulary.partOfSpeech}
                                </span>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-2">
                            <button
                                onClick={handleEdit}
                                className="p-2 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"
                                title="Edit"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                            <button
                                onClick={handleDelete}
                                className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                                title="Delete"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Flip Hint */}
                        <div className="absolute bottom-4 left-4 text-xs text-gray-400 flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Click to flip
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="h-full p-5 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all">
                        {/* Meaning */}
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                Meaning
                            </h4>
                            <p className="text-gray-800 leading-relaxed">
                                {vocabulary.meaning}
                            </p>
                        </div>

                        {/* Example */}
                        {vocabulary.example && (
                            <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm">
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Example
                                </h4>
                                <p className="text-gray-700 italic mb-2">
                                    &quot;{vocabulary.example}&quot;
                                </p>
                                {vocabulary.exampleTranslation && (
                                    <p className="text-sm text-gray-500">
                                        {vocabulary.exampleTranslation}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Flip Back Hint */}
                        <div className="absolute bottom-4 left-4 text-xs text-gray-400 flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Click to flip back
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
