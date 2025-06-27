require('dotenv/config');

async function testZapierWebhook() {
  console.log('🚀 Testing Zapier webhook...');
  
  // Use the real webhook URL
  const webhookUrl = 'https://hooks.zapier.com/hooks/catch/17811561/ub8bev3/';
  
  const testData = {
    email: 'test@gtreasury.com',
    link: 'https://gt-registry.vercel.app/api/auth/verify-email?token=test123&email=test@gtreasury.com',
    subject: 'Sign in to GTreasury Design System Registry'
  };
  
  console.log('📧 Sending test email data to Zapier...');
  console.log('📊 Payload:', JSON.stringify(testData, null, 2));
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    console.log(`📡 Response Status: ${response.status} ${response.statusText}`);
    
    if (response.ok) {
      const result = await response.text();
      console.log('✅ Zapier webhook response:', result);
      
      console.log('\n🎉 Zapier webhook test successful!');
      console.log('💡 Your Zapier automation should have received the data.');
      console.log('📧 Check your email or Zapier task history to verify.');
      
      return true;
    } else {
      console.log('❌ Webhook request failed');
      console.log('Response:', await response.text());
      return false;
    }
    
  } catch (error) {
    console.error('❌ Error testing webhook:', error.message);
    
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check if the webhook URL is correct');
    console.log('2. Ensure your Zapier automation is turned on');
    console.log('3. Verify network connectivity');
    console.log('4. Check Zapier task history for any errors');
    
    return false;
  }
}

// Run the test
console.log('🎯 Testing Zapier Webhook: https://hooks.zapier.com/hooks/catch/17811561/ub8bev3/\n');

testZapierWebhook()
  .then(success => {
    if (success) {
      console.log('\n✨ Webhook test completed successfully!');
      console.log('🔗 Next: Update your .env.local with this webhook URL');
      console.log('📝 ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/17811561/ub8bev3/');
    } else {
      console.log('\n❌ Webhook test failed. Check the troubleshooting steps above.');
    }
  })
  .catch(console.error); 