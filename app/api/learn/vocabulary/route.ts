import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Admin user ID for guest mode B2 vocabulary
const ADMIN_USER_ID = new ObjectId("000000000000000000000001");

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const groupId = searchParams.get("groupId");

        const db = await getDatabase();
        const vocabularyCollection = db.collection("vocabularies");

        // Check if user is logged in
        const session = await getServerSession(authOptions);

        if (session?.user && groupId) {
            // User mode: Get vocabulary from specific group
            const usersCollection = db.collection("users");
            const googleId = (session.user as { googleId?: string }).googleId;
            const user = await usersCollection.findOne({ googleId });

            if (!user) {
                return NextResponse.json(
                    { error: "User not found" },
                    { status: 404 }
                );
            }

            const vocabularies = await vocabularyCollection
                .find({
                    userId: user._id,
                    groupId: new ObjectId(groupId)
                })
                .toArray();

            // Shuffle vocabulary for learning
            const shuffled = vocabularies.sort(() => Math.random() - 0.5);

            return NextResponse.json({
                vocabularies: shuffled,
                mode: "user",
                total: shuffled.length
            });
        } else {
            // Guest mode: Get B2 vocabulary (admin-owned)
            const vocabularies = await vocabularyCollection
                .find({
                    userId: ADMIN_USER_ID,
                    level: "B2"
                })
                .toArray();

            // Shuffle vocabulary for learning
            const shuffled = vocabularies.sort(() => Math.random() - 0.5);

            return NextResponse.json({
                vocabularies: shuffled,
                mode: "guest",
                total: shuffled.length
            });
        }
    } catch (error) {
        console.error("Get learning vocabulary error:", error);
        return NextResponse.json(
            { error: "Failed to get vocabulary for learning" },
            { status: 500 }
        );
    }
}
