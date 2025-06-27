const redis = require('redis');
require('dotenv/config');
const readline = require('readline');

async function startRedisCLI() {
  console.log('🚀 Starting Redis CLI...');
  
  const client = redis.createClient({
    url: process.env.REDIS_URL
  });
  
  await client.connect();
  console.log('✅ Connected to Redis');
  console.log('💡 Type Redis commands (or "exit" to quit)');
  console.log('📝 Examples: PING, INFO, KEYS *, GET key, SET key value\n');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'redis> '
  });
  
  rl.prompt();
  
  rl.on('line', async (input) => {
    const command = input.trim();
    
    if (command.toLowerCase() === 'exit') {
      console.log('👋 Goodbye!');
      await client.quit();
      rl.close();
      return;
    }
    
    if (!command) {
      rl.prompt();
      return;
    }
    
    try {
      const parts = command.split(' ');
      const cmd = parts[0].toUpperCase();
      
      let result;
      
      switch (cmd) {
        case 'PING':
          result = await client.ping();
          break;
        case 'INFO':
          const section = parts[1] || 'default';
          result = await client.info(section);
          break;
        case 'KEYS':
          const pattern = parts[1] || '*';
          result = await client.keys(pattern);
          break;
        case 'GET':
          if (!parts[1]) {
            console.log('(error) ERR wrong number of arguments for GET command');
            rl.prompt();
            return;
          }
          result = await client.get(parts[1]);
          break;
        case 'SET':
          if (!parts[1] || !parts[2]) {
            console.log('(error) ERR wrong number of arguments for SET command');
            rl.prompt();
            return;
          }
          result = await client.set(parts[1], parts.slice(2).join(' '));
          break;
        case 'DEL':
          if (!parts[1]) {
            console.log('(error) ERR wrong number of arguments for DEL command');
            rl.prompt();
            return;
          }
          result = await client.del(parts.slice(1));
          break;
        case 'TTL':
          if (!parts[1]) {
            console.log('(error) ERR wrong number of arguments for TTL command');
            rl.prompt();
            return;
          }
          result = await client.ttl(parts[1]);
          break;
        case 'DBSIZE':
          result = await client.dbSize();
          break;
        case 'FLUSHDB':
          console.log('⚠️  This will delete all keys in the current database!');
          console.log('Type "FLUSHDB CONFIRM" if you really want to do this.');
          if (parts[1] === 'CONFIRM') {
            result = await client.flushDb();
          } else {
            console.log('Command cancelled.');
            rl.prompt();
            return;
          }
          break;
        default:
          console.log(`(error) ERR unknown command '${cmd}'`);
          console.log('💡 Supported: PING, INFO, KEYS, GET, SET, DEL, TTL, DBSIZE, FLUSHDB');
          rl.prompt();
          return;
      }
      
      // Format output
      if (Array.isArray(result)) {
        if (result.length === 0) {
          console.log('(empty list or set)');
        } else {
          result.forEach((item, index) => {
            console.log(`${index + 1}) "${item}"`);
          });
        }
      } else if (result === null) {
        console.log('(nil)');
      } else if (typeof result === 'string' && result.includes('\r\n')) {
        // Multi-line response (like INFO)
        console.log(result);
      } else {
        console.log(result);
      }
      
    } catch (error) {
      console.log(`(error) ${error.message}`);
    }
    
    rl.prompt();
  });
}

// Start the CLI
startRedisCLI().catch(console.error); 