const redis = require('redis');
require('dotenv/config');
const crypto = require('crypto');

async function testRedisConnection() {
  console.log('🔌 Testing direct Redis connection...');
  
  const client = redis.createClient({
    url: process.env.REDIS_URL
  });
  
  client.on('error', (err) => {
    console.error('❌ Redis Client Error:', err);
  });
  
  try {
    // Connect to Redis
    await client.connect();
    console.log('✅ Connected to Redis successfully!');
    
    // Test basic operations
    console.log('\n🧪 Testing basic Redis operations...');
    
    // Test SET/GET
    await client.set('test:connection', 'success');
    const result = await client.get('test:connection');
    
    if (result === 'success') {
      console.log('✅ SET/GET operations working!');
    }
    
    // Test token storage (simulating auth flow)
    console.log('\n🔐 Testing authentication token storage...');
    
    const testEmail = 'test@gtreasury.com';
    const testToken = 'test-token-12345';
    const hash = crypto.createHash('sha256').update(testToken).digest('hex');
    const tokenKey = `verification:${hash}`;
    
    // Store token with 24 hour expiration
    await client.setEx(tokenKey, 24 * 60 * 60, testEmail);
    console.log(`✅ Stored token: ${tokenKey}`);
    
    // Retrieve token
    const retrievedEmail = await client.get(tokenKey);
    console.log(`✅ Retrieved email: ${retrievedEmail}`);
    
    if (retrievedEmail === testEmail) {
      console.log('✅ Token storage and retrieval working correctly!');
    }
    
    // Check TTL
    const ttl = await client.ttl(tokenKey);
    console.log(`⏰ Token TTL: ${ttl} seconds (${Math.round(ttl/3600)} hours)`);
    
    // Test Redis commands (like redis-cli)
    console.log('\n📊 Redis Server Information:');
    
    // Get server info
    const info = await client.info('server');
    const lines = info.split('\r\n');
    for (const line of lines) {
      if (line.includes('redis_version') || line.includes('os') || line.includes('uptime_in_seconds')) {
        console.log(`  ${line}`);
      }
    }
    
    // Get memory usage
    const memoryInfo = await client.info('memory');
    const memoryLines = memoryInfo.split('\r\n');
    for (const line of memoryLines) {
      if (line.includes('used_memory_human') || line.includes('used_memory_peak_human')) {
        console.log(`  ${line}`);
      }
    }
    
    // Test some Redis CLI-like commands
    console.log('\n🔧 Testing Redis CLI-like operations...');
    
    // KEYS command (be careful in production)
    const keys = await client.keys('test:*');
    console.log(`✅ Found ${keys.length} test keys:`, keys);
    
    // DBSIZE
    const dbSize = await client.dbSize();
    console.log(`✅ Database size: ${dbSize} keys`);
    
    // PING
    const pingResult = await client.ping();
    console.log(`✅ PING response: ${pingResult}`);
    
    // Clean up test data
    await client.del('test:connection', tokenKey);
    console.log('🧹 Cleaned up test data');
    
    console.log('\n🎉 Redis connection test complete! Your Redis server is working perfectly.');
    console.log('\n💡 You can now use this Redis connection for your authentication system.');
    
  } catch (error) {
    console.error('❌ Redis connection failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check if REDIS_URL is correct in .env.local');
    console.log('2. Ensure Redis server is accessible');
    console.log('3. Verify network connectivity');
    console.log('4. Check Redis server authentication');
  } finally {
    // Close connection
    await client.quit();
    console.log('👋 Disconnected from Redis');
  }
}

// Run the test
testRedisConnection().catch(console.error); 