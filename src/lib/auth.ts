import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from "redis";
import crypto from "crypto";

// Company domain whitelist
const ALLOWED_DOMAIN = "gtreasury.com";

// Check if email is from allowed domain
const isAllowedEmail = (email: string) => {
  return email.endsWith(`@${ALLOWED_DOMAIN}`);
};

// Initialize Redis client
let redisClient: any = null;

async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.REDIS_URL
    });
    
    redisClient.on('error', (err: any) => {
      console.error('Redis Client Error:', err);
    });
    
    await redisClient.connect();
  }
  return redisClient;
}

// Generate secure verification token
async function generateVerificationToken(email: string): Promise<string> {
  const token = crypto.randomBytes(32).toString('hex');
  const hash = crypto.createHash('sha256').update(token).digest('hex');
  
  try {
    const client = await getRedisClient();
    // Store in Redis with 24 hour expiration
    await client.setEx(`verification:${hash}`, 24 * 60 * 60, email);
    console.log(`🔐 Token stored: verification:${hash}`);
    return token;
  } catch (error) {
    console.error('Failed to store verification token:', error);
    throw error;
  }
}

// Verify token and get email
async function verifyToken(token: string): Promise<string | null> {
  const hash = crypto.createHash('sha256').update(token).digest('hex');
  
  try {
    const client = await getRedisClient();
    const email = await client.get(`verification:${hash}`);
    
    if (email) {
      // Delete token after use (one-time use)
      await client.del(`verification:${hash}`);
      console.log(`✅ Token verified and deleted: verification:${hash}`);
    }
    
    return email;
  } catch (error) {
    console.error('Failed to verify token:', error);
    return null;
  }
}

// Send magic link email via Zapier
async function sendMagicLink(email: string): Promise<void> {
  console.log(`📧 Sending verification email to: ${email}`);
  
  try {
    // Generate and store verification token
    const token = await generateVerificationToken(email);
    
    // Create magic link with our custom verification route
    const magicLink = `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}&email=${encodeURIComponent(email)}&callbackUrl=${encodeURIComponent('/')}`;
    
    // Send to Zapier webhook for email delivery
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
    
    if (!zapierWebhookUrl) {
      console.log("⚠️ ZAPIER_WEBHOOK_URL not configured, skipping email send");
      return;
    }
    
    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        link: magicLink,
        subject: 'Sign in to GTreasury Design System Registry',
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Zapier webhook failed: ${response.status} ${response.statusText}`);
    }
    
    console.log(`✅ Verification email sent successfully to ${email} via Zapier`);
    
  } catch (error) {
    console.error("❌ Error sending verification email:", error);
    throw new Error("Failed to send verification email");
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "email-magic-link",
      name: "Email Magic Link",
      credentials: {
        email: { label: "Email", type: "email" },
        token: { label: "Token", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null;
        }

        // Check if email is from allowed domain
        if (!isAllowedEmail(credentials.email)) {
          console.log("❌ Access denied for email:", credentials.email);
          return null;
        }

        // If token is provided, verify it (magic link flow)
        if (credentials.token) {
          const verifiedEmail = await verifyToken(credentials.token);
          if (verifiedEmail === credentials.email) {
            console.log("✅ Magic link authentication successful:", credentials.email);
            return {
              id: crypto.createHash('sha256').update(credentials.email).digest('hex'),
              email: credentials.email,
              name: credentials.email.split('@')[0],
            };
          }
          console.log("❌ Token verification failed for:", credentials.email);
          return null;
        }

        // If no token, send magic link (initial email submission)
        try {
          await sendMagicLink(credentials.email);
          console.log("📧 Magic link sent to:", credentials.email);
          // Return a special response to indicate email was sent
          return {
            id: "email-sent",
            email: credentials.email,
            name: "Email Sent",
          };
        } catch (error) {
          console.error("❌ Failed to send magic link:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        // Don't allow the "email-sent" user to actually sign in
        if (user?.id === "email-sent") {
          return false;
        }

        // Check if user email is from allowed domain
        if (user?.email && isAllowedEmail(user.email)) {
          return true;
        }

        console.log("❌ Access denied for email:", user?.email);
        return false;
      } catch (error) {
        console.error("❌ Error in signIn callback:", error);
        return false;
      }
    },
    async jwt({ token, user, account }) {
      try {
        if (user?.email && user.id !== "email-sent") {
          token.email = user.email;
          token.sub = user.id;
        }
        return token;
      } catch (error) {
        console.error("❌ Error in jwt callback:", error);
        return token;
      }
    },
    async session({ session, token }) {
      try {
        if (token?.email && session?.user) {
          session.user.email = token.email as string;
          // Add id to session user (extending the default type)
          (session.user as any).id = token.sub as string;
        }
        return session;
      } catch (error) {
        console.error("❌ Error in session callback:", error);
        return session;
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
}; 