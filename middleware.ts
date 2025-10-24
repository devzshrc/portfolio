import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getSessionFromCookie } from "@/lib/auth"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    // Allow login page without authentication
    if (pathname === "/admin/login") {
      return NextResponse.next()
    }

    // Check for session cookie
    const sessionCookie = request.cookies.get("admin_session")?.value
    const session = getSessionFromCookie(sessionCookie)

    if (!session?.isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
