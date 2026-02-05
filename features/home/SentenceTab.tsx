"use client";

import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Sparkles, Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GrammarCheckResult } from "@/types";

export default function SentenceTab() {
    const [input, setInput] = useState("");
    const [translation, setTranslation] = useState("");
    const [isTranslating, setIsTranslating] = useState(false);
    const [grammarResult, setGrammarResult] = useState<GrammarCheckResult | null>(null);
    const [isCheckingGrammar, setIsCheckingGrammar] = useState(false);

    const translateText = useDebouncedCallback(async (text: string) => {
        if (!text.trim()) {
            setTranslation("");
            return;
        }

        setIsTranslating(true);
        try {
            const response = await fetch("/api/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });
            const data = await response.json();
            if (data.type === "sentence") {
                setTranslation(data.translation);
            } else if (data.type === "word") {
                setTranslation(data.meaning); // Fallback if single word entered
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsTranslating(false);
        }
    }, 1200);

    useEffect(() => {
        translateText(input);
        // Reset grammar result when input changes significantly
        if (grammarResult && Math.abs(input.length - (grammarResult.correction?.length || 0)) > 10) {
            setGrammarResult(null);
        }
    }, [input, translateText]);

    const checkGrammar = async () => {
        if (!input.trim()) return;
        setIsCheckingGrammar(true);
        try {
            const response = await fetch("/api/grammar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: input }),
            });
            const data = await response.json();
            setGrammarResult(data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsCheckingGrammar(false);
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 h-[300px]">
                {/* Left Block - Input */}
                <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-white/50 shadow-lg overflow-hidden focus-within:border-blue-500/50 transition-colors">
                    <div className="px-4 py-3 bg-gray-50/50 border-b border-gray-100/50 flex justify-between items-center">
                        <span className="font-semibold text-gray-700 text-sm tracking-wide">ENGLISH</span>
                        <button
                            onClick={checkGrammar}
                            disabled={isCheckingGrammar || !input.trim()}
                            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 disabled:opacity-50 font-medium px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer disabled:cursor-not-allowed"
                        >
                            {isCheckingGrammar ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                            Check Grammar
                        </button>
                    </div>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your sentence..."
                        className="flex-1 w-full p-4 resize-none outline-none text-lg text-gray-800 placeholder:text-gray-400"
                    />
                </div>

                {/* Right Block - Output */}
                <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-white/50 shadow-lg overflow-hidden bg-gradient-to-br from-gray-50/50 to-white/50">
                    <div className="px-4 py-3 bg-blue-50/30 border-b border-gray-100/50">
                        <span className="font-semibold text-blue-700 text-sm tracking-wide">VIETNAMESE</span>
                    </div>
                    <div className="flex-1 p-4 relative">
                        {isTranslating ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                                <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
                            </div>
                        ) : null}
                        <p className="text-lg text-gray-800 leading-relaxed">
                            {translation || <span className="text-gray-400 italic">Translation will appear here...</span>}
                        </p>
                    </div>
                </div>
            </div>

            {/* Grammar Result Section */}
            <AnimatePresence>
                {grammarResult && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-xl overflow-hidden"
                    >
                        <div className={`px-6 py-4 border-b flex items-center gap-3 ${grammarResult.isCorrect ? 'bg-green-50 border-green-100' : 'bg-orange-50 border-orange-100'}`}>
                            {grammarResult.isCorrect ? (
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                            ) : (
                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">!</div>
                            )}
                            <h3 className={`font-bold text-lg ${grammarResult.isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
                                {grammarResult.isCorrect ? "Perfect! Your grammar is spot on." : "Grammar Suggestions"}
                            </h3>
                        </div>

                        <div className="p-6 grid gap-6 md:grid-cols-2">
                            <div className="space-y-4">
                                {!grammarResult.isCorrect && (
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Corrected</label>
                                        <p className="text-lg font-medium text-gray-900 bg-green-50/50 p-3 rounded-lg border border-green-100">
                                            {grammarResult.correction}
                                        </p>
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Explanation</label>
                                    <p className="text-gray-600 leading-relaxed">{grammarResult.explanation}</p>
                                </div>
                            </div>

                            <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-3">Variations</label>

                                <div className="space-y-3">
                                    <div className="group p-3 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-md mb-2">
                                            Formal
                                        </span>
                                        <p className="text-gray-800">{grammarResult.variations.formal}</p>
                                    </div>
                                    <div className="group p-3 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded-md mb-2">
                                            Friendly
                                        </span>
                                        <p className="text-gray-800">{grammarResult.variations.friendly}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
