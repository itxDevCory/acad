# 🚀 Quick Start: Adding Your OpenAI API Key

This guide will get you up and running in **3 minutes**.

## ✅ What You Need

1. An OpenAI account (free to create)
2. An OpenAI API key (you'll get one in Step 1)
3. This project installed on your machine

## 📝 Step-by-Step Setup

### Step 1: Get Your OpenAI API Key (2 minutes)

1. **Go to OpenAI Platform:**
   - Visit: https://platform.openai.com/api-keys
   - Sign in (or create a free account)

2. **Create a New Key:**
   - Click the **"Create new secret key"** button
   - Give it a name like "MicroSaaS Academy"
   - Click **"Create secret key"**

3. **Copy Your Key:**
   - Copy the key that appears (it starts with `sk-proj-...` or `sk-...`)
   - ⚠️ **Important:** Save it somewhere safe - you won't see it again!

### Step 2: Add the Key to Your Project (1 minute)

1. **Open the `.env.local` file:**
   ```bash
   # The file is already created at the project root
   # Open it with your favorite editor:
   
   # Using nano:
   nano .env.local
   
   # Using VS Code:
   code .env.local
   
   # Using vim:
   vim .env.local
   ```

2. **Replace the placeholder:**
   Find this line:
   ```bash
   OPENAI_API_KEY=sk-proj-your-actual-openai-api-key-here
   ```
   
   Replace it with your actual key:
   ```bash
   OPENAI_API_KEY=sk-proj-abc123xyz789...
   ```

3. **Save the file:**
   - In nano: Press `Ctrl+X`, then `Y`, then `Enter`
   - In VS Code: Press `Ctrl+S` (or `Cmd+S` on Mac)
   - In vim: Press `Esc`, type `:wq`, press `Enter`

### Step 3: Verify Your Setup (30 seconds)

Run the verification script:

```bash
npm run verify-env
```

You should see:
```
✅ OPENAI_API_KEY: Configured
   Key preview: sk-proj-ab...xyz
```

### Step 4: Start the App! 🎉

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

## 🎯 Quick Test

Once the app is running:

1. Open http://localhost:3000
2. Type a message like: "Explain what a micro-SaaS is"
3. Click **Send**
4. You should get a response from the AI! ✅

## ❌ Troubleshooting

### "Invalid API Key" Error

**Problem:** Your key isn't working

**Solutions:**
1. Check for extra spaces or quotes in `.env.local`
2. Make sure the key starts with `sk-proj-` or `sk-`
3. Verify the key is active in your OpenAI dashboard
4. Restart the dev server: `Ctrl+C` then `npm run dev`

### "Rate Limit Exceeded" Error

**Problem:** You've hit your usage limit

**Solutions:**
1. Check your usage at: https://platform.openai.com/usage
2. Add billing information if needed
3. Wait a few minutes and try again

### "Environment Variable Not Set" Error

**Problem:** The app can't find your key

**Solutions:**
1. Make sure `.env.local` is in the project root (same folder as `package.json`)
2. Check the file name is exactly `.env.local` (not `.env.local.txt`)
3. Restart the dev server completely

### Still Having Issues?

1. **Check the file exists:**
   ```bash
   ls -la .env.local
   ```

2. **Verify the content:**
   ```bash
   cat .env.local | grep OPENAI_API_KEY
   ```

3. **Run the verification script:**
   ```bash
   npm run verify-env
   ```

## 🔒 Security Reminders

- ✅ `.env.local` is already in `.gitignore` (won't be committed to git)
- ✅ Never share your API key publicly
- ✅ Never commit `.env.local` to version control
- ✅ Use different keys for development and production

## 📚 Next Steps

Once your API key is working:

1. **Explore the agents:** Try different AI agents (Tutor, Coder, Architect, etc.)
2. **Build a project:** Ask the AI to help you build a micro-SaaS
3. **Learn:** Use the curriculum to level up your skills

## 💡 Pro Tips

### Use Multiple Keys

For better organization, create separate keys for:
- Development (local testing)
- Production (deployed app)
- Testing (automated tests)

### Monitor Your Usage

Check your usage regularly:
- Dashboard: https://platform.openai.com/usage
- Set up usage alerts in your OpenAI account

### Upgrade When Ready

Start with the free tier, upgrade when you need:
- Higher rate limits
- More tokens per minute
- Priority access

## 🎓 Additional Resources

- **Full Setup Guide:** [SETUP_API_KEYS.md](./SETUP_API_KEYS.md)
- **OpenAI Documentation:** https://platform.openai.com/docs
- **Project README:** [README.md](./README.md)

---

**Need help?** Check the troubleshooting section above or review the full setup guide.

**Ready to build?** Run `npm run dev` and start creating! 🚀
