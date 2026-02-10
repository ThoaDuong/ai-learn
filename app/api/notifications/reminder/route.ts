import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { sendStreakReminderEmail } from "@/lib/email";
import { getTodayDateString } from "@/common/utils/streakFreezeUtils";
import { isSameDay } from "@/common/utils/streakUtils";

/**
 * Daily reminder notification endpoint
 * Called by cron job at 22h (10 PM) to:
 * 1. Find users who haven't earned streak today
 * 2. Send reminder email with appropriate warning
 * 
 * Security: Requires API key for cron job authorization
 */
export async function POST(request: NextRequest) {
    try {
        // Verify API key for cron job authorization
        const apiKey = request.headers.get("x-api-key");
        const expectedKey = process.env.CRON_API_KEY;

        if (!expectedKey || apiKey !== expectedKey) {
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
            email: { $exists: true, $ne: null }
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
        console.error("Reminder notification error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// GET endpoint for status check
export async function GET() {
    return NextResponse.json({
        endpoint: "Daily Streak Reminder",
        description: "Called at 22h (10 PM) to send reminder emails",
        method: "POST with x-api-key header required"
    });
}
