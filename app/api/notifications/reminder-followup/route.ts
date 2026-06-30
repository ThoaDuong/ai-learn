import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { sendStreakReminderEmail } from "@/lib/email";
import { getTodayDateString } from "@/common/utils/streakFreezeUtils";
import { isSameDay } from "@/common/utils/streakUtils";

/**
 * Daily reminder follow-up notification endpoint
 * Called by Vercel Cron Job at 10:30 PM (Vietnam time) to:
 * 1. Find users who haven't earned streak today
 * 2. Send reminder email with appropriate warning
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

        const today = new Date();
        const todayStr = getTodayDateString();

        // Find users who:
        // 1. Have a streak > 0 (something to lose)
        // 2. Haven't earned streak today (lastStreakDate < today or doesn't include today in streakDates)
        const usersToNotify = await usersCollection.find({
            streak: { $gt: 0 },
            email: { $exists: true, $ne: null },
            emailNotifications: { $ne: false }
        }).toArray();

        const results = {
            processed: 0,
            emailsSent: 0,
            skipped: 0,
            errors: 0
        };

        for (const user of usersToNotify) {
            try {
                // Check if user already earned streak today
                const lastStreakDate = user.lastStreakDate ? new Date(user.lastStreakDate) : null;
                if (lastStreakDate && isSameDay(lastStreakDate, today)) {
                    results.skipped++;
                    continue;
                }

                // Also check if today is in streakDates
                const streakDates = user.streakDates || [];
                if (streakDates.includes(todayStr)) {
                    results.skipped++;
                    continue;
                }

                results.processed++;

                // Send reminder email
                const freezeCount = user.freezeCount ?? 5;
                const emailSent = await sendStreakReminderEmail({
                    to: user.email,
                    name: user.name || "Student",
                    currentStreak: user.streak || 0,
                    freezeCount
                });

                if (emailSent) {
                    results.emailsSent++;
                } else {
                    results.errors++;
                }

            } catch (error) {
                console.error(`Error notifying user ${user._id}:`, error);
                results.errors++;
            }
        }

        return NextResponse.json({
            success: true,
            results,
            processedAt: new Date().toISOString()
        });

    } catch (error) {
        console.error("Reminder follow-up notification error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
