/**
 * Database operations for streak freeze mechanism.
 * Pure logic helpers are in @/common/utils/streakFreezeUtils.
 */

import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export interface FreezeResult {
    success: boolean;
    freezesUsed: number;
    newFreezeCount: number;
}

/**
 * Use multiple freezes to protect streak across missed days.
 * - Decrements freezeCount by the number of freezes used
 * - Adds each missed date to freezeDates array
 * - Updates lastStreakDate to yesterday so next cron run works correctly
 */
export async function useMultipleFreezes(
    userId: string,
    count: number,
    missedDateStrings: string[]
): Promise<FreezeResult> {
    const db = await getDatabase();
    const usersCollection = db.collection("users");

    // Set lastStreakDate to yesterday so the streak chain continues
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(12, 0, 0, 0); // noon to avoid timezone edge cases

    const result = await usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        {
            $inc: { freezeCount: -count },
            $addToSet: { freezeDates: { $each: missedDateStrings } },
            $set: {
                lastStreakDate: yesterday,
                updatedAt: new Date()
            }
        }
    );

    if (result.modifiedCount === 0) {
        return { success: false, freezesUsed: 0, newFreezeCount: -1 };
    }

    // Get updated freeze count
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    return {
        success: true,
        freezesUsed: count,
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
