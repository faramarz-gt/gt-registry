import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  console.log(`🔗 Magic link clicked: ${email}, token: ${token?.substring(0, 8)}...`);

  if (!token || !email) {
    console.log("❌ Missing token or email parameters");
    return NextResponse.redirect(
      new URL("/auth/error?error=MissingParameters", request.url)
    );
  }

  try {
    // Redirect to our magic link page with the token and email
    const magicLinkUrl = new URL("/auth/magic-link", request.url);
    magicLinkUrl.searchParams.set("token", token);
    magicLinkUrl.searchParams.set("email", email);
    magicLinkUrl.searchParams.set("callbackUrl", callbackUrl);
    
    console.log(`🔄 Redirecting to magic link page: ${magicLinkUrl.pathname}`);
    return NextResponse.redirect(magicLinkUrl);
    
  } catch (error) {
    console.error("❌ Error in verify-email route:", error);
    return NextResponse.redirect(
      new URL("/auth/error?error=VerificationFailed", request.url)
    );
  }
} 