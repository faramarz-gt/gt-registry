const { kv } = require('@vercel/kv');
require('dotenv/config');
const crypto = require('crypto');

async function testRedisConnection() {
  console.log('🔌 Testing Redis connection...');
  
  try {
    // Test basic connection
    await kv.set('test:connection', 'success');
    const result = await kv.get('test:connection');
    
    if (result === 'success') {
      console.log('✅ Redis connection successful!');
      
      // Clean up test key
      await kv.del('test:connection');
      
      // Test token storage (simulating auth flow)
      console.log('\n🔐 Testing token storage...');
      
      const testEmail = 'test@gtreasury.com';
      const testToken = 'test-token-12345';
      const hash = crypto.createHash('sha256').update(testToken).digest('hex');
      
      // Store token with 24 hour expiration (like in auth flow)
      await kv.setex(`verification:${hash}`, 24 * 60 * 60, testEmail);
      console.log(`✅ Stored test token: verification:${hash}`);
      
      // Retrieve token
      const retrievedEmail = await kv.get(`verification:${hash}`);
      console.log(`✅ Retrieved email: ${retrievedEmail}`);
      
      if (retrievedEmail === testEmail) {
        console.log('✅ Token storage and retrieval working correctly!');
      }
      
      // Check token expiration
      const ttl = await kv.ttl(`verification:${hash}`);
      console.log(`⏰ Token TTL: ${ttl} seconds (${Math.round(ttl/3600)} hours)`);
      
      // Clean up test token
      await kv.del(`verification:${hash}`);
      console.log('🧹 Cleaned up test data');
      
      // Show Redis info
      console.log('\n📊 Redis Connection Info:');
      const redisUrl = process.env.REDIS_URL || '';
      const host = redisUrl.split('@')[1]?.split(':')[0] || 'Unknown';
      const port = redisUrl.split(':').pop() || 'Unknown';
      console.log('Host:', host);
      console.log('Port:', port);
      
      console.log('\n🎉 Redis setup is working perfectly for authentication!');
      
      // Test some additional KV operations
      console.log('\n🧪 Testing additional KV operations...');
      
      // Test multiple keys
      await kv.mset({
        'user:test1': JSON.stringify({ email: 'user1@gtreasury.com', lastLogin: new Date() }),
        'user:test2': JSON.stringify({ email: 'user2@gtreasury.com', lastLogin: new Date() })
      });
      
      const users = await kv.mget('user:test1', 'user:test2');
      console.log('✅ Multi-get test successful:', users.length, 'users retrieved');
      
      // Clean up
      await kv.del('user:test1', 'user:test2');
      
      console.log('\n✨ Full Redis setup verification complete!');
      
    } else {
      console.log('❌ Redis connection test failed');
    }
    
  } catch (error) {
    console.error('❌ Redis connection failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check if REDIS_URL is set in .env.local');
    console.log('2. Verify Vercel KV database is running');
    console.log('3. Ensure network connectivity');
    console.log('4. Check Redis URL format in environment variables');
  }
}

// Run the test
testRedisConnection().catch(console.error); 