"use client";

import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function AuthTestPage() {
  const { data: session, status } = useSession();

  const envVars = [
    { name: "NEXTAUTH_SECRET", value: process.env.NEXTAUTH_SECRET ? "✓ Set" : "✗ Missing" },
    { name: "NEXTAUTH_URL", value: process.env.NEXTAUTH_URL ? "✓ Set" : "✗ Missing" },
    { name: "KV_REST_API_URL", value: process.env.KV_REST_API_URL ? "✓ Set" : "✗ Missing" },
    { name: "KV_REST_API_TOKEN", value: process.env.KV_REST_API_TOKEN ? "✓ Set" : "✗ Missing" },
    { name: "ZAPIER_WEBHOOK_URL", value: process.env.ZAPIER_WEBHOOK_URL ? "✓ Set" : "✗ Missing" },
    { name: "EMAIL_FROM", value: process.env.EMAIL_FROM ? "✓ Set" : "✗ Optional" },
  ];

  return (
    <div className="container max-w-4xl p-6 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Authentication Test & Debug</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Session Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {status === "authenticated" ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : status === "unauthenticated" ? (
                <XCircle className="h-5 w-5 text-red-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-yellow-600" />
              )}
              Session Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Status:</span>
                <Badge variant={
                  status === "authenticated" ? "default" : 
                  status === "unauthenticated" ? "destructive" : 
                  "secondary"
                }>
                  {status}
                </Badge>
              </div>
              {session?.user?.email && (
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="text-sm">{session.user.email}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Environment Variables Check */}
        <Card>
          <CardHeader>
            <CardTitle>Environment Variables</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              {envVars.map((env) => (
                <div key={env.name} className="flex justify-between">
                  <span>{env.name}:</span>
                  <span className={env.value.includes("✓") ? "text-green-600" : "text-red-600"}>
                    {env.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Debug Information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Debug Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <strong>Current URL:</strong> {typeof window !== "undefined" ? window.location.href : "N/A"}
              </div>
              
              <div>
                <strong>NextAuth URL:</strong> {process.env.NEXTAUTH_URL || "Not set"}
              </div>
              
              <div>
                <strong>User Agent:</strong> {typeof navigator !== "undefined" ? navigator.userAgent : "N/A"}
              </div>
              
              {session && (
                <div>
                  <strong>Session Data:</strong>
                  <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-auto">
                    {JSON.stringify(session, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">🚀 KV + Zapier Setup Steps:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>1. Create Vercel KV database in your Vercel dashboard</li>
          <li>2. Connect KV database to your project (auto-adds KV env vars)</li>
          <li>3. Set up Zapier webhook at zapier.com</li>
          <li>4. Add ZAPIER_WEBHOOK_URL to your environment variables</li>
          <li>5. Configure Zapier to send emails (Gmail or Email by Zapier)</li>
          <li>6. Test your Zapier webhook before going live</li>
        </ul>
      </div>
      
      <div className="mt-4 p-4 bg-green-50 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">✅ Lightweight Auth Benefits:</h3>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• No SMTP complexity - Zapier handles email delivery</li>
          <li>• Vercel KV for secure token storage</li>
          <li>• No external database required</li>
          <li>• Perfect for serverless environment</li>
          <li>• Custom email templates via Zapier</li>
          <li>• One-time use tokens with 24h expiry</li>
        </ul>
      </div>
    </div>
  );
} 