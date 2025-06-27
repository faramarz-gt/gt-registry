# Redis Usage Guide

This project now has **node-redis** client integrated alongside the existing Vercel KV setup.

## 🚀 Quick Start

### 1. Environment Variables
Your environment variables have been pulled from Vercel and should include:
- `KV_URL` - Your Vercel KV Redis URL
- `REDIS_URL` - Alternative Redis URL (fallback)

### 2. API Endpoints

#### Test Redis Connection
```bash
# GET request to test Redis operations
curl http://localhost:3001/api/redis-test

# POST request to store data
curl -X POST http://localhost:3001/api/redis-test \
  -H "Content-Type: application/json" \
  -d '{
    "key": "user:123", 
    "value": {"name": "John", "email": "john@gtreasury.com"}, 
    "expireInSeconds": 3600
  }'
```

### 3. Interactive Test Page
Visit the web interface to test Redis operations:
```
http://localhost:3001/redis-test
```

### 4. Test Script
Run the standalone test script:
```bash
node test-node-redis.js
```

## 💻 Code Examples

### Basic Redis Client Setup
```javascript
import { createClient } from 'redis';

const redis = createClient({
  url: process.env.KV_URL || process.env.REDIS_URL
});

await redis.connect();
```

### API Route Example (Next.js App Router)
```javascript
import { createClient } from 'redis';
import { NextResponse } from 'next/server';

const redis = createClient({
  url: process.env.KV_URL || process.env.REDIS_URL
});

export async function POST() {
  await redis.connect();
  
  // Store data
  await redis.set("item", "Hello Redis!");
  
  // Retrieve data
  const result = await redis.get("item");
  
  return NextResponse.json({ result });
}
```

### Common Operations

#### String Operations
```javascript
// Set and get
await redis.set('key', 'value');
const value = await redis.get('key');

// Set with expiration
await redis.setEx('temp_key', 60, 'expires in 60 seconds');

// Multiple set/get
await redis.mSet({'key1': 'value1', 'key2': 'value2'});
const values = await redis.mGet(['key1', 'key2']);
```

#### Hash Operations
```javascript
// Set hash fields
await redis.hSet('user:123', {
  name: 'John Doe',
  email: 'john@gtreasury.com',
  role: 'admin'
});

// Get all hash fields
const user = await redis.hGetAll('user:123');

// Get specific field
const email = await redis.hGet('user:123', 'email');
```

#### List Operations
```javascript
// Push to list
await redis.lPush('logs', 'New log entry');

// Get list range
const logs = await redis.lRange('logs', 0, -1); // Get all

// Pop from list
const latest = await redis.lPop('logs');
```

## 🔧 Integration with Authentication

The existing auth system uses Vercel KV, but you can now use node-redis for additional features:

```javascript
// Store user session data
await redis.hSet(`session:${userId}`, {
  email: user.email,
  lastLogin: new Date().toISOString(),
  permissions: JSON.stringify(user.permissions)
});

// Set session expiration
await redis.expire(`session:${userId}`, 24 * 60 * 60); // 24 hours
```

## 📊 Monitoring & Debugging

### Connection Status
```javascript
const isConnected = redis.isReady;
console.log('Redis connected:', isConnected);
```

### Error Handling
```javascript
redis.on('error', (err) => {
  console.error('Redis error:', err);
});

redis.on('connect', () => {
  console.log('Connected to Redis');
});
```

## 🛠️ Files Created

- `src/app/api/redis-test/route.ts` - API endpoints for testing Redis
- `src/app/redis-test/page.tsx` - Interactive web interface for testing
- `test-node-redis.js` - Standalone test script
- `REDIS_USAGE.md` - This usage guide

## 🚀 Production Considerations

### Connection Pooling
For production, consider connection pooling:
```javascript
const redis = createClient({
  url: process.env.KV_URL,
  socket: {
    tls: true,
    rejectUnauthorized: false
  },
  // Connection pool settings
  lazyConnect: true
});
```

### Error Recovery
```javascript
redis.on('error', (err) => {
  console.error('Redis Client Error', err);
});

redis.on('reconnecting', () => {
  console.log('Redis Client Reconnecting');
});
```

### Graceful Shutdown
```javascript
process.on('SIGINT', async () => {
  await redis.quit();
  process.exit(0);
});
```

## 📚 Resources

- [node-redis Documentation](https://github.com/redis/node-redis)
- [Redis Commands Reference](https://redis.io/commands)
- [Vercel KV Documentation](https://vercel.com/docs/storage/vercel-kv)

---

✅ **Your Redis setup is ready!** Test the API at `http://localhost:3000/api/redis-test` 