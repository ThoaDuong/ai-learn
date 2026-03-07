import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";

/**
 * Streak login check endpoint
 * Called when user opens the app to:
 * 1. Track login date and active days
 * 2. Return current streak from DB (read-only, cron handles freeze/reset)
 */
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

        const now = new Date();
        const lastLoginDate = user.lastLoginDate ? new Date(user.lastLoginDate) : null;

        let newActiveDays = user.activeDays || 0;
        let shouldUpdate = false;

        if (lastLoginDate) {
            const last = new Date(lastLoginDate);
            last.setHours(0, 0, 0, 0);
            const current = new Date(now);
            current.setHours(0, 0, 0, 0);

            const diffTime = current.getTime() - last.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Increment active days if new day
            if (diffDays >= 1) {
                newActiveDays += 1;
                shouldUpdate = true;
            }
        } else {
            // First login
            newActiveDays = 1;
            shouldUpdate = true;
        }

        if (shouldUpdate || !lastLoginDate) {
            await usersCollection.updateOne(
                { _id: user._id },
                {
                    $set: {
                        lastLoginDate: now,
                        activeDays: newActiveDays,
                        updatedAt: now,
                    },
                }
            );
        }

        // Return current streak from DB (read-only, managed by cron + activity route)
        return NextResponse.json({
            streak: user.streak || 0,
            updated: shouldUpdate,
        });
    } catch (error) {
        console.error("Streak API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
