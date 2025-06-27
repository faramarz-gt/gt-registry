import { createClient } from 'redis';
import { NextResponse } from 'next/server';

// Create Redis client
const redis = createClient({
  url: process.env.KV_URL || process.env.REDIS_URL,
  // For production, you might want to add additional options:
  // password: process.env.REDIS_PASSWORD,
  // socket: {
  //   tls: true,
  //   rejectUnauthorized: false
  // }
});

// Connect to Redis (if not already connected)
let isConnected = false;

async function connectRedis() {
  if (!isConnected) {
    try {
      await redis.connect();
      isConnected = true;
      console.log('✅ Connected to Redis');
    } catch (error) {
      console.error('❌ Redis connection failed:', error);
      throw error;
    }
  }
}

export async function GET() {
  try {
    await connectRedis();
    
    // Test basic Redis operations
    const testKey = 'test:' + Date.now();
    const testValue = JSON.stringify({
      message: 'Hello from Redis!',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });

    // Set a value
    await redis.set(testKey, testValue);
    
    // Get the value back
    const result = await redis.get(testKey);
    
    // Set expiration (optional)
    await redis.expire(testKey, 60); // 60 seconds
    
    // Clean up the test key
    setTimeout(async () => {
      try {
        await redis.del(testKey);
        console.log(`🧹 Cleaned up test key: ${testKey}`);
      } catch (error) {
        console.error('Error cleaning up test key:', error);
      }
    }, 30000); // Clean up after 30 seconds

    return NextResponse.json({ 
      success: true,
      data: JSON.parse(result || '{}'),
      testKey,
      message: 'Redis connection and operations successful!'
    });

  } catch (error) {
    console.error('Redis operation failed:', error);
    return NextResponse.json({ 
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Redis operation failed'
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectRedis();
    
    const body = await request.json();
    const { key, value, expireInSeconds } = body;

    if (!key || !value) {
      return NextResponse.json({ 
        success: false,
        error: 'Key and value are required'
      }, { status: 400 });
    }

    // Store the value
    await redis.set(key, JSON.stringify(value));
    
    // Set expiration if provided
    if (expireInSeconds) {
      await redis.expire(key, expireInSeconds);
    }

    // Get the stored value to confirm
    const storedValue = await redis.get(key);
    
    return NextResponse.json({ 
      success: true,
      data: {
        key,
        value: JSON.parse(storedValue || '{}'),
        expireInSeconds: expireInSeconds || null
      },
      message: 'Data stored successfully in Redis!'
    });

  } catch (error) {
    console.error('Redis POST operation failed:', error);
    return NextResponse.json({ 
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Redis POST operation failed'
    }, { status: 500 });
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  if (isConnected) {
    await redis.quit();
    console.log('Redis connection closed');
  }
}); 