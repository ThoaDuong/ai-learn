import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// POST: Delete multiple vocabularies
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
        const { ids } = body;

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

        // Delete all vocabularies that belong to the user
        const result = await vocabularyCollection.deleteMany({
            _id: { $in: validIds.map((id: string) => new ObjectId(id)) },
            userId: user._id,
        });

        return NextResponse.json({
            success: true,
            deletedCount: result.deletedCount,
            message: `${result.deletedCount} vocabulary item(s) deleted successfully`,
        });
    } catch (error) {
        console.error("Bulk delete vocabulary error:", error);
        return NextResponse.json(
            { error: "Failed to delete vocabularies" },
            { status: 500 }
        );
    }
}
