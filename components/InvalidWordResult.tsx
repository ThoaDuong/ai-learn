"use client";

import { InvalidWord } from "@/types";

interface InvalidWordResultProps {
    data: InvalidWord;
}

export default function InvalidWordResult({ data }: InvalidWordResultProps) {
    return (
        <div className="bg-white border border-red-200 rounded-lg overflow-hidden">
            <div className="px-5 py-4 bg-red-50 border-b border-red-100">
                <h3 className="text-xl font-bold text-red-700">{data.word}</h3>
                <p className="text-sm text-red-600 mt-1">Từ này có vẻ không hợp lệ</p>
            </div>

            <div className="px-5 py-4">
                {data.suggestions && data.suggestions.length > 0 ? (
                    <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Gợi ý từ liên quan:</h4>
                        <div className="flex flex-wrap gap-2">
                            {data.suggestions.map((suggestion, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                                >
                                    {suggestion}
                                </span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-600">Không tìm thấy gợi ý phù hợp.</p>
                )}
            </div>
        </div>
    );
}
