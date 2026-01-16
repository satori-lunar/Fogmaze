# Deployment Guide - Vercel

Complete guide to deploy Blind Maze to Vercel.

## 🚀 Quick Deploy (2 Minutes)

### Method 1: Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Navigate to project folder
cd blind-maze-web

# 3. Install dependencies
npm install

# 4. Login to Vercel
vercel login

# 5. Deploy to production
vercel --prod
```

**Done!** Your game is live. Copy the URL from the terminal.

---

### Method 2: GitHub + Vercel Dashboard

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Blind Maze web version"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/blind-maze-web.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or `blind-maze-web` if in subdirectory)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click **"Deploy"**

**Done!** Wait ~2 minutes for build to complete.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies installed: `npm install`
- [ ] Project builds successfully: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] Game works locally: `npm run dev`
- [ ] All 5 levels load correctly
- [ ] Swipe controls work
- [ ] Keyboard controls work
- [ ] Animations are smooth

---

## 🔧 Vercel Configuration

The project includes `vercel.json` with optimal settings:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

No additional configuration needed!

---

## 🌐 Custom Domain (Optional)

### Add Your Own Domain

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `blindmaze.com`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

**Free SSL included!**

---

## 📊 Post-Deployment

### Verify Deployment

1. **Test on Desktop**
   - Open deployed URL
   - Test keyboard controls (Arrow keys, WASD)
   - Complete level 1
   - Check animations

2. **Test on Mobile**
   - Open URL on phone
   - Test swipe controls
   - Check touch responsiveness
   - Verify layout

3. **Performance Check**
   - Run Lighthouse audit
   - Check loading time
   - Verify smooth animations

### Expected Performance

- **Lighthouse Score**: 95+
- **First Load**: < 2 seconds
- **Time to Interactive**: < 2 seconds
- **Bundle Size**: ~150KB gzipped

---

## 🔄 Update Deployment

### Update via CLI

```bash
# Make your changes
# ...

# Deploy updated version
vercel --prod
```

### Update via GitHub

```bash
# Make your changes
# ...

# Commit and push
git add .
git commit -m "Update game"
git push

# Vercel auto-deploys on push!
```

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Error: "Module not found"**
```bash
# Locally, clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build

# If successful, commit and push
git add package-lock.json
git commit -m "Fix dependencies"
git push
```

**Error: "TypeScript errors"**
```bash
# Check for errors
npm run lint

# Fix errors in code
# Then deploy again
```

### Deployment Succeeds but Game Doesn't Work

1. **Check browser console** for errors
2. **Verify all files** are committed to git
3. **Check Vercel logs** in dashboard
4. **Test locally** with production build:
   ```bash
   npm run build
   npm start
   ```

### Slow Loading

1. **Check Vercel region** - should be close to users
2. **Verify bundle size** - should be ~150KB
3. **Check images** - ensure optimized (none in this project)

---

## 💰 Pricing

**Vercel Free Tier includes:**
- ✅ Unlimited deployments
- ✅ Automatic SSL
- ✅ 100GB bandwidth/month
- ✅ Serverless functions
- ✅ Analytics (basic)
- ✅ Custom domains

**Perfect for this game!** No payment needed.

---

## 📈 Analytics (Optional)

### Enable Vercel Analytics

1. Go to project dashboard
2. Click **"Analytics"** tab
3. Click **"Enable"**

Track:
- Page views
- User locations
- Device types
- Performance metrics

---

## 🔒 Security

### Automatic Features

- ✅ HTTPS/SSL (automatic)
- ✅ DDoS protection
- ✅ Edge caching
- ✅ Secure headers

No additional configuration needed!

---

## 🎯 Optimization Tips

### Already Optimized

This project includes:
- ✅ Next.js App Router (fastest)
- ✅ Automatic code splitting
- ✅ Image optimization (Next.js built-in)
- ✅ Tailwind CSS purging (production only)
- ✅ Framer Motion tree-shaking
- ✅ TypeScript strict mode

### Further Optimization

```typescript
// Enable PWA (optional)
// Add next-pwa package for offline support

// Add service worker
// Enable install prompt
// Cache game assets
```

---

## 📱 PWA Setup (Optional)

Make the game installable:

```bash
# Install next-pwa
npm install next-pwa

# Update next.config.js
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // existing config
})

# Add manifest.json to public/
# Add icons to public/icons/
```

---

## 🌍 Environment Variables

**None required!** Game works without any environment variables.

If you add features that need env vars:

1. Add to `.env.local` (local development)
2. Add to Vercel dashboard (production):
   - Settings → Environment Variables
   - Add key-value pairs
   - Redeploy

---

## 📊 Monitoring

### Vercel Dashboard Shows

- Deployment status
- Build logs
- Runtime logs
- Analytics (if enabled)
- Performance metrics

### Check Deployment Status

```bash
# List all deployments
vercel ls

# Check specific deployment
vercel inspect [deployment-url]
```

---

## 🎉 Success Checklist

After deployment:

- [ ] Game loads on desktop
- [ ] Game loads on mobile
- [ ] All 5 levels work
- [ ] Swipe controls work
- [ ] Keyboard controls work
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Lighthouse score 90+
- [ ] Custom domain (optional)
- [ ] Analytics enabled (optional)

---

## 📞 Support

### Vercel Issues

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Next.js Documentation](https://nextjs.org/docs)

### Game Issues

- Check browser console
- Review code comments
- Test locally first
- Check this guide

---

## 🚀 Deployment Commands Reference

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List deployments
vercel ls

# Remove deployment
vercel rm [deployment-url]

# View logs
vercel logs [deployment-url]

# Open in browser
vercel open
```

---

## 🎯 Expected Timeline

| Task | Time |
|------|------|
| Install dependencies | 2 min |
| First build | 1 min |
| Vercel signup | 1 min |
| Deploy | 2 min |
| **Total** | **~6 minutes** |

---

## ✅ Final Steps

1. **Deploy**: `vercel --prod`
2. **Test**: Open the URL
3. **Share**: Send link to friends
4. **Enjoy**: Play your game online! 🎮

---

**Your game is now live on Vercel!** 🎉

**Example URL**: `https://blind-maze-web.vercel.app`

Share it with the world! 🌍
