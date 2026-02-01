import { NextRequest, NextResponse } from "next/server";
import { analyzeText } from "@/lib/gemini";
import { getDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    try {
        // Check if API key exists
        if (!process.env.GEMINI_API_KEY) {
            console.error("GEMINI_API_KEY is not set");
            return NextResponse.json(
                { error: "Gemini API Key not configured" },
                { status: 500 }
            );
        }

        const body = await request.json();
        const { text } = body;

        if (!text || typeof text !== "string") {
            return NextResponse.json(
                { error: "Text is required" },
                { status: 400 }
            );
        }

        const result = await analyzeText(text);

        // Save valid words to database
        if (result.type === "word") {
            try {
                const db = await getDatabase();
                const collection = db.collection("words");

                // Check if word already exists to avoid duplicates (optional, or upsert)
                // Here we just insert/update with upsert based on word text
                await collection.updateOne(
                    { word: result.word.toLowerCase() },
                    {
                        $set: {
                            ...result,
                            updatedAt: new Date()
                        },
                        $setOnInsert: {
                            createdAt: new Date()
                        }
                    },
                    { upsert: true }
                );
            } catch (dbError) {
                console.error("Error saving to database:", dbError);
                // Don't fail the request if DB save fails, just log it
            }
        }

        return NextResponse.json(result);
    } catch (error) {
        const err = error as Error;
        console.error("Translation error:", err.message);
        console.error("Full error:", err);

        if (err.message === "RATE_LIMIT") {
            return NextResponse.json(
                { error: "Rate limit exceeded. Please try again later." },
                { status: 429 }
            );
        }

        if (err.message.includes("API_KEY")) {
            return NextResponse.json(
                { error: "Invalid Gemini API Key." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: `Error: ${err.message}` },
            { status: 500 }
        );
    }
}

// GET endpoint to check API key status
export async function GET() {
    const hasKey = !!process.env.GEMINI_API_KEY;
    const keyPreview = hasKey
        ? `${process.env.GEMINI_API_KEY?.slice(0, 8)}...`
        : "NOT SET";

    return NextResponse.json({
        status: hasKey ? "configured" : "missing",
        keyPreview,
        message: hasKey
            ? "Gemini API Key configured"
            : "Gemini API Key missing - please add to .env.local"
    });
}
