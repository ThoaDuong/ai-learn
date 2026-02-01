import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// PUT: Update vocabulary
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { id } = await params;
        const body = await request.json();
        const { word, meaning, partOfSpeech, level, phonetic, example, exampleTranslation, groupId } = body;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { error: "Invalid vocabulary ID" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");
        const vocabularyCollection = db.collection("vocabularies");

        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Check if vocabulary exists and belongs to user
        const vocabulary = await vocabularyCollection.findOne({
            _id: new ObjectId(id),
            userId: user._id,
        });

        if (!vocabulary) {
            return NextResponse.json(
                { error: "Vocabulary not found" },
                { status: 404 }
            );
        }

        const updateData: Record<string, unknown> = {};
        if (word !== undefined) updateData.word = word.toLowerCase();
        if (meaning !== undefined) updateData.meaning = meaning;
        if (partOfSpeech !== undefined) updateData.partOfSpeech = partOfSpeech;
        if (level !== undefined) updateData.level = level;
        if (phonetic !== undefined) updateData.phonetic = phonetic;
        if (example !== undefined) updateData.example = example;
        if (exampleTranslation !== undefined) updateData.exampleTranslation = exampleTranslation;
        if (groupId !== undefined) {
            updateData.groupId = groupId ? new ObjectId(groupId) : null;
        }

        await vocabularyCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );

        return NextResponse.json({
            success: true,
            message: "Vocabulary updated successfully",
        });
    } catch (error) {
        console.error("Update vocabulary error:", error);
        return NextResponse.json(
            { error: "Failed to update vocabulary" },
            { status: 500 }
        );
    }
}

// DELETE: Delete vocabulary
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { id } = await params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { error: "Invalid vocabulary ID" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");
        const vocabularyCollection = db.collection("vocabularies");

        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Check if vocabulary exists and belongs to user
        const vocabulary = await vocabularyCollection.findOne({
            _id: new ObjectId(id),
            userId: user._id,
        });

        if (!vocabulary) {
            return NextResponse.json(
                { error: "Vocabulary not found" },
                { status: 404 }
            );
        }

        await vocabularyCollection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({
            success: true,
            message: "Vocabulary deleted successfully",
        });
    } catch (error) {
        console.error("Delete vocabulary error:", error);
        return NextResponse.json(
            { error: "Failed to delete vocabulary" },
            { status: 500 }
        );
    }
}
