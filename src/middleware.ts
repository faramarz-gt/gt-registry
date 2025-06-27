import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // This function runs if user is authenticated
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Check if user has valid token (is authenticated)
        return !!token;
      },
    },
  }
);

// Protect these routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (NextAuth.js API routes)
     * - api/redis-test (Redis test endpoint)
     * - redis-test (Redis test page)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt (static files)
     * - auth/* (auth pages)
     * - public assets and manifest files
     */
    "/((?!api/auth|api/redis-test|redis-test|_next/static|_next/image|favicon.ico|favicon.svg|robots.txt|auth|assets|public|manifest).*)",
  ],
}; 