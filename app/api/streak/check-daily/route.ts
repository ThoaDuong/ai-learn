import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { shouldUseFreeze, getYesterdayDateString } from "@/common/utils/streakFreezeUtils";
import { useFreeze, resetStreak } from "@/lib/streakFreezeDb";

/**
 * Daily streak check endpoint
 * Called by Vercel Cron Job at midnight to:
 * 1. Find users who didn't earn streak today
 * 2. Use freeze if available, or reset streak
 * 
 * Security: Vercel sends Authorization: Bearer <CRON_SECRET>
 */
export async function GET(request: NextRequest) {
    try {
        // Verify Vercel Cron secret
        const authHeader = request.headers.get("authorization");
        const expectedSecret = process.env.CRON_SECRET;

        if (!expectedSecret || authHeader !== `Bearer ${expectedSecret}`) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");

        // Get today's date at midnight for comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const yesterdayStr = getYesterdayDateString();

        // Find users who:
        // 1. Have a streak > 0
        // 2. Last streak date is before today (didn't earn streak today)
        const usersAtRisk = await usersCollection.find({
            streak: { $gt: 0 },
            lastStreakDate: { $lt: today }
        }).toArray();

        const results = {
            processed: 0,
            freezeUsed: 0,
            streakReset: 0,
            errors: 0
        };

        for (const user of usersAtRisk) {
            try {
                results.processed++;

                const freezeCount = user.freezeCount ?? 5;
                const lastStreakDate = user.lastStreakDate ? new Date(user.lastStreakDate) : null;

                if (shouldUseFreeze(lastStreakDate, freezeCount)) {
                    // Use freeze to protect streak
                    const freezeResult = await useFreeze(user._id.toString());
                    if (freezeResult.success) {
                        results.freezeUsed++;
                    } else {
                        results.errors++;
                    }
                } else if (freezeCount <= 0) {
                    // No freeze available, reset streak
                    const resetResult = await resetStreak(user._id.toString());
                    if (resetResult) {
                        results.streakReset++;
                    } else {
                        results.errors++;
                    }
                }
            } catch (error) {
                console.error(`Error processing user ${user._id}:`, error);
                results.errors++;
            }
        }

        return NextResponse.json({
            success: true,
            results,
            processedAt: new Date().toISOString()
        });

    } catch (error) {
        console.error("Daily streak check error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

