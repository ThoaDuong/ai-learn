import { NextRequest, NextResponse } from "next/server";
import { checkGrammar } from "@/lib/gemini";

export async function POST(request: NextRequest) {
    try {
        if (!process.env.GEMINI_API_KEY) {
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

        const result = await checkGrammar(text);
        return NextResponse.json(result);
    } catch (error) {
        const err = error as Error;
        console.error("Grammar check error:", err.message);

        if (err.message === "RATE_LIMIT") {
            return NextResponse.json(
                { error: "Đã vượt quá giới hạn yêu cầu. Vui lòng chờ vài giây và thử lại." },
                { status: 429 }
            );
        }

        return NextResponse.json(
            { error: `Error: ${err.message}` },
            { status: 500 }
        );
    }
}
