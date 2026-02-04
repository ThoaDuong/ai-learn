"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ProfileData {
    name: string;
    email: string;
    image: string;
    googleImage?: string;
}

interface ProfileContextType {
    profile: ProfileData | null;
    setProfile: (profile: ProfileData | null) => void;
    updateAvatar: (imageUrl: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
    const [profile, setProfile] = useState<ProfileData | null>(null);

    const updateAvatar = useCallback((imageUrl: string) => {
        setProfile((prev) => {
            if (!prev) return prev;
            return { ...prev, image: imageUrl };
        });
    }, []);

    return (
        <ProfileContext.Provider value={{ profile, setProfile, updateAvatar }}>
            {children}
        </ProfileContext.Provider>
    );
}

export function useProfile() {
    const context = useContext(ProfileContext);
    if (context === undefined) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
}

// Optional hook that doesn't throw if used outside provider
export function useProfileOptional() {
    return useContext(ProfileContext);
}
