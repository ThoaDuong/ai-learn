"use client";

import { motion } from "framer-motion";

interface VocabularyGroup {
    _id: string;
    name: string;
    isDefault?: boolean;
}

interface GroupTabsProps {
    groups: VocabularyGroup[];
    selectedGroupId: string | null;
    onSelectGroup: (groupId: string | null) => void;
    onManageGroups: () => void;
}

export default function GroupTabs({ groups, selectedGroupId, onSelectGroup, onManageGroups }: GroupTabsProps) {
    return (
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            {/* All Tab */}
            <button
                onClick={() => onSelectGroup(null)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${selectedGroupId === null
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
            >
                {selectedGroupId === null && (
                    <motion.div
                        layoutId="groupTab"
                        className="absolute inset-0 bg-blue-50 rounded-xl border border-blue-100"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                )}
                <span className="relative z-10">All</span>
            </button>

            {/* Group Tabs */}
            {groups.map((group) => (
                <button
                    key={group._id}
                    onClick={() => onSelectGroup(group._id)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${selectedGroupId === group._id
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                        }`}
                >
                    {selectedGroupId === group._id && (
                        <motion.div
                            layoutId="groupTab"
                            className="absolute inset-0 bg-blue-50 rounded-xl border border-blue-100"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                        {group.name}
                        {group.isDefault && (
                            <span className="text-xs text-gray-400">(default)</span>
                        )}
                    </span>
                </button>
            ))}

            {/* Manage Groups Button */}
            <button
                onClick={onManageGroups}
                className="ml-auto p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
                title="Manage Groups"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
        </div>
    );
}
