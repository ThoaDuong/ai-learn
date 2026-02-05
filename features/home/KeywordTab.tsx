"use client";

import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TranslationResult, WordAnalysis, InvalidWord } from "@/types";
import WordResult from "./WordResult";
import InvalidWordResult from "./InvalidWordResult";

export default function KeywordTab() {
    const [keyword, setKeyword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<TranslationResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (term: string) => {
        if (!term.trim()) return;

        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch("/api/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: term }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setResult(data);
        } catch (err) {
            setError((err as Error).message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !isLoading) {
            handleSearch(keyword);
        }
    };

    const onSuggestionClick = (suggestion: string) => {
        setKeyword(suggestion);
        handleSearch(suggestion);
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8">
            <div className="relative">
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a word to look up..."
                    className="w-full px-6 py-4 text-lg bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm hover:border-blue-200"
                    disabled={isLoading}
                />
                <button
                    onClick={() => handleSearch(keyword)}
                    disabled={isLoading || !keyword.trim()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors cursor-pointer disabled:cursor-not-allowed shadow-lg"
                >
                    {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <Search className="w-5 h-5" />
                    )}
                </button>
            </div>

            <AnimatePresence mode="wait">
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100"
                    >
                        {error}
                    </motion.div>
                )}

                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        key={result.type === "word" ? result.word : "result"}
                    >
                        {result.type === "word" ? (
                            <WordResult data={result as WordAnalysis} />
                        ) : result.type === "invalid_word" ? (
                            // Enhanced InvalidWordResult with clickable suggestions
                            <div className="bg-white/80 backdrop-blur-sm border border-red-100/50 rounded-2xl shadow-lg overflow-hidden">
                                <div className="px-6 py-5 bg-red-50/50 border-b border-red-100">
                                    <h3 className="text-xl font-bold text-red-600 mb-1">{(result as InvalidWord).word}</h3>
                                    <p className="text-red-500 font-medium">This word seems unfamiliar, we couldn&apos;t find it</p>
                                </div>
                                <div className="p-6">
                                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Did you mean?</div>
                                    <div className="flex flex-wrap gap-3">
                                        {(result as InvalidWord).suggestions.map((s, i) => (
                                            <button
                                                key={i}
                                                onClick={() => onSuggestionClick(s)}
                                                className="px-4 py-2 bg-white/80 border border-gray-200/50 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 rounded-full text-gray-700 transition-all font-medium cursor-pointer shadow-sm"
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="p-4 bg-yellow-50 text-yellow-800 rounded-xl">
                                This tab is for looking up words. Use the Sentence tab to translate full sentences.
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
