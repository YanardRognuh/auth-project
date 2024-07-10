import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token");

  // If trying to access login page with valid auth token, redirect to dashboard
  if (authToken && request.nextUrl.pathname === "/LoginPage") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/LoginPage"],
};
