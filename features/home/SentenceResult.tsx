"use client";

import { SentenceTranslation } from "@/types";

interface SentenceResultProps {
    data: SentenceTranslation;
}

export default function SentenceResult({ data }: SentenceResultProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-5 py-4 space-y-4">
                <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Tiếng Anh</h4>
                    <p className="text-gray-900">{data.original}</p>
                </div>

                <div className="text-center text-gray-400">↓</div>

                <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Tiếng Việt</h4>
                    <p className="text-gray-900">{data.translation}</p>
                </div>
            </div>
        </div>
    );
}
