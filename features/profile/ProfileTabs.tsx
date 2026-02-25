"use client";

import { useRouter } from "next/navigation";

interface ProfileTabsProps {
    activeTab: "analytics" | "vocabulary";
    onSetActiveTab: (tab: "analytics" | "vocabulary") => void;
}

export default function ProfileTabs({ activeTab, onSetActiveTab }: ProfileTabsProps) {
    const router = useRouter();

    return (
        <div className="flex justify-start mb-4">
            <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-sm border border-white/50 inline-flex">
                <button
                    onClick={() => {
                        onSetActiveTab("analytics");
                        router.push("/profile?tab=profile");
                    }}
                    className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "analytics"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                >
                    Analytics
                </button>
                <button
                    onClick={() => {
                        onSetActiveTab("vocabulary");
                        router.push("/profile?tab=vocabulary");
                    }}
                    className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "vocabulary"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                >
                    Voca List
                </button>
            </div>
        </div>
    );
}
