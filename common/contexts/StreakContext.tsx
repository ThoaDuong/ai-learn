"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import StreakCongratulationsDialog from "@/features/learn/components/StreakCongratulationsDialog";

interface StreakContextType {
    triggerStreakDialog: (streak: number) => void;
    checkStreak: (activityType: string) => Promise<boolean>;
}

const StreakContext = createContext<StreakContextType | undefined>(undefined);

export function StreakProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [streakValue, setStreakValue] = useState(0);

    const triggerStreakDialog = (streak: number) => {
        setStreakValue(streak);
        setIsOpen(true);
    };

    const checkStreak = async (activityType: string): Promise<boolean> => {
        try {
            const res = await fetch("/api/streak/activity", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ activityType }),
            });
            const data = await res.json();

            if (data.streakAwarded) {
                triggerStreakDialog(data.newStreak);
                return true;
            }
        } catch (error) {
            console.error("Failed to check streak:", error);
        }
        return false;
    };

    return (
        <StreakContext.Provider value={{ triggerStreakDialog, checkStreak }}>
            {children}
            <StreakCongratulationsDialog
                isOpen={isOpen}
                newStreak={streakValue}
                onClose={() => setIsOpen(false)}
            />
        </StreakContext.Provider>
    );
}

export function useStreak() {
    const context = useContext(StreakContext);
    if (context === undefined) {
        throw new Error("useStreak must be used within a StreakProvider");
    }
    return context;
}
