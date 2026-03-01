import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware to add CORS headers for Chrome extension API access.
 * Chrome extensions send requests from service workers with origin "chrome-extension://..."
 */
export function middleware(request: NextRequest) {
    const origin = request.headers.get("origin") || "";
    const isExtension = origin.startsWith("chrome-extension://");
    const isLocalhost = origin.includes("localhost");

    // Only apply CORS to API routes
    if (request.nextUrl.pathname.startsWith("/api/")) {
        // Handle preflight
        if (request.method === "OPTIONS") {
            const response = new NextResponse(null, { status: 204 });
            if (isExtension || isLocalhost) {
                response.headers.set("Access-Control-Allow-Origin", origin);
                response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
                response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, Cookie");
                response.headers.set("Access-Control-Allow-Credentials", "true");
                response.headers.set("Access-Control-Max-Age", "86400");
            }
            return response;
        }

        // Add CORS to normal responses
        const response = NextResponse.next();
        if (isExtension || isLocalhost) {
            response.headers.set("Access-Control-Allow-Origin", origin);
            response.headers.set("Access-Control-Allow-Credentials", "true");
        }
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
