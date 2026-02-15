"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Calendar, Mail, Flame, User, Trash2, CheckSquare, FolderEdit, X, Snowflake, Box } from "lucide-react";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import AuthButton from "@/common/components/AuthButton";
import SuccessAlert from "@/common/components/SuccessAlert";
import ErrorAlert from "@/common/components/ErrorAlert";
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
import { ClientVocabulary, ClientGroup, ProfileData, ProfileStats, WeeklyActivityItem } from "@/types";

const ITEMS_PER_PAGE = 20;

// Use centralized types with local aliases for backwards compatibility
type Vocabulary = ClientVocabulary;
type Group = ClientGroup;
type Stats = ProfileStats;

function ProfileContent() {
    const { data: session, status, update } = useSession();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { setProfile: setContextProfile, updateAvatar } = useProfile();

    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [stats, setStats] = useState<Stats | null>(null);
    const [weeklyActivity, setWeeklyActivity] = useState<WeeklyActivityItem[]>([]);

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

    // Multi-select State
    const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [showMultiDeleteConfirm, setShowMultiDeleteConfirm] = useState(false);
    const [showGroupChangeDialog, setShowGroupChangeDialog] = useState(false);
    const [isUpdatingGroup, setIsUpdatingGroup] = useState(false);

    // Alert State
    const [successAlert, setSuccessAlert] = useState<{ message: string } | null>(null);
    const [errorAlert, setErrorAlert] = useState<{ message: string } | null>(null);

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
        const res = await fetch(`/api/vocabulary/groups/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description }),
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

    const handleSetDefaultGroup = async (id: string) => {
        const res = await fetch(`/api/vocabulary/groups/${id}`, {
            method: "PATCH",
        });
        const data = await res.json();
        if (data.success) {
            fetchGroups();
        } else {
            throw new Error(data.error || "Failed to set default group");
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
            const res = await fetch(`/api/vocabulary/${deletingVocab._id}`, {
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

    // Multi-select handlers
    const toggleSelectVocab = (id: string) => {
        setSelectedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const toggleSelectAll = () => {
        if (selectedIds.size === paginatedVocabularies.length) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(paginatedVocabularies.map(v => v._id)));
        }
    };

    const toggleMultiSelectMode = () => {
        setIsMultiSelectMode(prev => {
            if (prev) {
                // Turning off - clear selections
                setSelectedIds(new Set());
            }
            return !prev;
        });
    };

    const handleMultiDelete = async () => {
        if (selectedIds.size === 0) return;
        setIsDeleting(true);
        try {
            const res = await fetch("/api/vocabulary/bulk-delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ids: Array.from(selectedIds) }),
            });
            const data = await res.json();
            if (data.success) {
                setVocabularies(prev => prev.filter(v => !selectedIds.has(v._id)));
                setSelectedIds(new Set());
                setShowMultiDeleteConfirm(false);
                setSuccessAlert({ message: `${data.deletedCount} word(s) deleted successfully!` });
            } else {
                setErrorAlert({ message: data.error || 'Failed to delete vocabularies' });
            }
        } catch (error) {
            console.error("Error bulk deleting vocab:", error);
            setErrorAlert({ message: 'Failed to delete vocabularies' });
        } finally {
            setIsDeleting(false);
        }
    };

    const handleChangeGroup = async (targetGroupId: string) => {
        if (selectedIds.size === 0) return;

        // Filter out vocabs that are already in the target group
        const selectedVocabs = vocabularies.filter(v => selectedIds.has(v._id));
        const vocabsToUpdate = selectedVocabs.filter(v => v.groupId !== targetGroupId);

        if (vocabsToUpdate.length === 0) {
            setErrorAlert({ message: 'All selected words are already in the target group' });
            setShowGroupChangeDialog(false);
            return;
        }

        setIsUpdatingGroup(true);
        try {
            const res = await fetch("/api/vocabulary/bulk-update-group", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ids: vocabsToUpdate.map(v => v._id),
                    groupId: targetGroupId
                }),
            });
            const data = await res.json();
            if (data.success) {
                // Update local state
                setVocabularies(prev => prev.map(v => {
                    if (vocabsToUpdate.some(vu => vu._id === v._id)) {
                        return { ...v, groupId: targetGroupId };
                    }
                    return v;
                }));
                setSelectedIds(new Set());
                setShowGroupChangeDialog(false);
                setSuccessAlert({ message: `${data.modifiedCount} word(s) moved successfully!` });
            } else {
                setErrorAlert({ message: data.error || 'Failed to update group' });
            }
        } catch (error) {
            console.error("Error changing group:", error);
            setErrorAlert({ message: 'Failed to update group' });
        } finally {
            setIsUpdatingGroup(false);
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
    const formatActiveTime = (totalMinutes: number) => {
        if (totalMinutes < 60) {
            return `${totalMinutes}m`;
        }
        const h = Math.floor(totalMinutes / 60);
        const m = totalMinutes % 60;
        return m > 0 ? `${h}h ${m}m` : `${h}h`;
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
                                <div className="flex items-center">
                                    {/* Left */}
                                    <AvatarUploader
                                        currentImage={editImage}
                                        googleImage={profile?.googleImage}
                                        onSave={async (base64) => setEditImage(base64)}
                                        onRevert={async () => setEditImage(profile?.googleImage || "")}
                                        isSaving={isSaving}
                                    />
                                    {/* Right */}
                                    <div className="w-full">
                                        <div className="mb-4">
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
                                            disabled={isSaving || editName === profile?.name}
                                            className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSaving ? "Saving..." : "Save Changes"}
                                        </button>
                                    </div>
                                </div>


                            </div>
                        ) : (
                            // View Mode
                            <div className="flex flex-col md:flex-row items-start gap-6">
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
                                    <div className="grid gap-2" style={{ gridTemplateColumns: '28px 1fr' }}>
                                        {/* Name */}
                                        <div className="flex items-center justify-center">
                                            <User size={18} className="text-gray-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">{profile?.name || "User"}</h2>

                                        {/* Email */}
                                        <div className="flex items-center justify-center">
                                            <Mail size={16} className="text-gray-400" />
                                        </div>
                                        <p className="text-gray-500 text-sm flex items-center">{profile?.email}</p>

                                        {/* Join Date */}
                                        <div className="flex items-center justify-center">
                                            <Calendar size={16} className="text-gray-400" />
                                        </div>
                                        <p className="text-gray-500 text-sm flex items-center">
                                            Joined {stats?.joinDate ? new Date(stats.joinDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "N/A"}
                                        </p>

                                        {/* Freeze Count Display - ice cubes */}
                                        <div className="flex items-center justify-center">
                                            <Box size={18} className="text-gray-400" />

                                            {/* <Image src="/images/ice-cube.png" alt="Freeze" width={18} height={18} /> */}
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex items-center gap-1 justify-start flex-1">
                                                {Array.from({ length: stats?.freezeCount ?? 5 }).map((_, i) => (
                                                    <Image
                                                        key={i}
                                                        src="/images/ice-cube.png"
                                                        alt="Freeze"
                                                        width={22}
                                                        height={22}
                                                        className="drop-shadow-sm"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Settings Icon */}
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <Settings size={20} className="text-gray-600" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Part (30%) - Streak Card */}
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 shadow-sm p-6 flex flex-col items-center justify-center">
                        <div className="h-40 w-40 border-4 border-orange-300 rounded-full flex flex-col items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                                className="text-5xl mb-2"
                            >
                                <Image src="/images/fire.png" alt="Fire" width={50} height={50} />
                            </motion.div>
                            <div className="text-4xl font-extrabold text-orange-600">{stats?.currentStreak || 0}</div>
                            <p className="text-sm font-semibold text-gray-700 mt-1">
                                {(stats?.currentStreak || 0) === 1 ? "day streak" : "days streak"}
                            </p>
                        </div>
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
                                <StreakCalendar activeDates={stats?.activeDates || []} freezeDates={stats?.freezeDates || []} />
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
                                            {/* Selection Toolbar */}
                                            <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
                                                <div className="flex items-center gap-3">
                                                    {/* Multi Select Toggle Button */}
                                                    <button
                                                        onClick={toggleMultiSelectMode}
                                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isMultiSelectMode
                                                            ? 'bg-blue-500 text-white'
                                                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        <CheckSquare size={16} />
                                                        {isMultiSelectMode ? 'Exit Select' : 'Multi Select'}
                                                    </button>

                                                    {/* Select All - Only show in multi-select mode */}
                                                    {isMultiSelectMode && (
                                                        <label className="flex items-center gap-2 cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedIds.size === paginatedVocabularies.length && paginatedVocabularies.length > 0}
                                                                onChange={toggleSelectAll}
                                                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                            />
                                                            <span className="text-sm text-gray-600">
                                                                {selectedIds.size === paginatedVocabularies.length && paginatedVocabularies.length > 0
                                                                    ? "Deselect All"
                                                                    : "Select All"}
                                                            </span>
                                                        </label>
                                                    )}

                                                    {/* Selected count */}
                                                    {isMultiSelectMode && selectedIds.size > 0 && (
                                                        <span className="text-sm text-blue-600 font-medium">
                                                            {selectedIds.size} selected
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Action Buttons - Only show when items selected */}
                                                {isMultiSelectMode && selectedIds.size > 0 && (
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => setShowGroupChangeDialog(true)}
                                                            className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors"
                                                        >
                                                            <FolderEdit size={16} />
                                                            Change Group
                                                        </button>
                                                        <button
                                                            onClick={() => setShowMultiDeleteConfirm(true)}
                                                            className="flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                                                        >
                                                            <Trash2 size={16} />
                                                            Delete
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                                {paginatedVocabularies.map((vocab) => (
                                                    <VocaCard
                                                        key={vocab._id}
                                                        vocabulary={vocab}
                                                        isSelected={selectedIds.has(vocab._id)}
                                                        showCheckbox={isMultiSelectMode}
                                                        onSelect={() => toggleSelectVocab(vocab._id)}
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
                onSetDefaultGroup={handleSetDefaultGroup}
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

            {/* Multi-Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={showMultiDeleteConfirm}
                title="Delete Multiple Vocabulary"
                message={`Are you sure you want to delete ${selectedIds.size} selected word${selectedIds.size > 1 ? 's' : ''}? This action cannot be undone.`}
                confirmText={`Delete ${selectedIds.size} Word${selectedIds.size > 1 ? 's' : ''}`}
                cancelText="Cancel"
                variant="danger"
                isLoading={isDeleting}
                onConfirm={handleMultiDelete}
                onCancel={() => setShowMultiDeleteConfirm(false)}
            />

            {/* Group Change Dialog */}
            <AnimatePresence>
                {showGroupChangeDialog && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                        onClick={() => setShowGroupChangeDialog(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Change Group</h3>
                                <button
                                    onClick={() => setShowGroupChangeDialog(false)}
                                    className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Move {selectedIds.size} selected word{selectedIds.size > 1 ? 's' : ''} to:
                            </p>
                            <div className="space-y-2 max-h-60 overflow-y-auto">
                                {/* Groups */}
                                {groups.map((group) => (
                                    <button
                                        key={group._id}
                                        onClick={() => handleChangeGroup(group._id)}
                                        disabled={isUpdatingGroup}
                                        className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors disabled:opacity-50"
                                    >
                                        <span className="font-medium text-gray-700">{group.name}</span>
                                        {group.description && (
                                            <span className="block text-xs text-gray-400 mt-0.5 truncate">{group.description}</span>
                                        )}
                                    </button>
                                ))}
                                {groups.length === 0 && (
                                    <p className="text-sm text-gray-500 text-center py-4">No groups available. Create a group first.</p>
                                )}
                            </div>
                            {isUpdatingGroup && (
                                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                                    Updating...
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Alert */}
            <SuccessAlert
                isOpen={successAlert !== null}
                message={successAlert?.message || ''}
                duration={4}
                onClose={() => setSuccessAlert(null)}
            />

            {/* Error Alert */}
            <ErrorAlert
                isOpen={errorAlert !== null}
                message={errorAlert?.message || ''}
                duration={4}
                onClose={() => setErrorAlert(null)}
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
