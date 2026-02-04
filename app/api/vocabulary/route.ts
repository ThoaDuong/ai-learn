import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { SaveVocabularyRequest } from "@/types";
import { ObjectId } from "mongodb";

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized. Please login first." },
                { status: 401 }
            );
        }

        const body: SaveVocabularyRequest = await request.json();
        const { word, meaning, partOfSpeech, level, phonetic, example, exampleTranslation, groupId } = body;

        if (!word || !meaning) {
            return NextResponse.json(
                { error: "Word and meaning are required" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");
        const vocabularyCollection = db.collection("vocabularies");
        const groupsCollection = db.collection("vocabularyGroups");

        // Find user by googleId
        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Check if word already exists for this user
        const existingWord = await vocabularyCollection.findOne({
            userId: user._id,
            word: word.toLowerCase(),
        });

        if (existingWord) {
            return NextResponse.json(
                { error: "This word is already saved" },
                { status: 409 }
            );
        }

        // Get or create default group if no groupId provided
        let finalGroupId: ObjectId | undefined;
        if (groupId) {
            finalGroupId = new ObjectId(groupId);
        } else {
            // Find or create default group
            let defaultGroup = await groupsCollection.findOne({
                userId: user._id,
                isDefault: true,
            });

            if (!defaultGroup) {
                const result = await groupsCollection.insertOne({
                    userId: user._id,
                    name: "My Voca",
                    isDefault: true,
                    createdAt: new Date(),
                });
                finalGroupId = result.insertedId;
            } else {
                finalGroupId = defaultGroup._id;
            }
        }

        // Save vocabulary
        const result = await vocabularyCollection.insertOne({
            userId: user._id,
            groupId: finalGroupId,
            word: word.toLowerCase(),
            meaning,
            partOfSpeech,
            level,
            phonetic,
            example,
            exampleTranslation,
            createdAt: new Date(),
        });

        return NextResponse.json({
            success: true,
            id: result.insertedId,
            message: "Vocabulary saved successfully",
        });
    } catch (error) {
        console.error("Save vocabulary error:", error);
        return NextResponse.json(
            { error: "Failed to save vocabulary" },
            { status: 500 }
        );
    }
}

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
        const vocabularyCollection = db.collection("vocabularies");

        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json({ vocabularies: [] });
        }

        const vocabularies = await vocabularyCollection
            .find({ userId: user._id })
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json({ vocabularies });
    } catch (error) {
        console.error("Get vocabulary error:", error);
        return NextResponse.json(
            { error: "Failed to get vocabularies" },
            { status: 500 }
        );
    }
}
