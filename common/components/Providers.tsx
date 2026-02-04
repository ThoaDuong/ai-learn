"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ProfileProvider } from "@/common/contexts/ProfileContext";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <SessionProvider>
            <ProfileProvider>{children}</ProfileProvider>
        </SessionProvider>
    );
}
