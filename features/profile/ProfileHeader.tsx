"use client";

import Image from "next/image";
import { Settings, Calendar, Mail, User, Bell, Box, Loader2 } from "lucide-react";
import AvatarUploader from "./AvatarUploader";
import { ProfileData, ProfileStats } from "@/types";

function InlineSkeleton({ width = "w-24", height = "h-4" }: { width?: string; height?: string }) {
    return <span className={`inline-block ${width} ${height} bg-gray-200 rounded-md animate-pulse`} />;
}

interface ProfileHeaderProps {
    profile: ProfileData | null;
    stats: ProfileStats | null;
    isEditing: boolean;
    editName: string;
    editImage: string;
    saveMessage: string;
    isSaving: boolean;
    emailNotifications: boolean;
    isTogglingNotif: boolean;
    onSetEditName: (name: string) => void;
    onSetEditImage: (image: string) => void;
    onSaveProfile: () => void;
    onCancelEditing: () => void;
    onStartEditing: () => void;
    onToggleNotifications: () => void;
}

export default function ProfileHeader({
    profile,
    stats,
    isEditing,
    editName,
    editImage,
    saveMessage,
    isSaving,
    emailNotifications,
    isTogglingNotif,
    onSetEditName,
    onSetEditImage,
    onSaveProfile,
    onCancelEditing,
    onStartEditing,
    onToggleNotifications,
}: ProfileHeaderProps) {
    if (isEditing) {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900">Edit Profile</h2>
                        <button
                            onClick={onCancelEditing}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            Cancel
                        </button>
                    </div>
                    <div className="flex items-center">
                        {/* Left */}
                        <AvatarUploader
                            currentImage={editImage}
                            googleImage={profile?.googleImage}
                            onSave={async (base64) => onSetEditImage(base64)}
                            onRevert={async () => onSetEditImage(profile?.googleImage || "")}
                            isSaving={isSaving}
                        />
                        {/* Right */}
                        <div className="w-full">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => onSetEditName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {saveMessage && (
                                <p className={`text-sm ${saveMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                                    {saveMessage}
                                </p>
                            )}

                            <button
                                onClick={onSaveProfile}
                                disabled={isSaving || editName === profile?.name}
                                className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSaving ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                    {!profile ? (
                        <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse border-2 border-gray-200" />
                    ) : profile.image ? (
                        <Image
                            src={profile.image}
                            alt={profile.name || "User"}
                            width={80}
                            height={80}
                            className="rounded-full border-2 border-gray-200 object-cover w-20 h-20"
                        />
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-gray-200">
                            {profile.name?.charAt(0).toUpperCase() || "U"}
                        </div>
                    )}
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                    <div className="grid gap-2" style={{ gridTemplateColumns: '28px 1fr' }}>
                        {/* Name */}
                        <div className="flex items-center justify-center">
                            <User size={18} className="text-gray-400" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{profile ? profile.name || "User" : <InlineSkeleton width="w-32" height="h-6" />}</h2>

                        {/* Email */}
                        <div className="flex items-center justify-center">
                            <Mail size={16} className="text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-sm flex items-center">{profile ? profile.email : <InlineSkeleton width="w-40" />}</p>

                        {/* Join Date */}
                        <div className="flex items-center justify-center">
                            <Calendar size={16} className="text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-sm flex items-center">
                            {stats ? (
                                <>Joined {stats.joinDate ? new Date(stats.joinDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "N/A"}</>
                            ) : (
                                <InlineSkeleton width="w-36" />
                            )}
                        </p>

                        {/* Email Notifications Toggle */}
                        <div className="flex items-center justify-center">
                            <Bell size={16} className="text-gray-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500 text-sm">Email notifications</span>
                            <button
                                onClick={onToggleNotifications}
                                disabled={isTogglingNotif}
                                className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors duration-200 focus:outline-none ${emailNotifications ? 'bg-blue-500' : 'bg-gray-300'
                                    } ${isTogglingNotif ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                aria-label="Toggle email notifications"
                            >
                                <span
                                    className={`inline-block h-2.5 w-2.5 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${emailNotifications ? 'translate-x-3.5' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>

                        {/* Freeze Count Display - ice cubes */}
                        <div className="flex items-center justify-center">
                            <Box size={18} className="text-gray-400" />
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center gap-1 justify-start flex-1">
                                {stats ? (
                                    Array.from({ length: stats.freezeCount ?? 0 }).map((_, i) => (
                                        <Image
                                            key={i}
                                            src="/images/ice-cube.png"
                                            alt="Freeze"
                                            width={22}
                                            height={22}
                                            className="drop-shadow-sm"
                                        />
                                    ))
                                ) : (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className="w-[22px] h-[22px] bg-gray-200 rounded animate-pulse" />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Settings Icon */}
                <button
                    onClick={onStartEditing}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <Settings size={20} className="text-gray-600" />
                </button>
            </div>
        </div>
    );
}
