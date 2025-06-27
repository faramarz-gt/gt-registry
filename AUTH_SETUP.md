# Serverless Email Authentication with Zapier + Vercel KV

This guide will help you set up serverless email magic link authentication for your GTreasury Design System Registry using **Zapier webhooks** and **Vercel KV** for token storage.

## Overview

The authentication system restricts access to GTreasury team members only. Users sign in using their @gtreasury.com email address and receive a magic link via Zapier's email automation.

**Why This Approach is Perfect:**
- ✅ **Serverless-first**: Perfect for Vercel deployment
- ✅ **Zapier email automation**: Reliable email delivery with custom templates
- ✅ **Vercel KV storage**: Fast Redis-based token storage
- ✅ **Custom email templates**: Full control over email design via Zapier
- ✅ **Domain validation**: Only @gtreasury.com emails allowed
- ✅ **Secure token management**: Encrypted tokens with automatic expiration

## Quick Setup (10 minutes)

### 1. Set Up Vercel KV Database

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage** → **Create Database**
3. Select **KV** (Redis)
4. Name it: `registry-tokens`
5. Copy the environment variables provided

### 2. Set Up Zapier Webhook

1. Create a [Zapier](https://zapier.com) account
2. Create a new Zap:
   - **Trigger**: Webhooks by Zapier → Catch Hook
   - **Action**: Email by Zapier → Send Outbound Email
3. Configure the email template in Zapier (see template below)
4. Copy the webhook URL from Zapier

### 3. Environment Variables

Add these to your Vercel project:

```bash
# NextAuth Configuration
NEXTAUTH_SECRET=jrb2kAbtsofcLNF3DrORXzf/I9C49W54/Ng67Rhd+Lw=
NEXTAUTH_URL=https://your-project.vercel.app

# Zapier Configuration
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/

# Vercel KV Configuration (from your KV database)
KV_URL=redis://...
KV_REST_API_URL=https://...
KV_REST_API_TOKEN=...
KV_REST_API_READ_ONLY_TOKEN=...
```

### 4. Deploy to Vercel

```bash
# Deploy with all environment variables set
vercel --prod
```

**That's it!** Your authentication is ready. 🎉

## How It Works

1. **User enters email** → System validates @gtreasury.com domain
2. **Token generated** → Secure token stored in Vercel KV with 24h expiration
3. **Zapier webhook called** → Email automation sends magic link
4. **User clicks link** → Token verified and user authenticated
5. **Access granted** → Full registry access for team members

## Zapier Email Template

Configure your Zapier email action with these settings:

### Email Settings
- **To**: `{{email}}` (from webhook data)
- **Subject**: `{{subject}}` (from webhook data)
- **From**: `GTreasury Registry <noreply@gtreasury.com>`

### Email Body (HTML)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GTreasury Registry Sign In</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #333; margin: 0; font-size: 24px;">GTreasury Design System Registry</h1>
        <p style="color: #666; margin: 10px 0 0 0;">Access your design system components</p>
    </div>
    
    <div style="background: #f8f9fa; padding: 30px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0 0 20px 0; color: #333; font-size: 16px;">
            Click the button below to sign in to the GTreasury Design System Registry:
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="{{link}}" 
               style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                      color: white; 
                      padding: 14px 28px; 
                      text-decoration: none; 
                      border-radius: 6px; 
                      display: inline-block; 
                      font-weight: 600;
                      font-size: 16px;">
                Sign In to Registry
            </a>
        </div>
        
        <p style="margin: 20px 0 0 0; color: #666; font-size: 14px;">
            This link will expire in 24 hours for security purposes.
        </p>
    </div>
    
    <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
        <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
            GTreasury Design System Registry<br>
            This is an automated message, please do not reply to this email.
        </p>
        <p style="color: #999; font-size: 12px; text-align: center; margin: 10px 0 0 0;">
            If you did not request this sign-in, please ignore this email.
        </p>
    </div>
</body>
</html>
```

## User Experience

### Sign-In Flow
```
📧 Enter email → 🔒 Token generated → ⚡ Zapier webhook → ✉️ Email sent → 🔗 Click link → ✅ Access granted
```

### What Users See
1. **Clean sign-in form** with email input
2. **Professional email** with GTreasury branding
3. **One-click authentication** via magic link
4. **Immediate access** to the design system

## Security Features

- **Domain restriction**: Only @gtreasury.com emails accepted
- **Encrypted tokens**: SHA-256 hashed tokens in KV storage
- **Token expiration**: 24-hour automatic expiration
- **One-time use**: Tokens deleted after successful authentication
- **Route protection**: Middleware guards all pages
- **Session management**: Secure NextAuth.js sessions
- **HTTPS enforcement**: Production security

## Vercel Environment Variables

In your Vercel dashboard (**Settings** → **Environment Variables**):

| Variable | Value | Required |
|----------|-------|----------|
| `NEXTAUTH_SECRET` | Generated secret | ✅ |
| `NEXTAUTH_URL` | Your Vercel URL | ✅ |
| `ZAPIER_WEBHOOK_URL` | Zapier webhook URL | ✅ |
| `KV_URL` | From Vercel KV dashboard | ✅ |
| `KV_REST_API_URL` | From Vercel KV dashboard | ✅ |
| `KV_REST_API_TOKEN` | From Vercel KV dashboard | ✅ |
| `KV_REST_API_READ_ONLY_TOKEN` | From Vercel KV dashboard | ✅ |

## Testing

### Local Development
```bash
# Copy KV variables to .env.local
# Set NEXTAUTH_URL=http://localhost:3000
# Test with your @gtreasury.com email
```

### Production Testing
1. Deploy to Vercel with all environment variables
2. Test sign-in with your @gtreasury.com email
3. Check Zapier task history for email delivery
4. Verify Vercel KV storage in dashboard
5. Confirm magic link authentication works

## Monitoring & Analytics

### Zapier Dashboard
- **Task History**: See all email sends and their status
- **Usage**: Monitor your monthly task limits
- **Logs**: Debug any webhook or email issues

### Vercel KV Dashboard
- **Data Browser**: View stored tokens
- **Metrics**: Monitor storage usage and performance
- **Logs**: Debug token storage and retrieval

### Vercel Function Logs
- Authentication attempts and results
- Token generation and verification
- Email sending success/failure

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Email not received** | Check Zapier task history, verify webhook URL |
| **"Access Denied"** | Ensure email ends with @gtreasury.com |
| **"Invalid Token"** | Token may be expired (24h) or already used |
| **Zapier webhook failed** | Verify webhook URL and Zapier account status |
| **KV connection error** | Check Vercel KV environment variables |

### Debug Steps

1. **Check Vercel Function logs**: 
   - Go to Vercel Dashboard → Functions → Select function → Logs

2. **Check Zapier task history**:
   - Go to Zapier Dashboard → Task History

3. **Check Vercel KV data**:
   - Go to Vercel Dashboard → Storage → Your KV database → Data Browser

4. **Test components individually**:
   - Test token generation (check KV storage)
   - Test Zapier webhook (manual trigger)
   - Test token verification (check logs)

### Advanced Debugging

#### Token Issues
```bash
# Check if tokens are being stored in KV
# In Vercel KV Data Browser, look for keys starting with "verification:"
```

#### Email Issues
```bash
# Check Zapier webhook payload
# In Zapier task history, verify the data being sent
```

## Zapier Automation Setup

### Detailed Zapier Configuration

1. **Create New Zap**
2. **Trigger: Webhooks by Zapier**
   - Choose "Catch Hook"
   - Copy the webhook URL

3. **Action: Email by Zapier**
   - Choose "Send Outbound Email"
   - Map the fields:
     - `To`: `email` (from webhook)
     - `Subject`: `subject` (from webhook)
     - `Body`: Use the HTML template above
     - Replace `{{link}}` with `link` from webhook

4. **Test & Publish**
   - Test the Zap with sample data
   - Publish when working correctly

## Advanced Configuration

### Custom Email Templates
- Modify the Zapier email template for different branding
- Add conditional logic for different email types
- Include additional data from the webhook

### Multiple Environments
- Create separate Zapier webhooks for staging/production
- Use different environment variables per deployment
- Test with separate KV databases

### Analytics Integration
- Add UTM parameters to magic links
- Track email open rates in Zapier
- Monitor authentication success rates

## Support

- **Zapier Support**: [zapier.com/help](https://zapier.com/help)
- **Vercel KV Docs**: [vercel.com/docs/storage/vercel-kv](https://vercel.com/docs/storage/vercel-kv)
- **NextAuth.js Docs**: [next-auth.js.org](https://next-auth.js.org)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

**🎉 Your GTreasury Design System Registry is now secured with Zapier email automation and Vercel KV token storage!** 