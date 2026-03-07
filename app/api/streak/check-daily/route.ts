import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { useMultipleFreezes, resetStreak } from "@/lib/streakFreezeDb";

/**
 * Vietnam timezone offset: UTC+7
 */
const VN_OFFSET_MS = 7 * 60 * 60 * 1000;

/**
 * Calculate missed days using VN timezone.
 * Returns number of days missed between lastStreakDate and today (VN).
 * Returns 0 if user earned streak today or yesterday VN (no freeze needed yet).
 */
function calculateMissedDaysVN(lastStreakDate: Date | null): number {
    if (!lastStreakDate) return 0;

    const lastVN = new Date(new Date(lastStreakDate).getTime() + VN_OFFSET_MS);
    lastVN.setHours(0, 0, 0, 0);

    const todayVN = new Date(Date.now() + VN_OFFSET_MS);
    todayVN.setHours(0, 0, 0, 0);

    const diffDays = Math.round((todayVN.getTime() - lastVN.getTime()) / (1000 * 60 * 60 * 24));

    // If diffDays <= 1, user is still active (today or yesterday VN) — no freeze needed
    if (diffDays <= 1) return 0;

    // User missed (diffDays - 1) days
    return diffDays - 1;
}

/**
 * Get VN date string for N days ago
 */
function getVNDateStringDaysAgo(daysAgo: number): string {
    const vnNow = new Date(Date.now() + VN_OFFSET_MS);
    vnNow.setDate(vnNow.getDate() - daysAgo);
    return vnNow.toISOString().split('T')[0];
}

/**
 * Daily streak check endpoint
 * Called by Vercel Cron Job at 17:00 UTC (= 00:00 Vietnam time) to:
 * 1. Find users who have a streak > 0
 * 2. Calculate how many days they missed (using VN timezone)
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

        // Find all users who have a streak > 0
        const usersAtRisk = await usersCollection.find({
            streak: { $gt: 0 }
        }).toArray();

        const results = {
            processed: 0,
            freezeUsed: 0,
            freezesConsumedTotal: 0,
            streakReset: 0,
            skipped: 0,
            errors: 0
        };

        for (const user of usersAtRisk) {
            try {
                results.processed++;

                const lastStreakDate = user.lastStreakDate ? new Date(user.lastStreakDate) : null;

                // Calculate missed days using VN timezone
                const missedDays = calculateMissedDaysVN(lastStreakDate);

                if (missedDays === 0) {
                    // User earned streak today or yesterday VN — no action needed
                    results.skipped++;
                    continue;
                }

                const freezeCount = user.freezeCount ?? 5;

                // Generate missed date strings in VN timezone
                const missedDateStrings: string[] = [];
                for (let i = missedDays; i >= 1; i--) {
                    missedDateStrings.push(getVNDateStringDaysAgo(i));
                }

                // Filter out dates already covered (by activity route or previous cron run)
                const existingFreezeDates = new Set(user.freezeDates || []);
                const newMissedDates = missedDateStrings.filter(d => !existingFreezeDates.has(d));

                if (newMissedDates.length === 0) {
                    // All missed days already handled
                    // Update lastStreakDate so this user isn't re-processed
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    yesterday.setHours(12, 0, 0, 0);
                    await usersCollection.updateOne(
                        { _id: user._id },
                        { $set: { lastStreakDate: yesterday } }
                    );
                    results.skipped++;
                    continue;
                }

                if (freezeCount >= newMissedDates.length) {
                    // Enough freezes — consume for uncovered dates
                    const freezeResult = await useMultipleFreezes(
                        user._id.toString(),
                        newMissedDates.length,
                        newMissedDates
                    );

                    if (freezeResult.success) {
                        // Update lastStreakDate to yesterday so streak chain continues
                        // Activity route will see isConsecutiveDay(yesterday, today) = true
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
