#!/usr/bin/env node

/**
 * Environment Variables Verification Script
 * Checks if all required API keys and secrets are properly configured
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkEnvFile() {
  const envLocalPath = path.join(process.cwd(), '.env.local');
  const envExamplePath = path.join(process.cwd(), '.env.example');

  log('\n🔍 Checking environment configuration...\n', 'cyan');

  // Check if .env.local exists
  if (!fs.existsSync(envLocalPath)) {
    log('❌ .env.local file not found!', 'red');
    log('\n📝 Creating .env.local from .env.example...', 'yellow');
    
    if (fs.existsSync(envExamplePath)) {
      fs.copyFileSync(envExamplePath, envLocalPath);
      log('✅ .env.local created! Please edit it with your actual API keys.', 'green');
    } else {
      log('❌ .env.example not found. Cannot create .env.local', 'red');
      process.exit(1);
    }
  } else {
    log('✅ .env.local file exists', 'green');
  }

  // Load environment variables from .env.local
  const envContent = fs.readFileSync(envLocalPath, 'utf-8');
  const envVars = {};
  
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    }
  });

  log('\n📋 Checking required API keys:\n', 'cyan');

  // Check OpenAI API Key
  const openaiKey = envVars.OPENAI_API_KEY || process.env.OPENAI_API_KEY;
  if (!openaiKey || openaiKey.includes('your-') || openaiKey.includes('sk-proj-your')) {
    log('❌ OPENAI_API_KEY: Not configured or using placeholder', 'red');
    log('   Get your key from: https://platform.openai.com/api-keys', 'yellow');
  } else if (openaiKey.startsWith('sk-')) {
    log('✅ OPENAI_API_KEY: Configured', 'green');
    log(`   Key preview: ${openaiKey.substring(0, 10)}...${openaiKey.substring(openaiKey.length - 4)}`, 'blue');
  } else {
    log('⚠️  OPENAI_API_KEY: Invalid format (should start with "sk-")', 'yellow');
  }

  // Check optional keys
  log('\n📋 Checking optional API keys:\n', 'cyan');

  const optionalKeys = [
    { key: 'ANTHROPIC_API_KEY', name: 'Anthropic Claude', url: 'https://console.anthropic.com/' },
    { key: 'STRIPE_SECRET_KEY', name: 'Stripe', url: 'https://dashboard.stripe.com/apikeys' },
    { key: 'STRIPE_PUBLISHABLE_KEY', name: 'Stripe Publishable', url: 'https://dashboard.stripe.com/apikeys' },
  ];

  optionalKeys.forEach(({ key, name, url }) => {
    const value = envVars[key] || process.env[key];
    if (!value || value.includes('your-')) {
      log(`⚪ ${name}: Not configured (optional)`, 'blue');
    } else {
      log(`✅ ${name}: Configured`, 'green');
    }
  });

  // Check feature flags
  log('\n⚙️  Feature Flags:\n', 'cyan');

  const featureFlags = [
    'NEXT_PUBLIC_OFFLINE_MODE',
    'NEXT_PUBLIC_MULTI_AGENT',
    'NEXT_PUBLIC_ENABLE_EXPERIMENTAL',
  ];

  featureFlags.forEach(flag => {
    const value = envVars[flag] || process.env[flag];
    log(`   ${flag}: ${value || 'not set'}`, 'blue');
  });

  // Summary
  log('\n' + '='.repeat(60), 'cyan');
  
  const hasOpenAI = openaiKey && openaiKey.startsWith('sk-') && !openaiKey.includes('your-');
  
  if (hasOpenAI) {
    log('\n✅ Configuration looks good! You can start the app with:', 'green');
    log('   npm run dev\n', 'cyan');
  } else {
    log('\n⚠️  Action required:', 'yellow');
    log('   1. Edit .env.local and add your OpenAI API key', 'yellow');
    log('   2. Get your key from: https://platform.openai.com/api-keys', 'yellow');
    log('   3. Run this script again to verify\n', 'yellow');
  }

  log('📚 For detailed setup instructions, see: SETUP_API_KEYS.md\n', 'blue');
}

// Run the check
try {
  checkEnvFile();
} catch (error) {
  log(`\n❌ Error: ${error.message}`, 'red');
  process.exit(1);
}
