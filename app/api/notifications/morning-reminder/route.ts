import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { sendDailyReminderEmail } from "@/lib/email";

/**
 * Morning reminder endpoint
 * Called by Vercel Cron Job at 8 AM (Vietnam time) to:
 * 1. Find all users with an email
 * 2. Send a motivational morning reminder to start learning
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

        // Find all users with an email
        const users = await usersCollection.find({
            email: { $exists: true, $ne: null }
        }).toArray();

        const results = {
            total: users.length,
            emailsSent: 0,
            errors: 0
        };

        for (const user of users) {
            try {
                const emailSent = await sendDailyReminderEmail({
                    to: user.email,
                    name: user.name || "Student",
                    currentStreak: user.streak || 0
                });

                if (emailSent) {
                    results.emailsSent++;
                } else {
                    results.errors++;
                }
            } catch (error) {
                console.error(`Error sending morning reminder to user ${user._id}:`, error);
                results.errors++;
            }
        }

        return NextResponse.json({
            success: true,
            results,
            processedAt: new Date().toISOString()
        });

    } catch (error) {
        console.error("Morning reminder error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

