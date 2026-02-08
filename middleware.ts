import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify } from "./lib/auth";

/**
 * Middleware to protect admin routes.
 * Redirects to /admin/login if no valid session is found.
 */
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only run on admin routes, but skip the login page itself
    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
        const session = request.cookies.get("admin_session")?.value;
        const verified = session ? await verify(session) : null;

        if (!verified) {
            const url = request.nextUrl.clone();
            url.pathname = "/admin/login";
            return NextResponse.redirect(url);
        }
    }

    // Protect API upload/delete routes
    if (pathname.startsWith("/api/admin")) {
        const session = request.cookies.get("admin_session")?.value;
        const verified = session ? await verify(session) : null;

        if (!verified) {
            return new NextResponse(
                JSON.stringify({ success: false, message: "Unauthorized" }),
                { status: 401, headers: { "content-type": "application/json" } }
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/api/admin/:path*"],
};
