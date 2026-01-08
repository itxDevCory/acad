# API Keys Setup Guide

This guide will help you configure your OpenAI API key and other secrets for MicroSaaS Academy AI.

## 🔑 OpenAI API Key Setup

### Step 1: Get Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (it starts with `sk-proj-...` or `sk-...`)
5. **Important**: Save it somewhere safe - you won't be able to see it again!

### Step 2: Add the Key to Your Project

#### Option A: Using .env.local (Recommended)

1. A `.env.local` file has been created in your project root
2. Open `/vercel/sandbox/.env.local`
3. Replace the placeholder with your actual key:

```bash
OPENAI_API_KEY=sk-proj-your-actual-openai-api-key-here
```

4. Save the file
5. Restart your development server:

```bash
npm run dev
```

#### Option B: Using Environment Variables

Set the environment variable in your terminal:

```bash
# Mac/Linux
export OPENAI_API_KEY="sk-proj-your-actual-key-here"

# Windows (PowerShell)
$env:OPENAI_API_KEY="sk-proj-your-actual-key-here"

# Windows (CMD)
set OPENAI_API_KEY=sk-proj-your-actual-key-here
```

Then start the server:

```bash
npm run dev
```

### Step 3: Verify the Setup

1. Start the development server: `npm run dev`
2. Open http://localhost:3000
3. Try asking a question to the AI
4. If it works, you're all set! ✅

## 🔒 Security Best Practices

### ✅ DO:
- Keep your `.env.local` file private (it's already in `.gitignore`)
- Use different API keys for development and production
- Rotate your keys regularly
- Set usage limits in your OpenAI dashboard

### ❌ DON'T:
- Never commit `.env.local` to git
- Never share your API keys publicly
- Don't hardcode keys in your source code
- Don't use production keys in development

## 💡 Additional API Keys (Optional)

### Anthropic Claude (Advanced Reasoning)

For more advanced AI capabilities:

```bash
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Get your key from: https://console.anthropic.com/

### Stripe (Payment Processing)

For monetizing your generated projects:

```bash
STRIPE_SECRET_KEY=sk_test_your-key-here
STRIPE_PUBLISHABLE_KEY=pk_test_your-key-here
STRIPE_WEBHOOK_SECRET=whsec_your-key-here
```

Get your keys from: https://dashboard.stripe.com/apikeys

## 🌐 Deployment Secrets

### Vercel Deployment

When deploying to Vercel:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your secrets:
   - `OPENAI_API_KEY`
   - `ANTHROPIC_API_KEY` (optional)
   - `STRIPE_SECRET_KEY` (optional)
4. Deploy your project

### Docker/Self-Hosted

Create a `.env.production` file:

```bash
OPENAI_API_KEY=sk-proj-your-production-key
NODE_ENV=production
```

Then run:

```bash
docker-compose --env-file .env.production up -d
```

## 🔧 Troubleshooting

### "Invalid API Key" Error

1. Check that your key starts with `sk-proj-` or `sk-`
2. Ensure there are no extra spaces or quotes
3. Verify the key is active in your OpenAI dashboard
4. Restart your development server

### "Rate Limit Exceeded" Error

1. Check your usage limits in OpenAI dashboard
2. Add billing information if needed
3. Consider upgrading your plan
4. Implement rate limiting in your app

### Environment Variables Not Loading

1. Ensure `.env.local` is in the project root
2. Restart your development server
3. Check for typos in variable names
4. Verify the file is not in `.gitignore` (`.env.local` should be ignored, but readable)

## 📚 Additional Resources

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## 🆘 Need Help?

If you're still having issues:

1. Check the [OpenAI API Status](https://status.openai.com/)
2. Review the [OpenAI Community Forum](https://community.openai.com/)
3. Check your API usage and billing in the OpenAI dashboard

---

**Remember**: Your API keys are like passwords. Keep them secret, keep them safe! 🔐
