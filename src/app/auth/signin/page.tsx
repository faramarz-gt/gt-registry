"use client";

import { signIn, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";
import { Mail, CheckCircle, ArrowLeft } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is already signed in
    getSession().then((session) => {
      if (session) {
        router.push("/");
      }
    });
  }, [router]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.endsWith("@gtreasury.com");
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please use your @gtreasury.com email address");
      return;
    }

    setLoading(true);
    try {
      const result = await signIn("email-magic-link", { 
        email, 
        redirect: false,
        callbackUrl: "/" 
      });
      
      if (result?.error) {
        setError("Failed to send email. Please try again.");
      } else {
        setEmailSent(true);
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 min-h-screen">
        {/* Left Panel - Same as main design */}
        <div className="relative hidden h-full flex-col bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 p-10 text-foreground lg:flex dark:border-r">
          <div className="relative z-20 flex items-center font-medium text-lg">
            <Logo />
          </div>

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;The GTreasury Design System Registry streamlines our development process and ensures consistent, beautiful user experiences across all our applications.&rdquo;
              </p>
              <footer className="text-sm text-muted-foreground">
                GTreasury Engineering Team
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Right Panel - Email Sent Success */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-4 text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="font-semibold text-2xl tracking-tight">
                Check Your Email
              </h1>
              <p className="text-muted-foreground text-sm">
                We've sent a secure magic link to <strong>{email}</strong>
              </p>
            </div>

            <div className="grid gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border">
                <p className="text-sm text-muted-foreground text-center">
                  Click the link in your email to securely sign in to the GTreasury Design System Registry.
                  The link will expire in 24 hours for security.
                </p>
              </div>

              <Button
                onClick={() => {
                  setEmailSent(false);
                  setEmail("");
                }}
                variant="outline"
                className="w-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Try Different Email
              </Button>
            </div>

            <p className="px-8 text-center text-muted-foreground text-xs">
              Didn't receive the email? Check your spam folder or contact your system administrator.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 min-h-screen">
      {/* Left Panel - Branding */}
      <div className="relative hidden h-full flex-col bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 p-10 text-foreground lg:flex dark:border-r">
        <div className="relative z-20 flex items-center font-medium text-lg">
          <Logo />
        </div>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;The GTreasury Design System Registry streamlines our development process and ensures consistent, beautiful user experiences across all our applications.&rdquo;
            </p>
            <footer className="text-sm text-muted-foreground">
              GTreasury Engineering Team
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">
              Welcome to GTreasury
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter your GTreasury email to access the Design System Registry
            </p>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.name@gtreasury.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                  className="text-base"
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                {loading ? "Sending Magic Link..." : "Send Magic Link"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Secure Authentication
                </span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 border">
              <div className="space-y-2 text-center">
                <h3 className="text-sm font-medium">How it works</h3>
                <p className="text-xs text-muted-foreground">
                  We'll send you a secure link that logs you in instantly. No passwords required.
                </p>
              </div>
            </div>
          </div>

          <p className="px-8 text-center text-muted-foreground text-xs">
            Access is restricted to GTreasury team members with @gtreasury.com email addresses.
            Need help? Contact your system administrator.
          </p>
        </div>
      </div>
    </div>
  );
} 