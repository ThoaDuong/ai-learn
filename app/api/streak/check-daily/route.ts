import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { calculateMissedDays, getDateStringDaysAgo } from "@/common/utils/streakFreezeUtils";
import { useMultipleFreezes, resetStreak } from "@/lib/streakFreezeDb";

/**
 * Daily streak check endpoint
 * Called by Vercel Cron Job at midnight to:
 * 1. Find users who didn't earn streak today
 * 2. Calculate how many days they missed
 * 3. Use freezes for each missed day if available, or reset streak
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
            freezesConsumedTotal: 0,
            streakReset: 0,
            errors: 0
        };

        for (const user of usersAtRisk) {
            try {
                results.processed++;

                const freezeCount = user.freezeCount ?? 5;
                const lastStreakDate = user.lastStreakDate ? new Date(user.lastStreakDate) : null;
                const missedDays = calculateMissedDays(lastStreakDate);

                if (missedDays === 0) {
                    // User is still active (streak earned today or yesterday)
                    continue;
                }

                if (freezeCount >= missedDays) {
                    // Enough freezes to cover all missed days
                    // Generate date strings for each missed day
                    const missedDateStrings: string[] = [];
                    for (let i = missedDays; i >= 1; i--) {
                        missedDateStrings.push(getDateStringDaysAgo(i));
                    }

                    // Filter out dates already covered by activity route
                    const existingFreezeDates = new Set(user.freezeDates || []);
                    const newMissedDates = missedDateStrings.filter(d => !existingFreezeDates.has(d));

                    if (newMissedDates.length === 0) {
                        // All missed days already handled by activity route
                        // Just update lastStreakDate so this user isn't re-processed
                        const yesterday = new Date();
                        yesterday.setDate(yesterday.getDate() - 1);
                        yesterday.setHours(12, 0, 0, 0);
                        await usersCollection.updateOne(
                            { _id: user._id },
                            { $set: { lastStreakDate: yesterday } }
                        );
                        continue;
                    }

                    // Only consume freezes for dates not already covered
                    if (freezeCount >= newMissedDates.length) {
                        const freezeResult = await useMultipleFreezes(
                            user._id.toString(),
                            newMissedDates.length,
                            newMissedDates
                        );

                        if (freezeResult.success) {
                            // Update lastStreakDate to yesterday so streak chain continues
                            const yesterday = new Date();
                            yesterday.setDate(yesterday.getDate() - 1);
                            yesterday.setHours(12, 0, 0, 0);
                            await usersCollection.updateOne(
                                { _id: user._id },
                                { $set: { lastStreakDate: yesterday } }
                            );
                            results.freezeUsed++;
                            results.freezesConsumedTotal += newMissedDates.length;
                        } else {
                            results.errors++;
                        }
                    } else {
                        // Not enough freezes for remaining uncovered days — reset streak
                        const resetResult = await resetStreak(user._id.toString());
                        if (resetResult) {
                            results.streakReset++;
                        } else {
                            results.errors++;
                        }
                    }
                } else {
                    // Not enough freezes — reset streak
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
