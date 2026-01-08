# MicroSaaS Academy AI - Complete Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier works great)
- OpenAI API key

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: MicroSaaS Academy AI"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/microsaas-academy.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Add environment variable:
   - Key: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
6. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? microsaas-academy (or your choice)
# - Directory? ./
# - Override settings? No

# Add environment variable
vercel env add OPENAI_API_KEY

# Deploy to production
vercel --prod
```

### Step 3: Configure Environment Variables

In Vercel Dashboard:
1. Go to your project
2. Settings → Environment Variables
3. Add the following:

**Required:**
- `OPENAI_API_KEY` - Your OpenAI API key

**Optional:**
- `ANTHROPIC_API_KEY` - For Claude support
- `STRIPE_SECRET_KEY` - For payment features
- `DATABASE_URL` - For PostgreSQL (if needed)

### Step 4: Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatic

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
# Build the image
docker build -t microsaas-academy .

# Run the container
docker run -p 3000:3000 \
  -e OPENAI_API_KEY=your-key-here \
  microsaas-academy
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - NODE_ENV=production
    restart: unless-stopped
    volumes:
      - ./data:/app/data
      - ./projects:/app/projects
```

Run with:
```bash
docker-compose up -d
```

---

## ☁️ AWS Deployment

### AWS Amplify

1. Go to AWS Amplify Console
2. Connect your GitHub repository
3. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
4. Add environment variables
5. Deploy

### AWS EC2

```bash
# SSH into your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone your repository
git clone https://github.com/YOUR_USERNAME/microsaas-academy.git
cd microsaas-academy

# Install dependencies
npm install

# Create .env.local
nano .env.local
# Add your OPENAI_API_KEY

# Build
npm run build

# Install PM2 for process management
sudo npm install -g pm2

# Start the application
pm2 start npm --name "microsaas-academy" -- start

# Make it start on boot
pm2 startup
pm2 save

# Configure Nginx as reverse proxy
sudo apt-get install nginx
sudo nano /etc/nginx/sites-available/microsaas-academy
```

Nginx configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/microsaas-academy /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install SSL with Let's Encrypt
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🌊 DigitalOcean Deployment

### App Platform

1. Go to DigitalOcean App Platform
2. Create New App
3. Connect GitHub repository
4. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - Environment Variables: Add `OPENAI_API_KEY`
5. Deploy

### Droplet (VPS)

Similar to AWS EC2 instructions above.

---

## 🔧 Self-Hosted (VPS)

### Requirements
- Ubuntu 20.04+ or similar
- Node.js 18+
- Nginx
- SSL certificate (Let's Encrypt)

### Quick Setup Script

```bash
#!/bin/bash

# Update system
sudo apt-get update && sudo apt-get upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt-get install -y nginx

# Clone repository
cd /var/www
sudo git clone https://github.com/YOUR_USERNAME/microsaas-academy.git
cd microsaas-academy

# Install dependencies
sudo npm install

# Create .env.local
sudo nano .env.local
# Add OPENAI_API_KEY=your-key-here

# Build
sudo npm run build

# Install PM2
sudo npm install -g pm2

# Start application
pm2 start npm --name "microsaas-academy" -- start
pm2 startup
pm2 save

# Configure Nginx (see AWS EC2 section)

# Install SSL
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 📱 iPad-Specific Deployment

### Local Network Access

1. Deploy on your Mac (development mode):
   ```bash
   npm run dev
   ```

2. Find your Mac's IP:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```

3. On iPad, open Safari:
   ```
   http://YOUR_MAC_IP:3000
   ```

### Cloud Access (Recommended for iPad)

Deploy to Vercel (see above) for access from anywhere.

---

## 🔒 Security Checklist

Before deploying to production:

- [ ] Change all default secrets
- [ ] Use environment variables for sensitive data
- [ ] Enable HTTPS (SSL certificate)
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Enable security headers (already in next.config.js)
- [ ] Review and update .gitignore
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy
- [ ] Test error handling

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)

Already configured in the app. View analytics in Vercel Dashboard.

### Custom Monitoring

Add to `.env.local`:
```bash
# Sentry (Error Tracking)
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn

# Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# PostHog (Product Analytics)
NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🌍 Multi-Region Deployment

### Vercel Edge Network

Vercel automatically deploys to edge locations worldwide. No additional configuration needed.

### Custom Multi-Region

For self-hosted multi-region:
1. Deploy to multiple regions (US, EU, Asia)
2. Use GeoDNS to route users to nearest region
3. Set up database replication
4. Configure CDN (Cloudflare, AWS CloudFront)

---

## 💾 Database Setup (Optional)

### PostgreSQL (Production)

```bash
# Install PostgreSQL
sudo apt-get install postgresql postgresql-contrib

# Create database
sudo -u postgres createdb microsaas_academy

# Create user
sudo -u postgres createuser --interactive

# Update .env.local
DATABASE_URL=postgresql://user:password@localhost:5432/microsaas_academy
```

### Managed Database Services

- **Vercel Postgres**: Integrated with Vercel
- **Supabase**: Free tier available
- **PlanetScale**: MySQL-compatible
- **Railway**: PostgreSQL hosting

---

## 🔧 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Ensure variables are set in deployment platform
- Restart the application after adding variables
- Check variable names (case-sensitive)

### API Errors

- Verify OpenAI API key is valid
- Check API key has sufficient credits
- Review API rate limits

### Performance Issues

- Enable caching in next.config.js
- Use CDN for static assets
- Optimize images
- Enable compression

---

## 📈 Scaling

### Horizontal Scaling

Vercel handles this automatically. For self-hosted:

1. Use load balancer (Nginx, HAProxy)
2. Deploy multiple instances
3. Use Redis for session storage
4. Implement database connection pooling

### Vertical Scaling

- Upgrade server resources (CPU, RAM)
- Optimize database queries
- Enable caching layers
- Use CDN for static content

---

## 🎯 Production Checklist

- [ ] Environment variables configured
- [ ] SSL certificate installed
- [ ] Custom domain configured (optional)
- [ ] Monitoring set up
- [ ] Backup strategy in place
- [ ] Error tracking enabled
- [ ] Analytics configured
- [ ] Security headers enabled
- [ ] Rate limiting configured
- [ ] Documentation updated
- [ ] Team access configured
- [ ] Rollback plan ready

---

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review Vercel deployment logs
3. Check browser console for errors
4. Verify environment variables
5. Test API endpoints directly

---

## 🎉 Success!

Your MicroSaaS Academy AI is now deployed and ready to help you build profitable micro-SaaS products!

**Next Steps:**
1. Test the deployment
2. Share the URL with your team
3. Start building your first micro-SaaS
4. Monitor usage and performance

Happy building! 🚀
