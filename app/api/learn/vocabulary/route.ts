import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Admin user ID for seeded vocabulary (B1/B2/C1)
const ADMIN_USER_ID = new ObjectId("000000000000000000000001");
const BOX_SIZE = 50;

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const level = searchParams.get("level"); // B1, B2, C1
        const box = searchParams.get("box"); // Box number (1-indexed)
        const groupId = searchParams.get("groupId"); // User's personal group

        const db = await getDatabase();
        const vocabularyCollection = db.collection("vocabularies"); // Admin-seeded words

        // Mode 1: User's personal groups (from userVocabularies)
        if (groupId) {
            const session = await getServerSession(authOptions);
            if (!session?.user) {
                return NextResponse.json(
                    { error: "Please login to access your vocabulary groups" },
                    { status: 401 }
                );
            }

            const usersCollection = db.collection("users");
            const userVocabularyCollection = db.collection("userVocabularies");
            const googleId = (session.user as { googleId?: string }).googleId;
            const user = await usersCollection.findOne({ googleId });

            if (!user) {
                return NextResponse.json(
                    { error: "User not found" },
                    { status: 404 }
                );
            }

            const vocabularies = await userVocabularyCollection
                .find({
                    userId: user._id,
                    groupId: new ObjectId(groupId)
                })
                .toArray();

            const shuffled = vocabularies.sort(() => Math.random() - 0.5);

            return NextResponse.json({
                vocabularies: shuffled,
                mode: "user",
                total: shuffled.length
            });
        }

        // Mode 2: Level + Box — return specific box of words from a level
        if (level && box) {
            const boxNum = parseInt(box);
            if (isNaN(boxNum) || boxNum < 1) {
                return NextResponse.json(
                    { error: "Invalid box number" },
                    { status: 400 }
                );
            }

            const skip = (boxNum - 1) * BOX_SIZE;

            const vocabularies = await vocabularyCollection
                .find({
                    userId: ADMIN_USER_ID,
                    level: level.toUpperCase()
                })
                .sort({ word: 1 }) // Alphabetical order for consistent boxes
                .skip(skip)
                .limit(BOX_SIZE)
                .toArray();

            if (vocabularies.length === 0) {
                return NextResponse.json(
                    { error: "No vocabulary found for this box" },
                    { status: 404 }
                );
            }

            // Shuffle for learning
            const shuffled = vocabularies.sort(() => Math.random() - 0.5);

            return NextResponse.json({
                vocabularies: shuffled,
                mode: "level",
                level: level.toUpperCase(),
                box: boxNum,
                total: shuffled.length
            });
        }

        // Mode 3: Summary — return level stats (for selector UI)
        const levels = ["B1", "B2", "C1"];
        const levelStats = await Promise.all(
            levels.map(async (lvl) => {
                const total = await vocabularyCollection.countDocuments({
                    userId: ADMIN_USER_ID,
                    level: lvl
                });
                return {
                    level: lvl,
                    total,
                    boxes: Math.ceil(total / BOX_SIZE)
                };
            })
        );

        return NextResponse.json({
            levels: levelStats,
            mode: "summary"
        });
    } catch (error) {
        console.error("Get learning vocabulary error:", error);
        return NextResponse.json(
            { error: "Failed to get vocabulary for learning" },
            { status: 500 }
        );
    }
}
