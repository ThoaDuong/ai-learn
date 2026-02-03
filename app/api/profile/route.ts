import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");

        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            profile: {
                name: user.name,
                email: user.email,
                image: user.image,
                googleImage: user.googleImage,
            },
            stats: {
                joinDate: user.createdAt,
                activeDays: user.activeDays || 1,
                activeTime: user.activeMinutes ? Math.round(user.activeMinutes / 60) : 0,
                currentStreak: user.streak || 0,
            },
            weeklyActivity: (() => {
                const activity = [];
                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                const today = new Date();

                for (let i = 6; i >= 0; i--) {
                    const d = new Date(today);
                    d.setDate(d.getDate() - i);
                    const dateStr = d.toISOString().split('T')[0];

                    const dayLog = user.activityLog?.find((log: any) =>
                        new Date(log.date).toISOString().split('T')[0] === dateStr
                    );

                    activity.push({
                        day: days[d.getDay()],
                        hours: dayLog ? Number((dayLog.minutes / 60).toFixed(1)) : 0,
                    });
                }
                return activity;
            })(),
        });
    } catch (error) {
        console.error("Get profile error:", error);
        return NextResponse.json(
            { error: "Failed to get profile" },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { name, image } = body;

        if (!name && !image) {
            return NextResponse.json(
                { error: "Name or image is required" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");

        const googleId = (session.user as { googleId?: string }).googleId;

        const updateData: { name?: string; image?: string; updatedAt: Date } = {
            updatedAt: new Date(),
        };

        if (name) updateData.name = name;
        if (image) updateData.image = image;

        const result = await usersCollection.updateOne(
            { googleId },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Profile updated successfully",
        });
    } catch (error) {
        console.error("Update profile error:", error);
        return NextResponse.json(
            { error: "Failed to update profile" },
            { status: 500 }
        );
    }
}
