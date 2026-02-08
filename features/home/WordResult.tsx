"use client";

import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { Volume2 } from "lucide-react";
import { WordAnalysis } from "@/types";
import StreakCongratulationsDialog from "../learn/components/StreakCongratulationsDialog";
import SuccessAlert from "@/common/components/SuccessAlert";

interface WordResultProps {
    data: WordAnalysis;
}

interface SaveSuccessInfo {
    groupName: string;
    word: string;
}

const levelColors: Record<string, string> = {
    A1: "bg-green-500",
    A2: "bg-lime-500",
    B1: "bg-yellow-500",
    B2: "bg-orange-500",
    C1: "bg-red-500",
    C2: "bg-red-700",
};

const PENDING_WORD_KEY = "pendingWordToSave";

export default function WordResult({ data }: WordResultProps) {
    const { data: session, status } = useSession();
    const [isSaving, setIsSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [successInfo, setSuccessInfo] = useState<SaveSuccessInfo | null>(null);

    // Streak logic
    const [showStreakDialog, setShowStreakDialog] = useState(false);
    const [newStreakValue, setNewStreakValue] = useState(0);

    // Check for pending word after login
    useEffect(() => {
        if (status === "authenticated") {
            const pendingWord = localStorage.getItem(PENDING_WORD_KEY);
            if (pendingWord) {
                try {
                    const wordData = JSON.parse(pendingWord);
                    // Only auto-save if it matches the current word
                    if (wordData.word === data.word) {
                        localStorage.removeItem(PENDING_WORD_KEY);
                        saveWord(wordData);
                    }
                } catch (e) {
                    localStorage.removeItem(PENDING_WORD_KEY);
                }
            }
        }
    }, [status, data.word]);

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

    const saveWord = async (wordData: typeof data) => {
        setIsSaving(true);
        setSaveStatus("idle");

        try {
            const response = await fetch("/api/vocabulary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    word: wordData.word,
                    meaning: wordData.meaning,
                    partOfSpeech: wordData.partOfSpeech,
                    level: wordData.level,
                    phonetic: wordData.phonetic,
                    example: wordData.example,
                    exampleTranslation: wordData.exampleTranslation,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setSaveStatus("success");

                // Show success alert with group name
                setSuccessInfo({
                    groupName: result.groupName || "Ungrouped",
                    word: wordData.word
                });

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

    const handleSave = async () => {
        if (!session) {
            // Store word data to save after login
            localStorage.setItem(PENDING_WORD_KEY, JSON.stringify(data));
            signIn("google");
            return;
        }

        await saveWord(data);
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg overflow-hidden relative">
            <StreakCongratulationsDialog
                isOpen={showStreakDialog}
                newStreak={newStreakValue}
                onClose={() => setShowStreakDialog(false)}
            />

            {/* Success Alert Component */}
            <SuccessAlert
                isOpen={successInfo !== null}
                title="Word Saved!"
                message={successInfo ? `<strong>"${successInfo.word}"</strong> has been saved to <strong>${successInfo.groupName}</strong>` : ""}
                linkText="View in My Vocabulary"
                linkHref="/profile?tab=vocabulary"
                duration={6}
                onClose={() => setSuccessInfo(null)}
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
                        title="Pronounce word"
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
