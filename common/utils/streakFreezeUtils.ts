/**
 * Utility functions for streak freeze mechanism
 */

import { getDatabase } from "@/lib/mongodb";

/**
 * Check if a date is yesterday (for determining if freeze should be used)
 */
export function isYesterday(date: Date): boolean {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    return yesterday.getTime() === checkDate.getTime();
}

/**
 * Get today's date as YYYY-MM-DD string
 */
export function getTodayDateString(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

/**
 * Get yesterday's date as YYYY-MM-DD string  
 */
export function getYesterdayDateString(): string {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
}

/**
 * Check if user qualifies for freeze protection
 * User qualifies if:
 * 1. They have freezeCount > 0
 * 2. They didn't earn streak today (lastStreakDate < today)
 * 3. Their last streak activity was yesterday (so streak is still valid but at risk)
 */
export function shouldUseFreeze(
    lastStreakDate: Date | null,
    freezeCount: number
): boolean {
    if (!lastStreakDate || freezeCount <= 0) {
        return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastStreak = new Date(lastStreakDate);
    lastStreak.setHours(0, 0, 0, 0);

    // Calculate days since last streak activity
    const diffTime = today.getTime() - lastStreak.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Use freeze if exactly 1 day has passed (yesterday was last activity)
    return diffDays === 1;
}

/**
 * Use a freeze to protect streak
 * - Decrements freezeCount by 1
 * - Adds today's date to freezeDates array
 * - Does NOT change the streak count (maintains it)
 */
export async function useFreeze(userId: string): Promise<{
    success: boolean;
    newFreezeCount: number;
}> {
    const db = await getDatabase();
    const usersCollection = db.collection("users");
    const { ObjectId } = await import("mongodb");

    const todayStr = getTodayDateString();

    const result = await usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        {
            $inc: { freezeCount: -1 },
            $addToSet: { freezeDates: todayStr },
            $set: { updatedAt: new Date() }
        }
    );

    if (result.modifiedCount === 0) {
        return { success: false, newFreezeCount: -1 };
    }

    // Get updated freeze count
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    return {
        success: true,
        newFreezeCount: user?.freezeCount ?? 0
    };
}

/**
 * Reset streak to 0 for a user (when no freeze available)
 */
export async function resetStreak(userId: string): Promise<boolean> {
    const db = await getDatabase();
    const usersCollection = db.collection("users");
    const { ObjectId } = await import("mongodb");

    const result = await usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        {
            $set: {
                streak: 0,
                updatedAt: new Date()
            }
        }
    );

    return result.modifiedCount > 0;
}
