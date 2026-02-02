"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConfirmDialog from "./ConfirmDialog";

interface VocabularyGroup {
    _id: string;
    name: string;
    isDefault?: boolean;
}

interface GroupManagementProps {
    isOpen: boolean;
    groups: VocabularyGroup[];
    onClose: () => void;
    onAddGroup: (name: string) => Promise<void>;
    onUpdateGroup: (id: string, name: string) => Promise<void>;
    onDeleteGroup: (id: string) => Promise<void>;
}

export default function GroupManagement({
    isOpen,
    groups,
    onClose,
    onAddGroup,
    onUpdateGroup,
    onDeleteGroup,
}: GroupManagementProps) {
    const [newGroupName, setNewGroupName] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingName, setEditingName] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState("");

    const handleAddGroup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newGroupName.trim()) return;

        setIsAdding(true);
        setError("");
        try {
            await onAddGroup(newGroupName.trim());
            setNewGroupName("");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to add group");
        } finally {
            setIsAdding(false);
        }
    };

    const handleStartEdit = (group: VocabularyGroup) => {
        setEditingId(group._id);
        setEditingName(group.name);
        setError("");
    };

    const handleSaveEdit = async () => {
        if (!editingId || !editingName.trim()) return;

        setIsUpdating(true);
        setError("");
        try {
            await onUpdateGroup(editingId, editingName.trim());
            setEditingId(null);
            setEditingName("");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to update group");
        } finally {
            setIsUpdating(false);
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditingName("");
        setError("");
    };

    const handleDeleteGroup = async () => {
        if (!deleteConfirmId) return;

        setIsDeleting(true);
        setError("");
        try {
            await onDeleteGroup(deleteConfirmId);
            setDeleteConfirmId(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to delete group");
            setDeleteConfirmId(null);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={onClose}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
                        >
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50 flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900">Manage Groups</h3>
                                <button
                                    onClick={onClose}
                                    className="p-1 rounded-lg hover:bg-white/50 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Add New Group Form */}
                                <form onSubmit={handleAddGroup} className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Add New Group
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={newGroupName}
                                            onChange={(e) => setNewGroupName(e.target.value)}
                                            placeholder="Enter group name..."
                                            className="flex-1 px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isAdding || !newGroupName.trim()}
                                            className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isAdding ? "Adding..." : "Add"}
                                        </button>
                                    </div>
                                </form>

                                {/* Groups List */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Groups
                                    </label>
                                    <div className="space-y-2 max-h-64 overflow-y-auto">
                                        {groups.length === 0 ? (
                                            <p className="text-sm text-gray-500 text-center py-4">
                                                No groups yet. Create your first group above.
                                            </p>
                                        ) : (
                                            groups.map((group) => (
                                                <div
                                                    key={group._id}
                                                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                                                >
                                                    {editingId === group._id ? (
                                                        <div className="flex-1 flex items-center gap-2">
                                                            <input
                                                                type="text"
                                                                value={editingName}
                                                                onChange={(e) => setEditingName(e.target.value)}
                                                                className="flex-1 px-2 py-1 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-sm"
                                                                autoFocus
                                                            />
                                                            <button
                                                                onClick={handleSaveEdit}
                                                                disabled={isUpdating}
                                                                className="p-1.5 rounded-lg hover:bg-green-100 text-green-600 transition-colors"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                onClick={handleCancelEdit}
                                                                disabled={isUpdating}
                                                                className="p-1.5 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm font-medium text-gray-900">
                                                                    {group.name}
                                                                </span>
                                                                {group.isDefault && (
                                                                    <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                                                                        Default
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                {!group.isDefault && (
                                                                    <>
                                                                        <button
                                                                            onClick={() => handleStartEdit(group)}
                                                                            className="p-1.5 rounded-lg hover:bg-blue-100 text-gray-400 hover:text-blue-600 transition-colors"
                                                                            title="Edit"
                                                                        >
                                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                            </svg>
                                                                        </button>
                                                                        <button
                                                                            onClick={() => setDeleteConfirmId(group._id)}
                                                                            className="p-1.5 rounded-lg hover:bg-red-100 text-gray-400 hover:text-red-600 transition-colors"
                                                                            title="Delete"
                                                                        >
                                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                            </svg>
                                                                        </button>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>

                                {error && (
                                    <p className="mt-4 text-sm text-red-600 text-center">{error}</p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={deleteConfirmId !== null}
                title="Delete Group"
                message="Are you sure you want to delete this group? This action cannot be undone. Note: Groups containing vocabularies cannot be deleted."
                confirmText="Delete"
                cancelText="Cancel"
                variant="danger"
                isLoading={isDeleting}
                onConfirm={handleDeleteGroup}
                onCancel={() => setDeleteConfirmId(null)}
            />
        </>
    );
}
