"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

export interface SuccessAlertProps {
    isOpen: boolean;
    title?: string;
    message: string;
    linkText?: string;
    linkHref?: string;
    duration?: number; // in seconds
    onClose: () => void;
}

export default function SuccessAlert({
    isOpen,
    title = "Success!",
    message,
    linkText,
    linkHref,
    duration = 6,
    onClose,
}: SuccessAlertProps) {
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
                    className="bg-white border border-green-200 rounded-xl shadow-xl overflow-hidden"
                >
                    <div className="bg-green-50 px-4 py-3">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-semibold text-green-800">{title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400 font-medium">{countdown}s</span>
                                <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-green-100 rounded-full transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-green-700" dangerouslySetInnerHTML={{ __html: message }} />
                    </div>
                    {linkText && linkHref && (
                        <div className="px-4 py-2 bg-white border-t border-green-100">
                            <Link
                                href={linkHref}
                                className="w-fit text-sm border-b border-blue-600 text-blue-600 hover:text-blue-700 font-medium"
                            >
                                {linkText}
                            </Link>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );

    // Use portal to render at body level
    if (!mounted) return null;

    return createPortal(alertContent, document.body);
}
