import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import crypto from "crypto";

/**
 * Public unsubscribe endpoint (no auth required — called from email link)
 * GET /api/notifications/unsubscribe?email=xxx&token=xxx
 * 
 * Token = HMAC-SHA256(email, UNSUBSCRIBE_SECRET) to prevent abuse
 */
export async function GET(request: NextRequest) {
    const email = request.nextUrl.searchParams.get("email");
    const token = request.nextUrl.searchParams.get("token");

    if (!email || !token) {
        return new NextResponse(renderPage("Invalid Link", "The unsubscribe link is invalid or expired.", false), {
            status: 400,
            headers: { "Content-Type": "text/html" },
        });
    }

    // Verify HMAC token
    const secret = process.env.UNSUBSCRIBE_SECRET || process.env.CRON_SECRET || "fallback-secret";
    const expectedToken = crypto
        .createHmac("sha256", secret)
        .update(email)
        .digest("hex");

    if (token !== expectedToken) {
        return new NextResponse(renderPage("Invalid Link", "The unsubscribe link is invalid or expired.", false), {
            status: 403,
            headers: { "Content-Type": "text/html" },
        });
    }

    try {
        const db = await getDatabase();
        const usersCollection = db.collection("users");

        const result = await usersCollection.updateOne(
            { email },
            { $set: { emailNotifications: false, updatedAt: new Date() } }
        );

        if (result.matchedCount === 0) {
            return new NextResponse(renderPage("User Not Found", "We couldn't find an account with this email.", false), {
                status: 404,
                headers: { "Content-Type": "text/html" },
            });
        }

        return new NextResponse(
            renderPage(
                "Unsubscribed Successfully",
                "You will no longer receive email notifications from TLearn. You can re-enable them anytime in your profile settings.",
                true
            ),
            { status: 200, headers: { "Content-Type": "text/html" } }
        );
    } catch (error) {
        console.error("Unsubscribe error:", error);
        return new NextResponse(renderPage("Something went wrong", "Please try again later.", false), {
            status: 500,
            headers: { "Content-Type": "text/html" },
        });
    }
}

function renderPage(title: string, message: string, success: boolean): string {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const icon = success ? "✅" : "❌";
    const color = success ? "#16a34a" : "#dc2626";

    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} — TLearn</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; display: flex; align-items: center; justify-content: center; min-height: 100vh;">
    <div style="max-width: 480px; margin: 0 auto; background-color: white; padding: 48px 40px; border-radius: 20px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
        <div style="font-size: 48px; margin-bottom: 20px;">${icon}</div>
        <h1 style="color: ${color}; font-size: 22px; margin: 0 0 12px 0;">${title}</h1>
        <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin: 0 0 28px 0;">${message}</p>
        <a href="${appUrl}/profile" 
           style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: 600; font-size: 14px;">
            Go to Profile
        </a>
    </div>
</body>
</html>`;
}
