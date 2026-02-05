"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Calendar, Mail, Flame, User } from "lucide-react";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import AuthButton from "@/common/components/AuthButton";
import VocaCard from "@/features/vocabulary/VocaCard";
import GroupTabs from "@/features/vocabulary/GroupTabs";
import Pagination from "@/features/vocabulary/Pagination";
import GroupManagement from "@/features/vocabulary/GroupManagement";
import EditVocaModal from "@/features/vocabulary/EditVocaModal";
import ConfirmDialog from "@/features/vocabulary/ConfirmDialog";
import ActivityChart from "@/features/profile/ActivityChart";
import AvatarUploader from "@/features/profile/AvatarUploader";
import StreakCalendar from "@/features/profile/StreakCalendar";
import { useProfile } from "@/common/contexts/ProfileContext";

interface Vocabulary {
    _id: string;
    word: string;
    meaning: string;
    pronunciation?: string;
    partOfSpeech?: string;
    example?: string;
    translation?: string;
    groupId?: string;
    image?: string;
    ipa?: string;
    phonetic?: string;
    level?: string;
    exampleTranslation?: string;
}

interface Group {
    _id: string;
    name: string;
    description?: string;
}

interface ProfileData {
    name: string;
    email: string;
    image: string;
    googleImage?: string;
}

interface Stats {
    joinDate: string;
    activeDays: number;
    activeTime: number;
    currentStreak: number;
    activeDates?: string[];
}

const ITEMS_PER_PAGE = 20;

function ProfileContent() {
    const { data: session, status, update } = useSession();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { setProfile: setContextProfile, updateAvatar } = useProfile();

    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [stats, setStats] = useState<Stats | null>(null);
    const [weeklyActivity, setWeeklyActivity] = useState<any[]>([]);

    // Vocabulary State
    const [vocabularies, setVocabularies] = useState<Vocabulary[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);
    const [activeTab, setActiveTab] = useState<"analytics" | "vocabulary">("analytics");

    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState("");
    const [editImage, setEditImage] = useState("");
    const [saveMessage, setSaveMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    // Filter/Pagination State
    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Modals State
    const [showGroupManagement, setShowGroupManagement] = useState(false);
    const [editingVocab, setEditingVocab] = useState<Vocabulary | null>(null);
    const [deletingVocab, setDeletingVocab] = useState<Vocabulary | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // Initial Data Fetch
    const fetchProfile = async () => {
        try {
            const res = await fetch("/api/profile");
            const data = await res.json();

            if (data.error) throw new Error(data.error);

            setProfile(data.profile);
            setStats(data.stats);
            setEditName(data.profile.name || "");
            setEditImage(data.profile.image || "");

            // Sync with context
            setContextProfile(data.profile);

            if (data.weeklyActivity) {
                setWeeklyActivity(data.weeklyActivity);
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    const fetchGroups = async () => {
        try {
            const res = await fetch("/api/vocabulary/groups");
            const data = await res.json();
            if (data.groups) {
                setGroups(data.groups);
            }
        } catch (error) {
            console.error("Error fetching groups:", error);
        }
    };

    const fetchVocabulary = async () => {
        try {
            const res = await fetch("/api/vocabulary");
            const data = await res.json();
            if (data.vocabularies) {
                setVocabularies(data.vocabularies);
            }
        } catch (error) {
            console.error("Error fetching vocabulary:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (status === "authenticated") {
            Promise.all([fetchProfile(), fetchGroups(), fetchVocabulary()]);
        }
    }, [status]);

    // Handle initial tab from URL
    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab === "vocabulary") {
            setActiveTab("vocabulary");
        } else if (tab === "profile" || !tab) {
            setActiveTab("analytics");
        }
    }, [searchParams]);

    // Save Profile
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

    // --- Vocabulary Management Handlers ---
    const handleAddGroup = async (name: string, description?: string) => {
        const res = await fetch("/api/vocabulary/groups", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description }),
        });
        const data = await res.json();
        if (data.success) {
            fetchGroups();
        } else {
            throw new Error(data.error || "Failed to add group");
        }
    };

    const handleUpdateGroup = async (id: string, name: string, description?: string) => {
        const res = await fetch("/api/vocabulary/groups", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, description }),
        });
        const data = await res.json();
        if (data.success) {
            fetchGroups();
        } else {
            throw new Error(data.error || "Failed to update group");
        }
    };

    const handleDeleteGroup = async (id: string) => {
        if (!confirm("Are you sure? Vocabulary in this group will be moved to 'Ungrouped'.")) return;
        try {
            const res = await fetch(`/api/vocabulary/groups?id=${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.success) {
                if (selectedGroupId === id) setSelectedGroupId(null);
                fetchGroups();
                fetchVocabulary();
            }
        } catch (error) {
            console.error("Error deleting group:", error);
        }
    };

    const handleEditVocab = (vocab: Vocabulary) => {
        setEditingVocab(vocab);
    };

    const handleSaveVocab = async (updatedVocab: Partial<Vocabulary>) => {
        if (!editingVocab) return;
        try {
            const res = await fetch(`/api/vocabulary/${editingVocab._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedVocab),
            });
            const data = await res.json();
            if (data.success) {
                fetchVocabulary();
                setEditingVocab(null);
            }
        } catch (error) {
            console.error("Error saving vocab:", error);
        }
    };

    const handleDeleteVocab = (vocab: Vocabulary) => {
        setDeletingVocab(vocab);
    };

    const handleConfirmDelete = async () => {
        if (!deletingVocab) return;
        setIsDeleting(true);
        try {
            const res = await fetch(`/api/vocabulary/save?id=${deletingVocab._id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.success) {
                setVocabularies((prev) => prev.filter((v) => v._id !== deletingVocab._id));
                setDeletingVocab(null);
            }
        } catch (error) {
            console.error("Error deleting vocab:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    // Memoized Filtering
    const filteredVocabularies = vocabularies.filter((vocab) => {
        if (!selectedGroupId) return true;
        return vocab.groupId === selectedGroupId;
    });

    const totalPages = Math.ceil(filteredVocabularies.length / ITEMS_PER_PAGE);
    const paginatedVocabularies = filteredVocabularies.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Format time display
    const formatActiveTime = (hours: number) => {
        if (hours < 1) {
            return `${Math.round(hours * 60)}p`;
        }
        const h = Math.floor(hours);
        const m = Math.round((hours - h) * 60);
        return m > 0 ? `${h}h ${m}p` : `${h}h`;
    };

    // Loading State
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
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md w-full border border-gray-100">
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in Required</h2>
                        <p className="text-gray-600 mb-8">Please sign in to view your profile and vocabulary.</p>
                        <div className="flex justify-center">
                            <AuthButton />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col relative bg-gray-50/50">
            <div className="page-background fixed inset-0 z-0"></div>
            <Header />

            <main className="flex-1 container mx-auto px-4 py-8 relative z-10 w-full max-w-7xl">
                {/* Profile Header Section - 70/30 Split */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 mb-4"
                >
                    {/* Left Part (70%) - Avatar + User Info + Settings */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        {isEditing ? (
                            // Edit Mode
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-gray-900">Edit Profile</h2>
                                    <button
                                        onClick={() => {
                                            setIsEditing(false);
                                            setEditName(profile?.name || "");
                                            setEditImage(profile?.image || "");
                                            setSaveMessage("");
                                        }}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        Cancel
                                    </button>
                                </div>

                                <AvatarUploader
                                    currentImage={editImage}
                                    googleImage={profile?.googleImage}
                                    onSave={async (base64) => setEditImage(base64)}
                                    onRevert={async () => setEditImage(profile?.googleImage || "")}
                                    isSaving={isSaving}
                                />

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
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
                                    onClick={handleSaveProfile}
                                    disabled={isSaving}
                                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                                >
                                    {isSaving ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        ) : (
                            // View Mode
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    {profile?.image ? (
                                        <Image
                                            src={profile.image}
                                            alt={profile.name || "User"}
                                            width={80}
                                            height={80}
                                            className="rounded-full border-2 border-gray-200 object-cover w-20 h-20"
                                        />
                                    ) : (
                                        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-gray-200">
                                            {profile?.name?.charAt(0).toUpperCase() || "U"}
                                        </div>
                                    )}
                                </div>

                                {/* User Info */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                        <User size={16} className="text-gray-400" />
                                        <h2 className="text-xl font-bold text-gray-900">{profile?.name || "User"}</h2>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                        <Mail size={14} className="text-gray-400" />
                                        <p className="text-gray-500 text-sm">{profile?.email}</p>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <Calendar size={14} className="text-gray-400" />
                                        <p className="text-gray-500 text-sm">
                                            Joined {stats?.joinDate ? new Date(stats.joinDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "N/A"}
                                        </p>
                                    </div>
                                </div>

                                {/* Settings Icon */}
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <Settings size={20} className="text-gray-600" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Part (30%) - Streak Card */}
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 shadow-sm p-6 flex flex-col items-center justify-center">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                            className="text-5xl mb-2"
                        >
                            🔥
                        </motion.div>
                        <div className="text-4xl font-extrabold text-orange-600">{stats?.currentStreak || 0}</div>
                        <p className="text-sm font-semibold text-gray-700 mt-1">
                            {(stats?.currentStreak || 0) === 1 ? "day streak" : "days streak"}
                        </p>
                    </div>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-start mb-4">
                    <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-sm border border-white/50 inline-flex">
                        <button
                            onClick={() => {
                                setActiveTab("analytics");
                                router.push("/profile?tab=profile");
                            }}
                            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "analytics"
                                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            Analytics
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab("vocabulary");
                                router.push("/profile?tab=vocabulary");
                            }}
                            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "vocabulary"
                                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            Voca List
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === "analytics" ? (
                        <motion.div
                            key="analytics"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Analytics Tab - 70/30 Split */}
                            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
                                {/* Left (70%) - Stats Card + Bar Chart */}
                                <div className="space-y-6">
                                    {/* Stats Card */}
                                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Learning Stats</h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            <div className="bg-blue-50 rounded-xl p-4">
                                                <p className="text-sm text-gray-500 font-medium">Active Days</p>
                                                <p className="text-2xl font-bold text-blue-600">{stats?.activeDays || 0}</p>
                                            </div>
                                            <div className="bg-purple-50 rounded-xl p-4">
                                                <p className="text-sm text-gray-500 font-medium">Active Time</p>
                                                <p className="text-2xl font-bold text-purple-600">{formatActiveTime(stats?.activeTime || 0)}</p>
                                            </div>
                                            <div className="bg-green-50 rounded-xl p-4">
                                                <p className="text-sm text-gray-500 font-medium">Words Saved</p>
                                                <p className="text-2xl font-bold text-green-600">{vocabularies.length}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bar Chart */}
                                    <ActivityChart data={weeklyActivity} />
                                </div>

                                {/* Right (30%) - Calendar */}
                                <StreakCalendar activeDates={stats?.activeDates || []} />
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
                            {/* Voca List Tab */}
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

export default function ProfilePage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex flex-col">
                <div className="page-background"></div>
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
                <Footer />
            </div>
        }>
            <ProfileContent />
        </Suspense>
    );
}
