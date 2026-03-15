"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import AuthButton from "@/common/components/AuthButton";
import SuccessAlert from "@/common/components/SuccessAlert";
import ErrorAlert from "@/common/components/ErrorAlert";
import GroupManagement from "@/features/vocabulary/GroupManagement";
import EditVocaModal from "@/features/vocabulary/EditVocaModal";
import ConfirmDialog from "@/features/vocabulary/ConfirmDialog";
import ProfileHeader from "@/features/profile/ProfileHeader";
import StreakCard from "@/features/profile/StreakCard";
import ProfileTabs from "@/features/profile/ProfileTabs";
import AnalyticsTab from "@/features/profile/AnalyticsTab";
import VocabularyTab from "@/features/profile/VocabularyTab";
import GroupChangeDialog from "@/features/profile/GroupChangeDialog";
import { useProfileData } from "@/features/profile/hooks/useProfileData";
import { useVocabularyManager } from "@/features/profile/hooks/useVocabularyManager";

function ProfileContent() {
    const searchParams = useSearchParams();

    // Profile data & actions
    const profileData = useProfileData();
    const {
        session, status, profile, stats, weeklyActivity,
        isEditing, setIsEditing, editName, setEditName, editImage, setEditImage,
        saveMessage, isSaving, emailNotifications, isTogglingNotif,
        handleSaveProfile, handleToggleNotifications, cancelEditing, formatActiveTime,
    } = profileData;

    // Vocabulary data & actions
    const vocabManager = useVocabularyManager(status === "authenticated");

    // Tab state
    const [activeTab, setActiveTab] = useState<"analytics" | "vocabulary">("analytics");

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab === "vocabulary") {
            setActiveTab("vocabulary");
        } else if (tab === "profile" || !tab) {
            setActiveTab("analytics");
        }
    }, [searchParams]);

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
                    <ProfileHeader
                        profile={profile}
                        stats={stats}
                        isEditing={isEditing}
                        editName={editName}
                        editImage={editImage}
                        saveMessage={saveMessage}
                        isSaving={isSaving}
                        emailNotifications={emailNotifications}
                        isTogglingNotif={isTogglingNotif}
                        onSetEditName={setEditName}
                        onSetEditImage={setEditImage}
                        onSaveProfile={handleSaveProfile}
                        onCancelEditing={cancelEditing}
                        onStartEditing={() => setIsEditing(true)}
                        onToggleNotifications={handleToggleNotifications}
                    />
                    <StreakCard 
                        currentStreak={stats?.currentStreak || 0}
                        highestStreak={stats?.highestStreak || 0}
                    />
                </motion.div>

                {/* Tabs */}
                <ProfileTabs activeTab={activeTab} onSetActiveTab={setActiveTab} />

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === "analytics" ? (
                        <motion.div
                            key="analytics"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <AnalyticsTab
                                stats={stats}
                                weeklyActivity={weeklyActivity}
                                vocabulariesCount={vocabManager.vocabularies.length}
                                formatActiveTime={formatActiveTime}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="vocabulary"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <VocabularyTab
                                vocabularies={vocabManager.vocabularies}
                                filteredVocabularies={vocabManager.filteredVocabularies}
                                paginatedVocabularies={vocabManager.paginatedVocabularies}
                                groups={vocabManager.groups}
                                selectedGroupId={vocabManager.selectedGroupId}
                                currentPage={vocabManager.currentPage}
                                totalPages={vocabManager.totalPages}
                                isLoading={vocabManager.isLoading}
                                isMultiSelectMode={vocabManager.isMultiSelectMode}
                                selectedIds={vocabManager.selectedIds}
                                onSelectGroup={vocabManager.setSelectedGroupId}
                                onSetCurrentPage={vocabManager.setCurrentPage}
                                onManageGroups={() => vocabManager.setShowGroupManagement(true)}
                                onToggleMultiSelectMode={vocabManager.toggleMultiSelectMode}
                                onToggleSelectAll={vocabManager.toggleSelectAll}
                                onToggleSelectVocab={vocabManager.toggleSelectVocab}
                                onEditVocab={vocabManager.handleEditVocab}
                                onDeleteVocab={vocabManager.handleDeleteVocab}
                                onShowGroupChangeDialog={() => vocabManager.setShowGroupChangeDialog(true)}
                                onShowMultiDeleteConfirm={() => vocabManager.setShowMultiDeleteConfirm(true)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />

            {/* Group Management Modal */}
            <GroupManagement
                isOpen={vocabManager.showGroupManagement}
                groups={vocabManager.groups}
                onClose={() => vocabManager.setShowGroupManagement(false)}
                onAddGroup={vocabManager.handleAddGroup}
                onUpdateGroup={vocabManager.handleUpdateGroup}
                onDeleteGroup={vocabManager.handleDeleteGroup}
                onSetDefaultGroup={vocabManager.handleSetDefaultGroup}
            />

            {/* Edit Vocabulary Modal */}
            <EditVocaModal
                isOpen={vocabManager.editingVocab !== null}
                vocabulary={vocabManager.editingVocab}
                groups={vocabManager.groups}
                onClose={() => vocabManager.setEditingVocab(null)}
                onSave={vocabManager.handleSaveVocab}
            />

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={vocabManager.deletingVocab !== null}
                title="Delete Vocabulary"
                message={`Are you sure you want to delete "${vocabManager.deletingVocab?.word}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                variant="danger"
                isLoading={vocabManager.isDeleting}
                onConfirm={vocabManager.handleConfirmDelete}
                onCancel={() => vocabManager.setDeletingVocab(null)}
            />

            {/* Multi-Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={vocabManager.showMultiDeleteConfirm}
                title="Delete Multiple Vocabulary"
                message={`Are you sure you want to delete ${vocabManager.selectedIds.size} selected word${vocabManager.selectedIds.size > 1 ? 's' : ''}? This action cannot be undone.`}
                confirmText={`Delete ${vocabManager.selectedIds.size} Word${vocabManager.selectedIds.size > 1 ? 's' : ''}`}
                cancelText="Cancel"
                variant="danger"
                isLoading={vocabManager.isDeleting}
                onConfirm={vocabManager.handleMultiDelete}
                onCancel={() => vocabManager.setShowMultiDeleteConfirm(false)}
            />

            {/* Group Change Dialog */}
            <GroupChangeDialog
                isOpen={vocabManager.showGroupChangeDialog}
                groups={vocabManager.groups}
                selectedCount={vocabManager.selectedIds.size}
                isUpdatingGroup={vocabManager.isUpdatingGroup}
                onChangeGroup={vocabManager.handleChangeGroup}
                onClose={() => vocabManager.setShowGroupChangeDialog(false)}
            />

            {/* Success Alert */}
            <SuccessAlert
                isOpen={vocabManager.successAlert !== null}
                message={vocabManager.successAlert?.message || ''}
                duration={4}
                onClose={() => vocabManager.setSuccessAlert(null)}
            />

            {/* Error Alert */}
            <ErrorAlert
                isOpen={vocabManager.errorAlert !== null}
                message={vocabManager.errorAlert?.message || ''}
                duration={4}
                onClose={() => vocabManager.setErrorAlert(null)}
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
