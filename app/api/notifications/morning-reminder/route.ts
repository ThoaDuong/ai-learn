import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { sendDailyReminderEmail } from "@/lib/email";

/**
 * Morning reminder endpoint
 * Called by cron job at 8 AM (Vietnam time) to:
 * 1. Find all users with an email
 * 2. Send a motivational morning reminder to start learning
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

// GET endpoint for status check
export async function GET() {
    return NextResponse.json({
        endpoint: "Daily Morning Reminder",
        description: "Called at 8 AM (Vietnam time) to send motivational reminder emails",
        method: "POST with x-api-key header required"
    });
}
