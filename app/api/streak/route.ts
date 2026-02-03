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
        const currentStreak = user.streak || 0;
        const lastLoginDate = user.lastLoginDate ? new Date(user.lastLoginDate) : null;
        const newStreak = calculateStreak(lastLoginDate, currentStreak);
        const now = new Date();

        if (newStreak !== currentStreak || !lastLoginDate ||
            lastLoginDate.toDateString() !== now.toDateString()) {

            // Increment active days if it's a new day
            const newActiveDays = (user.activeDays || 0) + 1;

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
            streak: currentStreak,
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
