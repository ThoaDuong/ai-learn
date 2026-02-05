import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { isConsecutiveDay, isSameDay } from "@/common/utils/streakUtils";

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { activityType, score } = body;

        // Validation
        if (activityType === 'game_complete') {
            if (score === undefined || score < 5) {
                return NextResponse.json({ streakAwarded: false, message: "Score too low" });
            }
        } else if (activityType !== 'word_save') {
            return NextResponse.json(
                { error: "Invalid activity type" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");
        const googleId = (session.user as { googleId?: string }).googleId;

        const user = await usersCollection.findOne({ googleId });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const now = new Date();
        const todayStr = now.toISOString().split('T')[0];

        // Check if already earned streak today
        if (user.lastStreakDate) {
            if (isSameDay(user.lastStreakDate, now)) {
                return NextResponse.json({
                    streakAwarded: false,
                    newStreak: user.streak,
                    message: "Already earned streak today"
                });
            }
        }

        // Calculate new streak
        let newStreak = 1;
        if (user.lastStreakDate && isConsecutiveDay(user.lastStreakDate, now)) {
            newStreak = (user.streak || 0) + 1;
        } else if (user.streak && user.lastStreakDate && isSameDay(user.lastStreakDate, now)) {
            // Should be caught by check above, but safe fallback
            newStreak = user.streak;
        }
        // Else gap -> reset to 1

        // Update user
        // Prepare update operation
        const updateOp: any = {
            $set: {
                streak: newStreak,
                lastStreakDate: now,
                updatedAt: now
            },
            $addToSet: {
                streakDates: todayStr
            },
            $inc: {}
        };

        // Check if we need to increment activeDays (avoid double counting if login route ran today)
        // If lastLoginDate is strictly BEFORE today (not same day), increment activeDays
        const lastLoginDate = user.lastLoginDate ? new Date(user.lastLoginDate) : null;
        if (!lastLoginDate || !isSameDay(lastLoginDate, now)) {
            updateOp.$inc.activeDays = 1;
            updateOp.$set.lastLoginDate = now; // Update this so subsequent calls know
        }

        // Remove empty $inc if not used
        if (Object.keys(updateOp.$inc).length === 0) {
            delete updateOp.$inc;
        }

        // Update user
        await usersCollection.updateOne(
            { googleId },
            updateOp
        );


        return NextResponse.json({
            streakAwarded: true,
            newStreak,
            streakDates: user.streakDates ? [...user.streakDates, todayStr] : [todayStr],
            message: "Streak awarded!"
        });

    } catch (error) {
        console.error("Streak activity error:", error);
        return NextResponse.json(
            { error: "Failed to update streak" },
            { status: 500 }
        );
    }
}
