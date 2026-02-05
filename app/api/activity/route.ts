import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";

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
        const { minutes, date } = body;

        if (!minutes || minutes < 1 || !date) {
            return NextResponse.json(
                { success: false, message: "Invalid data" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");

        const googleId = (session.user as { googleId?: string }).googleId;

        // Find user to check if entry exists
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        const activityDate = new Date(date);

        // Check if activity log exists for this date
        const existingLogIndex = user.activityLog?.findIndex((log: any) => {
            const logDate = new Date(log.date);
            return logDate.toISOString().split('T')[0] === date;
        });

        if (existingLogIndex !== undefined && existingLogIndex !== -1) {
            // Update existing entry
            await usersCollection.updateOne(
                { googleId, "activityLog.date": user.activityLog[existingLogIndex].date },
                {
                    $inc: {
                        "activityLog.$.minutes": minutes,
                        activeMinutes: minutes
                    }
                }
            );
        } else {
            // Add new entry
            await usersCollection.updateOne(
                { googleId },
                {
                    $push: {
                        activityLog: {
                            date: activityDate,
                            minutes: minutes
                        }
                    } as any,
                    $inc: { activeMinutes: minutes }
                }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Activity tracked successfully"
        });

    } catch (error) {
        console.error("Track activity error:", error);
        return NextResponse.json(
            { error: "Failed to track activity" },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { searchParams } = new URL(request.url);
        const startDateStr = searchParams.get("start");

        if (!startDateStr) {
            return NextResponse.json(
                { error: "Start date is required" },
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

        const activity = [];
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const startDate = new Date(startDateStr);

        for (let i = 0; i < 7; i++) {
            const d = new Date(startDate);
            d.setDate(startDate.getDate() + i);
            const dateStr = d.toISOString().split('T')[0];

            const dayLog = user.activityLog?.find((log: any) =>
                new Date(log.date).toISOString().split('T')[0] === dateStr
            );

            activity.push({
                day: days[i],
                fullDate: dateStr, // useful for tooltips if needed
                hours: dayLog ? Number((dayLog.minutes / 60).toFixed(1)) : 0,
            });
        }

        return NextResponse.json({ activity });

    } catch (error) {
        console.error("Get activity error:", error);
        return NextResponse.json(
            { error: "Failed to get activity" },
            { status: 500 }
        );
    }
}
