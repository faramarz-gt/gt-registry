const { createClient } = require('redis');
require('dotenv').config({ path: '.env.development.local' });

async function testNodeRedis() {
  console.log('🔌 Testing node-redis client...');
  
  // Create Redis client
  const redis = createClient({
    url: process.env.KV_URL || process.env.REDIS_URL,
    // Add additional options for production if needed
  });

  try {
    // Connect to Redis
    await redis.connect();
    console.log('✅ Connected to Redis successfully!');

    // Basic operations
    console.log('\n📝 Testing basic operations...');

    // Set a test item
    await redis.set('item', 'Hello from node-redis!');
    console.log('✅ Set item: "Hello from node-redis!"');

    // Get the item
    const result = await redis.get('item');
    console.log('✅ Retrieved item:', result);

    // Set with expiration
    await redis.setEx('temp_item', 60, JSON.stringify({
      message: 'This will expire in 60 seconds',
      timestamp: new Date().toISOString()
    }));
    console.log('✅ Set temporary item with 60s expiration');

    // Get temp item
    const tempResult = await redis.get('temp_item');
    console.log('✅ Retrieved temp item:', JSON.parse(tempResult));

    // Hash operations
    console.log('\n🔍 Testing hash operations...');
    await redis.hSet('user:123', {
      name: 'John Doe',
      email: 'john@gtreasury.com',
      role: 'admin'
    });
    
    const userData = await redis.hGetAll('user:123');
    console.log('✅ User data:', userData);

    // List operations
    console.log('\n📋 Testing list operations...');
    await redis.lPush('logs', 'First log entry');
    await redis.lPush('logs', 'Second log entry');
    await redis.lPush('logs', 'Third log entry');
    
    const logs = await redis.lRange('logs', 0, -1);
    console.log('✅ Logs:', logs);

    // Clean up test data
    console.log('\n🧹 Cleaning up test data...');
    await redis.del('item', 'temp_item', 'user:123', 'logs');
    console.log('✅ Test data cleaned up');

    console.log('\n🎉 node-redis client test completed successfully!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    // Always close the connection
    await redis.quit();
    console.log('🔌 Redis connection closed');
  }
}

// Run the test
testNodeRedis().catch(console.error); 