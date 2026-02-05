"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { Volume2 } from "lucide-react";
import { WordAnalysis } from "@/types";
import StreakCongratulationsDialog from "../learn/components/StreakCongratulationsDialog";

interface WordResultProps {
    data: WordAnalysis;
}

const levelColors: Record<string, string> = {
    A1: "bg-green-500",
    A2: "bg-lime-500",
    B1: "bg-yellow-500",
    B2: "bg-orange-500",
    C1: "bg-red-500",
    C2: "bg-red-700",
};

export default function WordResult({ data }: WordResultProps) {
    const { data: session } = useSession();
    const [isSaving, setIsSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Streak logic
    const [showStreakDialog, setShowStreakDialog] = useState(false);
    const [newStreakValue, setNewStreakValue] = useState(0);

    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(data.word);
            utterance.lang = 'en-US'; // American English
            utterance.rate = 0.9; // Slightly slower for clarity

            // Try to find an American English voice
            const voices = window.speechSynthesis.getVoices();
            const americanVoice = voices.find(voice =>
                voice.lang === 'en-US' && voice.name.includes('Female')
            ) || voices.find(voice => voice.lang === 'en-US') || voices[0];

            if (americanVoice) {
                utterance.voice = americanVoice;
            }

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);

            window.speechSynthesis.speak(utterance);
        }
    };

    const handleSave = async () => {
        if (!session) {
            signIn("google");
            return;
        }

        setIsSaving(true);
        setSaveStatus("idle");

        try {
            const response = await fetch("/api/vocabulary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    word: data.word,
                    meaning: data.meaning,
                    partOfSpeech: data.partOfSpeech,
                    level: data.level,
                    phonetic: data.phonetic,
                    example: data.example,
                    exampleTranslation: data.exampleTranslation,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setSaveStatus("success");

                // Check streak
                try {
                    const streakRes = await fetch("/api/streak/activity", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ activityType: "word_save" }),
                    });
                    const streakData = await streakRes.json();
                    if (streakData.streakAwarded) {
                        setNewStreakValue(streakData.newStreak);
                        setShowStreakDialog(true);
                    }
                } catch (e) {
                    console.error("Failed to check streak:", e);
                }
            } else {
                setSaveStatus("error");
                setErrorMsg(result.error || "Save failed");
            }
        } catch {
            setSaveStatus("error");
            setErrorMsg("An error occurred");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg overflow-hidden">
            <StreakCongratulationsDialog
                isOpen={showStreakDialog}
                newStreak={newStreakValue}
                onClose={() => setShowStreakDialog(false)}
            />

            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-bold text-gray-900">{data.word}</h3>
                        {data.phonetic && (
                            <span className="text-sm text-gray-500 font-mono">{data.phonetic}</span>
                        )}
                    </div>
                    <button
                        onClick={handleSpeak}
                        className={`p-2 rounded-full transition-all cursor-pointer ${isSpeaking
                            ? 'bg-blue-100 text-blue-600'
                            : 'hover:bg-gray-100 text-gray-500 hover:text-blue-600'
                            }`}
                        title="Phát âm từ"
                    >
                        <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    </button>
                    <span className="text-sm text-blue-600 italic">{data.partOfSpeech}</span>
                </div>
                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${levelColors[data.level] || "bg-gray-400"}`}>
                    {data.level}
                </span>
            </div>

            {/* Content */}
            <div className="px-5 py-4 space-y-4">
                <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Meaning</h4>
                    <p className="text-lg text-gray-900">{data.meaning}</p>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Example</h4>
                    <p className="text-gray-900 italic">{data.example}</p>
                    <p className="text-sm text-gray-600 mt-1">{data.exampleTranslation}</p>
                </div>
            </div>

            {/* Actions */}
            <div className="px-5 py-3 bg-gray-50/50 border-t border-gray-100/50 flex items-center gap-3">
                <button
                    onClick={handleSave}
                    disabled={isSaving || saveStatus === "success"}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed shadow-md ${saveStatus === "success"
                        ? "bg-green-600 text-white"
                        : "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300"
                        }`}
                >
                    {isSaving ? "Saving..." : saveStatus === "success" ? "✓ Saved" : "Save Word"}
                </button>
                {saveStatus === "error" && (
                    <span className="text-sm text-red-600">{errorMsg}</span>
                )}
            </div>
        </div>
    );
}
