"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ProfileProvider } from "@/common/contexts/ProfileContext";
import { StreakProvider } from "@/common/contexts/StreakContext";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <SessionProvider>
            <ProfileProvider>
                <StreakProvider>
                    {children}
                </StreakProvider>
            </ProfileProvider>
        </SessionProvider>
    );
}
