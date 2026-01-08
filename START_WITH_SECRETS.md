# 🚀 Start Here: Setting Up Your OpenAI API Key

Welcome! Before you can use MicroSaaS Academy AI, you need to add your OpenAI API key.

## ⚡ Quick Setup (3 Minutes)

### 1️⃣ Get Your API Key
Visit: **https://platform.openai.com/api-keys**
- Sign in or create an account
- Click "Create new secret key"
- Copy the key (starts with `sk-proj-...`)

### 2️⃣ Add It to Your Project
```bash
# Open the .env.local file
nano .env.local

# Find this line:
OPENAI_API_KEY=sk-proj-your-actual-openai-api-key-here

# Replace with your actual key:
OPENAI_API_KEY=sk-proj-abc123xyz789...

# Save and exit (Ctrl+X, then Y, then Enter)
```

### 3️⃣ Verify It Works
```bash
npm run verify-env
```

You should see: ✅ OPENAI_API_KEY: Configured

### 4️⃣ Start Building!
```bash
npm run dev
```

Open: **http://localhost:3000**

## 📚 Need More Help?

- **Quick Guide:** [QUICKSTART_SECRETS.md](./QUICKSTART_SECRETS.md) - 3-minute setup
- **Full Guide:** [SETUP_API_KEYS.md](./SETUP_API_KEYS.md) - Comprehensive instructions
- **Summary:** [SECRETS_SETUP_COMPLETE.md](./SECRETS_SETUP_COMPLETE.md) - What was configured

## 🔧 Useful Commands

```bash
npm run verify-env    # Check if your API key is set up
npm run dev          # Start the development server
npm run build        # Build for production
```

## ❓ Common Questions

**Q: Where do I get an API key?**
A: https://platform.openai.com/api-keys

**Q: Is it free?**
A: OpenAI offers free credits for new accounts. Check their pricing page.

**Q: Is my key secure?**
A: Yes! The `.env.local` file is in `.gitignore` and won't be committed to git.

**Q: Can I use offline mode?**
A: Yes! See the README.md for Ollama setup instructions.

## 🎯 What's Next?

Once your API key is working:

1. **Try the AI agents** - Tutor, Coder, Architect, Marketer, Reviewer
2. **Build a project** - Ask the AI to help you create a micro-SaaS
3. **Learn and earn** - Follow the curriculum to level up your skills

---

**Ready?** Get your API key and let's build something amazing! 🚀
