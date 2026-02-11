import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// POST: Update group for multiple vocabularies
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
        const { ids, groupId } = body;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return NextResponse.json(
                { error: "No vocabulary IDs provided" },
                { status: 400 }
            );
        }

        // Validate all IDs
        const validIds = ids.filter((id: string) => ObjectId.isValid(id));
        if (validIds.length === 0) {
            return NextResponse.json(
                { error: "No valid vocabulary IDs provided" },
                { status: 400 }
            );
        }

        // Validate groupId is required
        if (!groupId || !ObjectId.isValid(groupId)) {
            return NextResponse.json(
                { error: "Invalid group ID" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const usersCollection = db.collection("users");
        const vocabularyCollection = db.collection("userVocabularies");
        const groupsCollection = db.collection("vocabularyGroups");

        const googleId = (session.user as { googleId?: string }).googleId;
        const user = await usersCollection.findOne({ googleId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // If groupId is provided, verify the group exists and belongs to user
        if (groupId) {
            const group = await groupsCollection.findOne({
                _id: new ObjectId(groupId),
                userId: user._id,
            });

            if (!group) {
                return NextResponse.json(
                    { error: "Group not found" },
                    { status: 404 }
                );
            }
        }

        // Update all vocabularies that belong to the user
        const result = await vocabularyCollection.updateMany(
            {
                _id: { $in: validIds.map((id: string) => new ObjectId(id)) },
                userId: user._id,
            },
            {
                $set: {
                    groupId: groupId,
                    updatedAt: new Date(),
                },
            }
        );

        return NextResponse.json({
            success: true,
            modifiedCount: result.modifiedCount,
            message: `${result.modifiedCount} vocabulary item(s) updated successfully`,
        });
    } catch (error) {
        console.error("Bulk update group error:", error);
        return NextResponse.json(
            { error: "Failed to update vocabularies" },
            { status: 500 }
        );
    }
}
