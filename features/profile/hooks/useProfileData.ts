"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useProfile } from "@/common/contexts/ProfileContext";
import { ProfileData, ProfileStats, WeeklyActivityItem } from "@/types";

export function useProfileData() {
    const { data: session, status, update } = useSession();
    const { setProfile: setContextProfile, updateAvatar } = useProfile();

    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [stats, setStats] = useState<ProfileStats | null>(null);
    const [weeklyActivity, setWeeklyActivity] = useState<WeeklyActivityItem[]>([]);

    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState("");
    const [editImage, setEditImage] = useState("");
    const [saveMessage, setSaveMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    // Email Notification State
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [isTogglingNotif, setIsTogglingNotif] = useState(false);

    const fetchProfile = async () => {
        try {
            const res = await fetch("/api/profile");
            const data = await res.json();

            if (data.error) throw new Error(data.error);

            setProfile(data.profile);
            setStats(data.stats);
            setEditName(data.profile.name || "");
            setEditImage(data.profile.image || "");
            setEmailNotifications(data.profile.emailNotifications !== false);

            // Sync with context
            setContextProfile(data.profile);

            if (data.weeklyActivity) {
                setWeeklyActivity(data.weeklyActivity);
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    useEffect(() => {
        if (status === "authenticated") {
            fetchProfile().finally(() => setIsLoading(false));
        }
    }, [status]);

    const handleSaveProfile = async () => {
        setIsSaving(true);
        setSaveMessage("");

        try {
            const res = await fetch("/api/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: editName,
                    image: editImage,
                }),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error);
            }

            setSaveMessage("Profile updated successfully!");

            // Update local state
            setProfile((prev) => prev ? { ...prev, name: editName, image: editImage } : null);

            // Update context for instant header sync
            updateAvatar(editImage);

            setIsEditing(false);
        } catch (error) {
            setSaveMessage(error instanceof Error ? error.message : "Failed to update profile");
        } finally {
            setIsSaving(false);
        }
    };

    const handleToggleNotifications = async () => {
        setIsTogglingNotif(true);
        const newVal = !emailNotifications;
        try {
            const res = await fetch("/api/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ emailNotifications: newVal }),
            });
            if (res.ok) {
                setEmailNotifications(newVal);
            }
        } catch (e) {
            console.error("Toggle notification error:", e);
        } finally {
            setIsTogglingNotif(false);
        }
    };

    const cancelEditing = () => {
        setIsEditing(false);
        setEditName(profile?.name || "");
        setEditImage(profile?.image || "");
        setSaveMessage("");
    };

    const formatActiveTime = (totalMinutes: number) => {
        if (totalMinutes < 60) {
            return `${totalMinutes}m`;
        }
        const h = Math.floor(totalMinutes / 60);
        const m = totalMinutes % 60;
        return m > 0 ? `${h}h ${m}m` : `${h}h`;
    };

    return {
        session,
        status,
        profile,
        stats,
        weeklyActivity,
        isLoading,
        isEditing,
        setIsEditing,
        editName,
        setEditName,
        editImage,
        setEditImage,
        saveMessage,
        isSaving,
        emailNotifications,
        isTogglingNotif,
        handleSaveProfile,
        handleToggleNotifications,
        cancelEditing,
        formatActiveTime,
    };
}
