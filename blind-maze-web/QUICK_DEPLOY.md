# 🚀 Quick Deploy to Vercel

Get your game online in 5 minutes!

## ⚡ Super Fast Method

```bash
# 1. Navigate to the web project
cd blind-maze-web

# 2. Install dependencies (first time only)
npm install

# 3. Install Vercel CLI (first time only)
npm install -g vercel

# 4. Login to Vercel (first time only)
vercel login

# 5. Deploy to production
vercel --prod
```

**Done!** 🎉 Copy the URL and play your game online!

---

## 📋 Step-by-Step

### Step 1: Install Dependencies

```bash
cd blind-maze-web
npm install
```

**Wait**: ~2 minutes (downloads packages)

### Step 2: Test Locally (Optional but Recommended)

```bash
npm run dev
```

Open http://localhost:3000 and test the game.

**Press Ctrl+C** to stop the server when done.

### Step 3: Build for Production

```bash
npm run build
```

**Wait**: ~30 seconds

**Expected output**:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB         150 kB
└ ○ /_not-found                          871 B          146 kB
```

### Step 4: Deploy to Vercel

```bash
# First time: Login
vercel login

# Deploy
vercel --prod
```

**Follow prompts**:
- Set up and deploy? **Y**
- Which scope? **Select your account**
- Link to existing project? **N**
- What's your project's name? **blind-maze-web** (or custom name)
- In which directory is your code located? **./**
- Want to override settings? **N**

**Wait**: ~2 minutes

**Success!** You'll see:
```
✅ Production: https://blind-maze-web.vercel.app [2m]
```

---

## 🎮 Test Your Deployment

1. **Open the URL** in your browser
2. **Test on desktop**: Use arrow keys or WASD
3. **Test on mobile**: Open URL on phone, swipe to play
4. **Complete level 1**: Verify game works end-to-end

---

## 🔄 Update Your Game

Made changes? Deploy updates:

```bash
# Make your changes to the code
# ...

# Deploy updated version
vercel --prod
```

**That's it!** Changes go live in ~2 minutes.

---

## 🌐 Custom Domain (Optional)

Want `yourgame.com` instead of `*.vercel.app`?

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your domain
5. Update DNS records (instructions provided)

**Free SSL included!**

---

## 💡 Pro Tips

### Tip 1: Preview Deployments

```bash
# Deploy to preview URL (not production)
vercel
```

Test changes before going live!

### Tip 2: View Logs

```bash
# See deployment logs
vercel logs
```

Debug issues if something goes wrong.

### Tip 3: List Deployments

```bash
# See all your deployments
vercel ls
```

### Tip 4: Open in Browser

```bash
# Open your production URL
vercel open
```

---

## 🐛 Troubleshooting

### "Command not found: vercel"

```bash
# Install Vercel CLI globally
npm install -g vercel

# Or use npx (no install needed)
npx vercel --prod
```

### "Build failed"

```bash
# Test build locally first
npm run build

# If it fails, check error messages
# Fix issues, then try again
```

### "Module not found"

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
vercel --prod
```

### "Cannot find package.json"

```bash
# Make sure you're in the right directory
cd blind-maze-web

# Verify package.json exists
ls package.json
```

---

## ✅ Success Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Build succeeds (`npm run build`)
- [ ] Vercel CLI installed (`vercel --version`)
- [ ] Logged into Vercel (`vercel login`)
- [ ] Deployed successfully (`vercel --prod`)
- [ ] Game works on deployed URL
- [ ] Tested on mobile device
- [ ] Shared URL with friends! 🎉

---

## 📊 What You Get (Free!)

- ✅ **Hosting**: Unlimited deployments
- ✅ **SSL**: Automatic HTTPS
- ✅ **CDN**: Global edge network
- ✅ **Bandwidth**: 100GB/month
- ✅ **Domains**: Custom domain support
- ✅ **Analytics**: Basic metrics

**Cost**: $0 (Free tier)

---

## 🎯 Timeline

| Step | Time |
|------|------|
| Install dependencies | 2 min |
| Test locally | 2 min |
| Build | 30 sec |
| Deploy | 2 min |
| **Total** | **~7 minutes** |

---

## 🚀 One-Line Deploy

For the truly impatient:

```bash
cd blind-maze-web && npm install && npm run build && vercel --prod
```

**Done!** 🎉

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Project README**: See README.md
- **Full Guide**: See DEPLOYMENT.md

---

## 🎉 Congratulations!

Your game is now live on the internet! 🌍

**Share your URL**:
- Send to friends
- Post on social media
- Add to your portfolio

**Example URL**: `https://blind-maze-web.vercel.app`

Enjoy! 🎮
