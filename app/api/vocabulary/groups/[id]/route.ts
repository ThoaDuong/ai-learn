import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// PUT: Update group name
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
        const { name } = body;

        if (!name || name.trim() === "") {
            return NextResponse.json(
                { error: "Group name is required" },
                { status: 400 }
            );
        }

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { error: "Invalid group ID" },
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

        // Check if group exists and belongs to user
        const group = await groupsCollection.findOne({
            _id: new ObjectId(id),
            userId: user._id,
        });

        if (!group) {
            return NextResponse.json(
                { error: "Group not found" },
                { status: 404 }
            );
        }

        // Check if new name already exists (excluding current group)
        const existingGroup = await groupsCollection.findOne({
            userId: user._id,
            name: name.trim(),
            _id: { $ne: new ObjectId(id) },
        });

        if (existingGroup) {
            return NextResponse.json(
                { error: "Group name already exists" },
                { status: 409 }
            );
        }

        await groupsCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { name: name.trim() } }
        );

        return NextResponse.json({
            success: true,
            message: "Group updated successfully",
        });
    } catch (error) {
        console.error("Update group error:", error);
        return NextResponse.json(
            { error: "Failed to update group" },
            { status: 500 }
        );
    }
}

// DELETE: Delete group (only if empty)
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
                { error: "Invalid group ID" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");
        const groupsCollection = db.collection("vocabularyGroups");
        const vocabularyCollection = db.collection("vocabularies");

        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Check if group exists and belongs to user
        const group = await groupsCollection.findOne({
            _id: new ObjectId(id),
            userId: user._id,
        });

        if (!group) {
            return NextResponse.json(
                { error: "Group not found" },
                { status: 404 }
            );
        }

        // Cannot delete default group
        if (group.isDefault) {
            return NextResponse.json(
                { error: "Cannot delete the default group" },
                { status: 400 }
            );
        }

        // Check if group has vocabularies
        const vocabularyCount = await vocabularyCollection.countDocuments({
            userId: user._id,
            groupId: new ObjectId(id),
        });

        if (vocabularyCount > 0) {
            return NextResponse.json(
                { error: `Cannot delete group. It contains ${vocabularyCount} vocabulary item(s). Please move or delete them first.` },
                { status: 400 }
            );
        }

        await groupsCollection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({
            success: true,
            message: "Group deleted successfully",
        });
    } catch (error) {
        console.error("Delete group error:", error);
        return NextResponse.json(
            { error: "Failed to delete group" },
            { status: 500 }
        );
    }
}
