"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import AuthButton from "@/common/components/AuthButton";
import VocaCard from "@/features/vocabulary/VocaCard";
import GroupTabs from "@/features/vocabulary/GroupTabs";
import GroupManagement from "@/features/vocabulary/GroupManagement";
import Pagination from "@/features/vocabulary/Pagination";
import ConfirmDialog from "@/features/vocabulary/ConfirmDialog";
import EditVocaModal from "@/features/vocabulary/EditVocaModal";
import ProfileStats from "@/features/profile/ProfileStats";
import StreakStats from "@/features/profile/StreakStats";
import ActivityChart from "@/features/profile/ActivityChart";
import { generateMockUserStats, generateWeeklyActivity } from "@/common/utils/mockData";

interface Vocabulary {
    _id: string;
    word: string;
    meaning: string;
    partOfSpeech?: string;
    level?: string;
    example?: string;
    exampleTranslation?: string;
    phonetic?: string;
    groupId?: string;
    createdAt?: string;
}

interface VocabularyGroup {
    _id: string;
    name: string;
    isDefault?: boolean;
}

interface Profile {
    name: string;
    email: string;
    image: string;
}

const ITEMS_PER_PAGE = 20;

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const searchParams = useSearchParams();
    const router = useRouter();
    const view = searchParams.get("view") || "profile";

    const [activeTab, setActiveTab] = useState(view);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [vocabularies, setVocabularies] = useState<Vocabulary[]>([]);
    const [groups, setGroups] = useState<VocabularyGroup[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState("");
    const [editImage, setEditImage] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState("");

    // Vocabulary management states
    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [showGroupManagement, setShowGroupManagement] = useState(false);
    const [editingVocab, setEditingVocab] = useState<Vocabulary | null>(null);
    const [deletingVocab, setDeletingVocab] = useState<Vocabulary | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // Mock data for statistics
    const userStats = generateMockUserStats();
    const weeklyActivity = generateWeeklyActivity();

    useEffect(() => {
        setActiveTab(view);
    }, [view]);

    useEffect(() => {
        if (status === "authenticated") {
            fetchProfile();
            fetchVocabularies();
            fetchGroups();
        }
    }, [status]);

    // Reset page when group changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedGroupId]);

    const fetchProfile = async () => {
        try {
            const response = await fetch("/api/profile");
            if (response.ok) {
                const data = await response.json();
                setProfile(data.profile);
                setEditName(data.profile.name || "");
                setEditImage(data.profile.image || "");
            }
        } catch (error) {
            console.error("Failed to fetch profile:", error);
        }
    };

    const fetchVocabularies = async () => {
        try {
            const response = await fetch("/api/vocabulary");
            if (response.ok) {
                const data = await response.json();
                setVocabularies(data.vocabularies || []);
            }
        } catch (error) {
            console.error("Failed to fetch vocabularies:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchGroups = async () => {
        try {
            const response = await fetch("/api/vocabulary/groups");
            if (response.ok) {
                const data = await response.json();
                setGroups(data.groups || []);
            }
        } catch (error) {
            console.error("Failed to fetch groups:", error);
        }
    };

    const handleSaveProfile = async () => {
        setIsSaving(true);
        setSaveMessage("");

        try {
            const response = await fetch("/api/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: editName,
                    image: editImage,
                }),
            });

            if (response.ok) {
                setSaveMessage("Profile updated successfully!");
                setProfile({
                    ...profile!,
                    name: editName,
                    image: editImage,
                });
                setIsEditing(false);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                const data = await response.json();
                setSaveMessage(data.error || "Failed to update profile");
            }
        } catch (error) {
            console.error("Failed to save profile:", error);
            setSaveMessage("Failed to update profile");
        } finally {
            setIsSaving(false);
        }
    };

    // Group management handlers
    const handleAddGroup = async (name: string) => {
        const response = await fetch("/api/vocabulary/groups", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "Failed to add group");
        }

        await fetchGroups();
    };

    const handleUpdateGroup = async (id: string, name: string) => {
        const response = await fetch(`/api/vocabulary/groups/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "Failed to update group");
        }

        await fetchGroups();
    };

    const handleDeleteGroup = async (id: string) => {
        const response = await fetch(`/api/vocabulary/groups/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "Failed to delete group");
        }

        await fetchGroups();
        if (selectedGroupId === id) {
            setSelectedGroupId(null);
        }
    };

    // Vocabulary CRUD handlers
    const handleEditVocab = (vocab: Vocabulary) => {
        setEditingVocab(vocab);
    };

    const handleDeleteVocab = (vocab: Vocabulary) => {
        setDeletingVocab(vocab);
    };

    const handleSaveVocab = async (updatedVocab: Partial<Vocabulary>) => {
        if (!editingVocab) return;

        const response = await fetch(`/api/vocabulary/${editingVocab._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedVocab),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "Failed to update vocabulary");
        }

        await fetchVocabularies();
        setEditingVocab(null);
    };

    const handleConfirmDelete = async () => {
        if (!deletingVocab) return;

        setIsDeleting(true);
        try {
            const response = await fetch(`/api/vocabulary/${deletingVocab._id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to delete vocabulary");
            }

            await fetchVocabularies();
            setDeletingVocab(null);
        } catch (error) {
            console.error("Failed to delete vocabulary:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    // Filter and paginate vocabularies
    const filteredVocabularies = selectedGroupId
        ? vocabularies.filter((v) => v.groupId === selectedGroupId)
        : vocabularies;

    const totalPages = Math.ceil(filteredVocabularies.length / ITEMS_PER_PAGE);
    const paginatedVocabularies = filteredVocabularies.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    if (status === "loading") {
        return (
            <div className="min-h-screen flex flex-col">
                <div className="page-background"></div>
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
                <Footer />
            </div>
        );
    }

    if (!session) {
        return (
            <div className="min-h-screen flex flex-col">
                <div className="page-background"></div>
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl font-bold text-gray-900">Please sign in to view your profile</h1>
                    <AuthButton />
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="page-background"></div>
            <Header />

            {/* Main Content */}
            <main className="flex-1 max-w-6xl mx-auto px-4 py-10 w-full">
                {/* Tab Navigation */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-1">
                        <button
                            onClick={() => {
                                setActiveTab("profile");
                                router.push("/profile?view=profile");
                            }}
                            className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "profile"
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            {activeTab === "profile" && (
                                <motion.div
                                    layoutId="profileTab"
                                    className="absolute inset-0 bg-blue-50 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Profile</span>
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab("vocabulary");
                                router.push("/profile?view=vocabulary");
                            }}
                            className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "vocabulary"
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            {activeTab === "vocabulary" && (
                                <motion.div
                                    layoutId="profileTab"
                                    className="absolute inset-0 bg-blue-50 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">My Vocabulary</span>
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === "profile" ? (
                        <motion.div
                            key="profile"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="space-y-6 max-w-6xl mx-auto">
                                {/* Profile Header Card */}
                                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                                    <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                                        <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
                                        <p className="text-sm text-gray-600 mt-1">Manage your account details</p>
                                    </div>

                                    <div className="p-8">
                                        {/* Avatar Section */}
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="relative">
                                                {(isEditing ? editImage : profile?.image) ? (
                                                    <Image
                                                        src={isEditing ? editImage : profile?.image || ""}
                                                        alt={profile?.name || "User"}
                                                        width={100}
                                                        height={100}
                                                        className="rounded-full ring-4 ring-gray-100"
                                                    />
                                                ) : (
                                                    <div className="w-[100px] h-[100px] rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold ring-4 ring-gray-100">
                                                        {profile?.name?.charAt(0).toUpperCase() || "U"}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {profile?.name || "User"}
                                                </h3>
                                                <p className="text-sm text-gray-500">{profile?.email}</p>
                                            </div>
                                        </div>

                                        {/* Edit Form */}
                                        {isEditing ? (
                                            <div className="space-y-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={editName}
                                                        onChange={(e) => setEditName(e.target.value)}
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Profile Image URL
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={editImage}
                                                        onChange={(e) => setEditImage(e.target.value)}
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                                                        placeholder="Enter image URL"
                                                    />
                                                </div>

                                                {saveMessage && (
                                                    <p className={`text-sm ${saveMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                                                        {saveMessage}
                                                    </p>
                                                )}

                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={handleSaveProfile}
                                                        disabled={isSaving}
                                                        className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                                                    >
                                                        {isSaving ? "Saving..." : "Save Changes"}
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setIsEditing(false);
                                                            setEditName(profile?.name || "");
                                                            setEditImage(profile?.image || "");
                                                            setSaveMessage("");
                                                        }}
                                                        className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => setIsEditing(true)}
                                                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                                Edit Profile
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Statistics Section - Row 1: Profile Stats (left) + Streak Stats (right) */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ProfileStats
                                        joinDate={userStats.joinDate}
                                        activeDays={userStats.activeDays}
                                        activeTime={userStats.activeTime}
                                    />
                                    <StreakStats streak={userStats.currentStreak} />
                                </div>

                                {/* Activity Chart - Row 2: Full Width */}
                                <ActivityChart data={weeklyActivity} />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="vocabulary"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                                <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50">
                                    <h2 className="text-xl font-bold text-gray-900">My Vocabulary</h2>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {filteredVocabularies.length} word{filteredVocabularies.length !== 1 ? "s" : ""}
                                        {selectedGroupId && " in this group"} • {vocabularies.length} total
                                    </p>
                                </div>

                                <div className="p-8">
                                    {/* Group Tabs */}
                                    <GroupTabs
                                        groups={groups}
                                        selectedGroupId={selectedGroupId}
                                        onSelectGroup={setSelectedGroupId}
                                        onManageGroups={() => setShowGroupManagement(true)}
                                    />

                                    {isLoading ? (
                                        <div className="flex justify-center py-12">
                                            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                                        </div>
                                    ) : paginatedVocabularies.length === 0 ? (
                                        <div className="text-center py-12">
                                            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                                {selectedGroupId ? "No vocabulary in this group" : "No vocabulary saved yet"}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-4">
                                                {selectedGroupId
                                                    ? "Add some words to this group to see them here!"
                                                    : "Start looking up words to build your vocabulary!"}
                                            </p>
                                            {!selectedGroupId && (
                                                <button
                                                    onClick={() => router.push("/")}
                                                    className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                                                >
                                                    Go to Home
                                                </button>
                                            )}
                                        </div>
                                    ) : (
                                        <>
                                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                                {paginatedVocabularies.map((vocab) => (
                                                    <VocaCard
                                                        key={vocab._id}
                                                        vocabulary={vocab}
                                                        onEdit={handleEditVocab}
                                                        onDelete={handleDeleteVocab}
                                                    />
                                                ))}
                                            </div>

                                            {/* Pagination */}
                                            <Pagination
                                                currentPage={currentPage}
                                                totalPages={totalPages}
                                                onPageChange={setCurrentPage}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />

            {/* Group Management Modal */}
            <GroupManagement
                isOpen={showGroupManagement}
                groups={groups}
                onClose={() => setShowGroupManagement(false)}
                onAddGroup={handleAddGroup}
                onUpdateGroup={handleUpdateGroup}
                onDeleteGroup={handleDeleteGroup}
            />

            {/* Edit Vocabulary Modal */}
            <EditVocaModal
                isOpen={editingVocab !== null}
                vocabulary={editingVocab}
                groups={groups}
                onClose={() => setEditingVocab(null)}
                onSave={handleSaveVocab}
            />

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={deletingVocab !== null}
                title="Delete Vocabulary"
                message={`Are you sure you want to delete "${deletingVocab?.word}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                variant="danger"
                isLoading={isDeleting}
                onConfirm={handleConfirmDelete}
                onCancel={() => setDeletingVocab(null)}
            />
        </div>
    );
}
