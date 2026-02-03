import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";

// GET: Fetch all vocabulary groups for the user
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
        const minWords = parseInt(searchParams.get("minWords") || "0");

        const db = await getDatabase();
        const usersCollection = db.collection("users");
        const groupsCollection = db.collection("vocabularyGroups");
        const vocabularyCollection = db.collection("vocabularies");

        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json({ groups: [] });
        }

        // Check if default group exists, if not create it
        const defaultGroup = await groupsCollection.findOne({
            userId: user._id,
            isDefault: true,
        });

        if (!defaultGroup) {
            await groupsCollection.insertOne({
                userId: user._id,
                name: "General",
                isDefault: true,
                createdAt: new Date(),
            });
        }

        const groups = await groupsCollection
            .find({ userId: user._id })
            .sort({ isDefault: -1, createdAt: 1 })
            .toArray();

        // Get word count for each group
        const groupsWithCount = await Promise.all(
            groups.map(async (group) => {
                const wordCount = await vocabularyCollection.countDocuments({
                    userId: user._id,
                    groupId: group._id,
                });
                return {
                    ...group,
                    wordCount,
                };
            })
        );

        // Filter by minWords if specified
        const filteredGroups = minWords > 0
            ? groupsWithCount.filter(g => g.wordCount >= minWords)
            : groupsWithCount;

        return NextResponse.json({ groups: filteredGroups });
    } catch (error) {
        console.error("Get groups error:", error);
        return NextResponse.json(
            { error: "Failed to get groups" },
            { status: 500 }
        );
    }
}

// POST: Create a new vocabulary group
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
        const { name } = body;

        if (!name || name.trim() === "") {
            return NextResponse.json(
                { error: "Group name is required" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");
        const groupsCollection = db.collection("vocabularyGroups");

        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Check if group name already exists
        const existingGroup = await groupsCollection.findOne({
            userId: user._id,
            name: name.trim(),
        });

        if (existingGroup) {
            return NextResponse.json(
                { error: "Group name already exists" },
                { status: 409 }
            );
        }

        const result = await groupsCollection.insertOne({
            userId: user._id,
            name: name.trim(),
            isDefault: false,
            createdAt: new Date(),
        });

        return NextResponse.json({
            success: true,
            id: result.insertedId,
            message: "Group created successfully",
        });
    } catch (error) {
        console.error("Create group error:", error);
        return NextResponse.json(
            { error: "Failed to create group" },
            { status: 500 }
        );
    }
}
