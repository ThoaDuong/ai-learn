import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { isConsecutiveDay, isSameDay } from "@/common/utils/streakUtils";
import { calculateMissedDays, formatLocalDate } from "@/common/utils/streakFreezeUtils";
import { useMultipleFreezes } from "@/lib/streakFreezeDb";

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
        } else if (activityType !== 'word_save' && activityType !== 'image_scan') {
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

        // Calculate new streak with freeze support
        let newStreak = 1;
        let freezesUsedNow = 0;
        if (user.lastStreakDate) {
            if (isConsecutiveDay(user.lastStreakDate, now)) {
                // Yesterday was active → continue streak
                newStreak = (user.streak || 0) + 1;
            } else {
                // Gap detected → try to use freezes for missed days
                const lastStreakDate = new Date(user.lastStreakDate);
                const missedDays = calculateMissedDays(lastStreakDate);
                const freezeCount = user.freezeCount ?? 5;

                if (missedDays > 0) {
                    // Generate missed date strings
                    const missedDateStrings: string[] = [];
                    for (let i = missedDays; i >= 1; i--) {
                        const d = new Date(now);
                        d.setDate(d.getDate() - i);
                        missedDateStrings.push(formatLocalDate(d));
                    }

                    // Filter out dates already covered by cron
                    const existingFreezeDates = new Set(user.freezeDates || []);
                    const newMissedDates = missedDateStrings.filter(d => !existingFreezeDates.has(d));

                    if (newMissedDates.length === 0) {
                        // All missed days already covered by cron → just continue streak
                        newStreak = (user.streak || 0) + 1;
                    } else if (freezeCount >= newMissedDates.length) {
                        // Enough freezes → consume only uncovered dates
                        await useMultipleFreezes(user._id.toString(), newMissedDates.length, newMissedDates);
                        freezesUsedNow = newMissedDates.length;
                        newStreak = (user.streak || 0) + 1;
                    }
                    // Else not enough freezes → newStreak stays 1 (reset)
                }
            }
        }
        
        // Calculate highestStreak
        const currentHighestStreak = user.highestStreak || 0;
        const newHighestStreak = Math.max(currentHighestStreak, newStreak);

        // Update user
        // Prepare update operation
        const updateOp: any = {
            $set: {
                streak: newStreak,
                highestStreak: newHighestStreak,
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

        // Monthly streak bonus: +1 freeze every 30 consecutive days (max 5)
        const currentFreezeCount = user.freezeCount ?? 5;
        if (newStreak > 0 && newStreak % 30 === 0 && currentFreezeCount < 5) {
            if (!updateOp.$inc) updateOp.$inc = {};
            updateOp.$inc.freezeCount = 1;
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
