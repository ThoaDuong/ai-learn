"use client";

import { useState, useEffect } from "react";
import { ClientVocabulary, ClientGroup } from "@/types";

type Vocabulary = ClientVocabulary;
type Group = ClientGroup;

const ITEMS_PER_PAGE = 20;

export function useVocabularyManager(isAuthenticated: boolean) {
    // Core state
    const [vocabularies, setVocabularies] = useState<Vocabulary[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);

    // Filter/Pagination
    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Modals
    const [showGroupManagement, setShowGroupManagement] = useState(false);
    const [editingVocab, setEditingVocab] = useState<Vocabulary | null>(null);
    const [deletingVocab, setDeletingVocab] = useState<Vocabulary | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // Multi-select
    const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [showMultiDeleteConfirm, setShowMultiDeleteConfirm] = useState(false);
    const [showGroupChangeDialog, setShowGroupChangeDialog] = useState(false);
    const [isUpdatingGroup, setIsUpdatingGroup] = useState(false);

    // Alerts
    const [successAlert, setSuccessAlert] = useState<{ message: string } | null>(null);
    const [errorAlert, setErrorAlert] = useState<{ message: string } | null>(null);

    // Loading
    const [isLoading, setIsLoading] = useState(true);

    // --- Data Fetching ---
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
        if (isAuthenticated) {
            Promise.all([fetchGroups(), fetchVocabulary()]);
        }
    }, [isAuthenticated]);

    // --- Group CRUD ---
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

    // --- Vocabulary CRUD ---
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

    // --- Multi-select ---
    const filteredVocabularies = vocabularies.filter((vocab) => {
        if (!selectedGroupId) return true;
        return vocab.groupId === selectedGroupId;
    });

    const totalPages = Math.ceil(filteredVocabularies.length / ITEMS_PER_PAGE);
    const paginatedVocabularies = filteredVocabularies.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

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

    return {
        // Data
        vocabularies,
        groups,
        filteredVocabularies,
        paginatedVocabularies,
        totalPages,

        // Filter/Pagination
        selectedGroupId,
        setSelectedGroupId,
        currentPage,
        setCurrentPage,

        // Loading
        isLoading,

        // Modals
        showGroupManagement,
        setShowGroupManagement,
        editingVocab,
        setEditingVocab,
        deletingVocab,
        setDeletingVocab,
        isDeleting,

        // Multi-select
        isMultiSelectMode,
        selectedIds,
        showMultiDeleteConfirm,
        setShowMultiDeleteConfirm,
        showGroupChangeDialog,
        setShowGroupChangeDialog,
        isUpdatingGroup,

        // Alerts
        successAlert,
        setSuccessAlert,
        errorAlert,
        setErrorAlert,

        // Group handlers
        handleAddGroup,
        handleUpdateGroup,
        handleDeleteGroup,
        handleSetDefaultGroup,

        // Vocab handlers
        handleEditVocab,
        handleSaveVocab,
        handleDeleteVocab,
        handleConfirmDelete,

        // Multi-select handlers
        toggleSelectVocab,
        toggleSelectAll,
        toggleMultiSelectMode,
        handleMultiDelete,
        handleChangeGroup,
    };
}
