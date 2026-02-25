"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ClientGroup } from "@/types";

interface GroupChangeDialogProps {
    isOpen: boolean;
    groups: ClientGroup[];
    selectedCount: number;
    isUpdatingGroup: boolean;
    onChangeGroup: (targetGroupId: string) => void;
    onClose: () => void;
}

export default function GroupChangeDialog({
    isOpen,
    groups,
    selectedCount,
    isUpdatingGroup,
    onChangeGroup,
    onClose,
}: GroupChangeDialogProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-gray-900">Change Group</h3>
                            <button
                                onClick={onClose}
                                className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            Move {selectedCount} selected word{selectedCount > 1 ? 's' : ''} to:
                        </p>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                            {groups.map((group) => (
                                <button
                                    key={group._id}
                                    onClick={() => onChangeGroup(group._id)}
                                    disabled={isUpdatingGroup}
                                    className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors disabled:opacity-50"
                                >
                                    <span className="font-medium text-gray-700">{group.name}</span>
                                    {group.description && (
                                        <span className="block text-xs text-gray-400 mt-0.5 truncate">{group.description}</span>
                                    )}
                                </button>
                            ))}
                            {groups.length === 0 && (
                                <p className="text-sm text-gray-500 text-center py-4">No groups available. Create a group first.</p>
                            )}
                        </div>
                        {isUpdatingGroup && (
                            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                                Updating...
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
