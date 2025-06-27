import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { authOptions } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  if (!token || !email) {
    return NextResponse.redirect(
      new URL("/auth/error?error=MissingParameters", request.url)
    );
  }

  try {
    // Use the credentials provider to verify the token
    const result = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/callback/credentials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: email,
        token: token,
        redirect: "false",
        json: "true",
      }).toString(),
    });

    if (result.ok) {
      // Token is valid, redirect to sign-in with the magic link credentials
      const signInUrl = new URL("/api/auth/signin/email-magic-link", request.url);
      signInUrl.searchParams.set("email", email);
      signInUrl.searchParams.set("token", token);
      signInUrl.searchParams.set("callbackUrl", callbackUrl);
      
      return NextResponse.redirect(signInUrl);
    } else {
      // Token verification failed
      return NextResponse.redirect(
        new URL("/auth/error?error=InvalidToken", request.url)
      );
    }
  } catch (error) {
    console.error("Error verifying email token:", error);
    return NextResponse.redirect(
      new URL("/auth/error?error=VerificationFailed", request.url)
    );
  }
} 