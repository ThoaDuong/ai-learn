"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import KeywordTab from "@/features/home/KeywordTab";
import SentenceTab from "@/features/home/SentenceTab";

export default function Home() {
    const [activeTab, setActiveTab] = useState<"keyword" | "sentence">("keyword");

    return (
        <div className="min-h-screen flex flex-col">
            {/* Decorative background elements */}
            <div className="page-background"></div>

            <Header />

            {/* Main Content */}
            <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                        TLearn – Keep learning, stay chill
                    </h2>
                    <p className="text-lg text-gray-600">
                        Better words, better vibes. Don't make it complicated.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/50 shadow-lg flex items-center gap-1">
                        <button
                            onClick={() => setActiveTab("keyword")}
                            className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === "keyword"
                                ? "text-blue-600 bg-blue-50/80"
                                : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                                }`}
                        >
                            {activeTab === "keyword" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-50 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Keyword Lookup</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("sentence")}
                            className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === "sentence"
                                ? "text-blue-600 bg-blue-50/80"
                                : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                                }`}
                        >
                            {activeTab === "sentence" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-50 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Sentence Editor</span>
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === "keyword" ? <KeywordTab /> : <SentenceTab />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}

