import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Admin user ID for seeded vocabulary (B1/B2/C1)
const ADMIN_USER_ID = new ObjectId("000000000000000000000001");
const BOX_SIZE = 50;
const MIN_LAST_BOX = 6; // If last box has fewer words, merge into previous box

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
            // Review mode: return ALL words for the level
            if (box === "review") {
                const vocabularies = await vocabularyCollection
                    .find({
                        userId: ADMIN_USER_ID,
                        level: level.toUpperCase()
                    })
                    .sort({ word: 1 })
                    .toArray();

                if (vocabularies.length === 0) {
                    return NextResponse.json(
                        { error: "No vocabulary found for this level" },
                        { status: 404 }
                    );
                }

                const shuffled = vocabularies.sort(() => Math.random() - 0.5);

                return NextResponse.json({
                    vocabularies: shuffled,
                    mode: "level",
                    level: level.toUpperCase(),
                    box: "review",
                    total: shuffled.length
                });
            }

            const boxNum = parseInt(box);
            if (isNaN(boxNum) || boxNum < 1) {
                return NextResponse.json(
                    { error: "Invalid box number" },
                    { status: 400 }
                );
            }

            // Count total words to determine actual box count (with merging)
            const totalWords = await vocabularyCollection.countDocuments({
                userId: ADMIN_USER_ID,
                level: level.toUpperCase()
            });

            const remainder = totalWords % BOX_SIZE;
            const actualBoxes = (remainder > 0 && remainder < MIN_LAST_BOX)
                ? Math.floor(totalWords / BOX_SIZE)
                : Math.ceil(totalWords / BOX_SIZE);

            if (boxNum > actualBoxes) {
                return NextResponse.json(
                    { error: "Box number exceeds available boxes" },
                    { status: 404 }
                );
            }

            const skip = (boxNum - 1) * BOX_SIZE;
            // Last box may include extra words if merged
            const limit = boxNum === actualBoxes
                ? totalWords - skip
                : BOX_SIZE;

            const vocabularies = await vocabularyCollection
                .find({
                    userId: ADMIN_USER_ID,
                    level: level.toUpperCase()
                })
                .sort({ word: 1 }) // Alphabetical order for consistent boxes
                .skip(skip)
                .limit(limit)
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
                const remainder = total % BOX_SIZE;
                const boxes = (remainder > 0 && remainder < MIN_LAST_BOX)
                    ? Math.floor(total / BOX_SIZE)
                    : Math.ceil(total / BOX_SIZE);
                return {
                    level: lvl,
                    total,
                    boxes
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
