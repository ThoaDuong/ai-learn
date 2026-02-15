/**
 * Database operations for streak freeze mechanism.
 * Pure logic helpers are in @/common/utils/streakFreezeUtils.
 */

import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { getTodayDateString } from "@/common/utils/streakFreezeUtils";

export interface FreezeResult {
    success: boolean;
    newFreezeCount: number;
}

/**
 * Use a freeze to protect streak
 * - Decrements freezeCount by 1
 * - Adds today's date to freezeDates array
 * - Does NOT change the streak count (maintains it)
 */
export async function useFreeze(userId: string): Promise<FreezeResult> {
    const db = await getDatabase();
    const usersCollection = db.collection("users");

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
