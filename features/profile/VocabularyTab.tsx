"use client";

import { useRouter } from "next/navigation";
import { Trash2, CheckSquare, FolderEdit } from "lucide-react";
import VocaCard from "@/features/vocabulary/VocaCard";
import GroupTabs from "@/features/vocabulary/GroupTabs";
import Pagination from "@/features/vocabulary/Pagination";
import { ClientVocabulary, ClientGroup } from "@/types";

interface VocabularyTabProps {
    vocabularies: ClientVocabulary[];
    filteredVocabularies: ClientVocabulary[];
    paginatedVocabularies: ClientVocabulary[];
    groups: ClientGroup[];
    selectedGroupId: string | null;
    currentPage: number;
    totalPages: number;
    isLoading: boolean;
    isMultiSelectMode: boolean;
    selectedIds: Set<string>;
    onSelectGroup: (id: string | null) => void;
    onSetCurrentPage: (page: number) => void;
    onManageGroups: () => void;
    onToggleMultiSelectMode: () => void;
    onToggleSelectAll: () => void;
    onToggleSelectVocab: (id: string) => void;
    onEditVocab: (vocab: ClientVocabulary) => void;
    onDeleteVocab: (vocab: ClientVocabulary) => void;
    onShowGroupChangeDialog: () => void;
    onShowMultiDeleteConfirm: () => void;
}

export default function VocabularyTab({
    vocabularies,
    filteredVocabularies,
    paginatedVocabularies,
    groups,
    selectedGroupId,
    currentPage,
    totalPages,
    isLoading,
    isMultiSelectMode,
    selectedIds,
    onSelectGroup,
    onSetCurrentPage,
    onManageGroups,
    onToggleMultiSelectMode,
    onToggleSelectAll,
    onToggleSelectVocab,
    onEditVocab,
    onDeleteVocab,
    onShowGroupChangeDialog,
    onShowMultiDeleteConfirm,
}: VocabularyTabProps) {
    const router = useRouter();

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50">
                <h2 className="text-xl font-bold text-gray-900">My Vocabulary</h2>
                <p className="text-sm text-gray-600 mt-1">
                    {filteredVocabularies.length} word{filteredVocabularies.length !== 1 ? "s" : ""}
                    {selectedGroupId && " in this group"} • {vocabularies.length} total
                </p>
            </div>

            <div className="p-8">
                {/* Group Tabs */}
                <GroupTabs
                    groups={groups}
                    selectedGroupId={selectedGroupId}
                    onSelectGroup={onSelectGroup}
                    onManageGroups={onManageGroups}
                />

                {isLoading ? (
                    <div className="flex justify-center py-12">
                        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : paginatedVocabularies.length === 0 ? (
                    <div className="text-center py-12">
                        <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {selectedGroupId ? "No vocabulary in this group" : "No vocabulary saved yet"}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                            {selectedGroupId
                                ? "Add some words to this group to see them here!"
                                : "Start looking up words to build your vocabulary!"}
                        </p>
                        {!selectedGroupId && (
                            <button
                                onClick={() => router.push("/")}
                                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                            >
                                Go to Home
                            </button>
                        )}
                    </div>
                ) : (
                    <>
                        {/* Selection Toolbar */}
                        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                {/* Multi Select Toggle Button */}
                                <button
                                    onClick={onToggleMultiSelectMode}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isMultiSelectMode
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <CheckSquare size={16} />
                                    {isMultiSelectMode ? 'Exit Select' : 'Multi Select'}
                                </button>

                                {/* Select All - Only show in multi-select mode */}
                                {isMultiSelectMode && (
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.size === paginatedVocabularies.length && paginatedVocabularies.length > 0}
                                            onChange={onToggleSelectAll}
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-600">
                                            {selectedIds.size === paginatedVocabularies.length && paginatedVocabularies.length > 0
                                                ? "Deselect All"
                                                : "Select All"}
                                        </span>
                                    </label>
                                )}

                                {/* Selected count */}
                                {isMultiSelectMode && selectedIds.size > 0 && (
                                    <span className="text-sm text-blue-600 font-medium">
                                        {selectedIds.size} selected
                                    </span>
                                )}
                            </div>

                            {/* Action Buttons - Only show when items selected */}
                            {isMultiSelectMode && selectedIds.size > 0 && (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={onShowGroupChangeDialog}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors"
                                    >
                                        <FolderEdit size={16} />
                                        Change Group
                                    </button>
                                    <button
                                        onClick={onShowMultiDeleteConfirm}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {paginatedVocabularies.map((vocab) => (
                                <VocaCard
                                    key={vocab._id}
                                    vocabulary={vocab}
                                    isSelected={selectedIds.has(vocab._id)}
                                    showCheckbox={isMultiSelectMode}
                                    onSelect={() => onToggleSelectVocab(vocab._id)}
                                    onEdit={onEditVocab}
                                    onDelete={onDeleteVocab}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={onSetCurrentPage}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
