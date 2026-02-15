import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ completed: [] });
        }

        const { searchParams } = new URL(request.url);
        const gameMode = searchParams.get("gameMode");

        const db = await getDatabase();
        const usersCollection = db.collection("users");
        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json({ completed: [] });
        }

        const progressCollection = db.collection("learningProgress");

        const query: Record<string, unknown> = { userId: user._id };
        if (gameMode) {
            query.gameMode = gameMode;
        }

        const progress = await progressCollection
            .find(query)
            .project({ level: 1, box: 1, gameMode: 1, _id: 0 })
            .toArray();

        return NextResponse.json({ completed: progress });
    } catch (error) {
        console.error("Get learning progress error:", error);
        return NextResponse.json(
            { error: "Failed to get learning progress" },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json(
                { error: "Please login to track progress" },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { level, box, gameMode } = body;

        if (!level || box === undefined || !gameMode) {
            return NextResponse.json(
                { error: "Missing required fields: level, box, gameMode" },
                { status: 400 }
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

        const progressCollection = db.collection("learningProgress");

        // Upsert — don't duplicate if already completed
        await progressCollection.updateOne(
            { userId: user._id, level, box, gameMode },
            {
                $set: { completedAt: new Date() },
                $setOnInsert: { userId: user._id, level, box, gameMode }
            },
            { upsert: true }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Save learning progress error:", error);
        return NextResponse.json(
            { error: "Failed to save progress" },
            { status: 500 }
        );
    }
}
