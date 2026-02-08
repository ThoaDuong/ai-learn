"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

export interface ErrorAlertProps {
    isOpen: boolean;
    title?: string;
    message: string;
    duration?: number; // in seconds
    onClose: () => void;
}

export default function ErrorAlert({
    isOpen,
    title = "Error!",
    message,
    duration = 6,
    onClose,
}: ErrorAlertProps) {
    const [countdown, setCountdown] = useState(duration);
    const [mounted, setMounted] = useState(false);

    // Mount check for portal
    useEffect(() => {
        setMounted(true);
    }, []);

    // Countdown timer
    useEffect(() => {
        if (isOpen) {
            setCountdown(duration);

            const countdownInterval = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(countdownInterval);
                        onClose();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [isOpen, duration, onClose]);

    const alertContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ type: "spring", damping: 20 }}
                    style={{
                        position: "fixed",
                        top: "72px", // Below header
                        right: "16px",
                        zIndex: 9999,
                        maxWidth: "380px",
                    }}
                    className="bg-white border border-red-200 rounded-xl shadow-xl overflow-hidden"
                >
                    <div className="bg-red-50 px-4 py-3">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                                    <AlertCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-semibold text-red-800">{title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400 font-medium">{countdown}s</span>
                                <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-red-100 rounded-full transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-red-700">{message}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    // Use portal to render at body level
    if (!mounted) return null;

    return createPortal(alertContent, document.body);
}
