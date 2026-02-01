"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VocabularyGroup {
    _id: string;
    name: string;
    isDefault?: boolean;
}

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
}

interface EditVocaModalProps {
    isOpen: boolean;
    vocabulary: VocabularyData | null;
    groups: VocabularyGroup[];
    onClose: () => void;
    onSave: (updatedVocab: Partial<VocabularyData>) => Promise<void>;
}

export default function EditVocaModal({ isOpen, vocabulary, groups, onClose, onSave }: EditVocaModalProps) {
    const [formData, setFormData] = useState({
        word: "",
        phonetic: "",
        partOfSpeech: "",
        level: "",
        meaning: "",
        example: "",
        exampleTranslation: "",
        groupId: "",
    });
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (vocabulary) {
            setFormData({
                word: vocabulary.word || "",
                phonetic: vocabulary.phonetic || "",
                partOfSpeech: vocabulary.partOfSpeech || "",
                level: vocabulary.level || "",
                meaning: vocabulary.meaning || "",
                example: vocabulary.example || "",
                exampleTranslation: vocabulary.exampleTranslation || "",
                groupId: vocabulary.groupId || "",
            });
        }
    }, [vocabulary]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!formData.word.trim() || !formData.meaning.trim()) {
            setError("Word and meaning are required");
            return;
        }

        setIsSaving(true);
        try {
            await onSave(formData);
            onClose();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to save");
        } finally {
            setIsSaving(false);
        }
    };

    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const partsOfSpeech = ["noun", "verb", "adjective", "adverb", "preposition", "conjunction", "interjection", "pronoun"];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                            <h3 className="text-lg font-semibold text-gray-900">Edit Vocabulary</h3>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                            <div className="space-y-4">
                                {/* Word and Phonetic */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Word <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.word}
                                            onChange={(e) => setFormData({ ...formData, word: e.target.value })}
                                            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phonetic
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.phonetic}
                                            onChange={(e) => setFormData({ ...formData, phonetic: e.target.value })}
                                            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                            placeholder="/ˈeksəmpl/"
                                        />
                                    </div>
                                </div>

                                {/* Part of Speech and Level */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Part of Speech
                                        </label>
                                        <select
                                            value={formData.partOfSpeech}
                                            onChange={(e) => setFormData({ ...formData, partOfSpeech: e.target.value })}
                                            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                        >
                                            <option value="">Select...</option>
                                            {partsOfSpeech.map((pos) => (
                                                <option key={pos} value={pos}>
                                                    {pos.charAt(0).toUpperCase() + pos.slice(1)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Level
                                        </label>
                                        <select
                                            value={formData.level}
                                            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                        >
                                            <option value="">Select...</option>
                                            {levels.map((level) => (
                                                <option key={level} value={level}>
                                                    {level}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Group */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Group
                                    </label>
                                    <select
                                        value={formData.groupId}
                                        onChange={(e) => setFormData({ ...formData, groupId: e.target.value })}
                                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                    >
                                        <option value="">Select group...</option>
                                        {groups.map((group) => (
                                            <option key={group._id} value={group._id}>
                                                {group.name} {group.isDefault && "(default)"}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Meaning */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Meaning <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={formData.meaning}
                                        onChange={(e) => setFormData({ ...formData, meaning: e.target.value })}
                                        rows={2}
                                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none"
                                    />
                                </div>

                                {/* Example */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Example Sentence
                                    </label>
                                    <textarea
                                        value={formData.example}
                                        onChange={(e) => setFormData({ ...formData, example: e.target.value })}
                                        rows={2}
                                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none"
                                        placeholder="Enter an example sentence..."
                                    />
                                </div>

                                {/* Example Translation */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Example Translation
                                    </label>
                                    <textarea
                                        value={formData.exampleTranslation}
                                        onChange={(e) => setFormData({ ...formData, exampleTranslation: e.target.value })}
                                        rows={2}
                                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none"
                                        placeholder="Vietnamese translation..."
                                    />
                                </div>

                                {error && (
                                    <p className="text-sm text-red-600">{error}</p>
                                )}
                            </div>
                        </form>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={isSaving}
                                className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isSaving}
                                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50"
                            >
                                {isSaving ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
