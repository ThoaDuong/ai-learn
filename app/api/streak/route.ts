import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { calculateStreak } from "@/common/utils/streakUtils";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({
            email: session.user.email,
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Calculate and update streak if needed
        // Check if streak is broken
        const now = new Date();
        const lastLoginDate = user.lastLoginDate ? new Date(user.lastLoginDate) : null;

        let newStreak = user.streak || 0;
        let newActiveDays = user.activeDays || 0;
        let shouldUpdate = false;
        const updateFields: any = {};

        // Calculate days difference
        if (lastLoginDate) {
            // Reset hours to compare dates only
            const last = new Date(lastLoginDate);
            last.setHours(0, 0, 0, 0);
            const current = new Date(now);
            current.setHours(0, 0, 0, 0);

            const diffTime = current.getTime() - last.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 1) {
                // Gap > 1 day, reset streak
                newStreak = 0;
                shouldUpdate = true;
            } else if (diffDays === 1) {
                // Consecutive day: maintain streak (do not increment here, wait for activity)
                // BUT if currentStreak is 0, should we set to 0? Yes.
                // Nothing to change for streak count
            } else if (diffDays === 0) {
                // Same day, no change
            }

            // Increment active days if new day
            if (diffDays >= 1) {
                newActiveDays += 1;
                shouldUpdate = true;
            }
        } else {
            // First login
            newStreak = 0; // Start at 0, wait for activity
            newActiveDays = 1;
            shouldUpdate = true;
        }

        if (shouldUpdate || !lastLoginDate) {
            await usersCollection.updateOne(
                { _id: user._id },
                {
                    $set: {
                        streak: newStreak,
                        lastLoginDate: now,
                        activeDays: newActiveDays,
                        updatedAt: now,
                    },
                }
            );

            return NextResponse.json({
                streak: newStreak,
                updated: true,
            });
        }

        return NextResponse.json({
            streak: newStreak,
            updated: false,
        });
    } catch (error) {
        console.error("Streak API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
