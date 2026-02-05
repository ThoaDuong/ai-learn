"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";

interface CloseConfirmDialogProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function CloseConfirmDialog({ isOpen, onConfirm, onCancel }: CloseConfirmDialogProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={onCancel}
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-2xl mx-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Cancel learning session?</h3>
                                    <p className="text-gray-500 text-sm">Your current progress will not be saved</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onCancel}
                                    className="flex-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium"
                                >
                                    Continue Learning
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onConfirm}
                                    className="flex-1 px-4 py-3 rounded-xl bg-red-500 text-white font-medium"
                                >
                                    Cancel
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
