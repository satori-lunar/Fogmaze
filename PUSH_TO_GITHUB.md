# 📤 Push to GitHub - Complete Guide

Get your Blind Maze project on GitHub in 5 minutes!

---

## ⚡ Quick Push (If You Have Git Installed)

```bash
# 1. Navigate to project root
cd "C:\Users\jenni\New folder (16)\Fogmaze"

# 2. Initialize Git (if not already)
git init

# 3. Add all files
git add .

# 4. Commit
git commit -m "Initial commit - Blind Maze iOS and Web versions"

# 5. Create repo on GitHub (see below)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/blind-maze.git
git branch -M main
git push -u origin main
```

**Done!** 🎉

---

## 📋 Step-by-Step Instructions

### Step 1: Install Git (If Not Installed)

**Check if Git is installed:**
```bash
git --version
```

**If not installed:**

**Windows:**
1. Download from https://git-scm.com/download/win
2. Run installer
3. Use default settings
4. Restart terminal

**Mac:**
```bash
# Install via Homebrew
brew install git

# Or install Xcode Command Line Tools
xcode-select --install
```

**Linux:**
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # CentOS/RHEL
```

---

### Step 2: Configure Git (First Time Only)

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# Verify
git config --list
```

---

### Step 3: Initialize Git Repository

```bash
# Navigate to project root
cd "C:\Users\jenni\New folder (16)\Fogmaze"

# Initialize Git
git init

# Verify
git status
```

**Expected output:**
```
Initialized empty Git repository in ...
```

---

### Step 4: Add Files to Git

```bash
# Add all files
git add .

# Check what's staged
git status
```

**Expected output:**
```
Changes to be committed:
  new file: BlindMaze/...
  new file: blind-maze-web/...
  new file: README.md
  ...
```

---

### Step 5: Create First Commit

```bash
# Commit with message
git commit -m "Initial commit - Blind Maze iOS and Web versions"
```

**Expected output:**
```
[main (root-commit) abc1234] Initial commit - Blind Maze iOS and Web versions
 50 files changed, 5000 insertions(+)
 create mode 100644 README.md
 ...
```

---

### Step 6: Create GitHub Repository

**Option A: Via GitHub Website**

1. Go to https://github.com
2. Click **"+"** → **"New repository"**
3. Repository name: **`blind-maze`** (or your choice)
4. Description: **"A minimalist puzzle game with fog of war mechanics"**
5. Choose **Public** or **Private**
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click **"Create repository"**

**Option B: Via GitHub CLI (if installed)**

```bash
# Install GitHub CLI first: https://cli.github.com/
gh repo create blind-maze --public --source=. --remote=origin
```

---

### Step 7: Connect Local Repo to GitHub

**Copy the commands from GitHub** (shown after creating repo), or:

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/blind-maze.git

# Verify remote
git remote -v
```

**Expected output:**
```
origin  https://github.com/YOUR_USERNAME/blind-maze.git (fetch)
origin  https://github.com/YOUR_USERNAME/blind-maze.git (push)
```

---

### Step 8: Push to GitHub

```bash
# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)
  - Create token at: https://github.com/settings/tokens
  - Select scopes: `repo`
  - Copy token and paste as password

**Expected output:**
```
Enumerating objects: 50, done.
Counting objects: 100% (50/50), done.
Delta compression using up to 8 threads
Compressing objects: 100% (45/45), done.
Writing objects: 100% (50/50), 100.00 KiB | 5.00 MiB/s, done.
Total 50 (delta 5), reused 0 (delta 0)
To https://github.com/YOUR_USERNAME/blind-maze.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

### Step 9: Verify on GitHub

1. Go to https://github.com/YOUR_USERNAME/blind-maze
2. You should see all your files!
3. Check that both `BlindMaze/` and `blind-maze-web/` folders are there

---

## 🎉 Success!

Your project is now on GitHub! 🚀

**Your repository URL:**
```
https://github.com/YOUR_USERNAME/blind-maze
```

---

## 🔄 Making Updates

After making changes to your code:

```bash
# 1. Check what changed
git status

# 2. Add changes
git add .

# 3. Commit with message
git commit -m "Description of changes"

# 4. Push to GitHub
git push
```

**That's it!** Changes appear on GitHub immediately.

---

## 🌐 Deploy Web Version from GitHub

Now that your code is on GitHub, you can deploy to Vercel directly from GitHub!

### Connect GitHub to Vercel

1. Go to https://vercel.com
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your **blind-maze** repository
5. Set **Root Directory** to: `blind-maze-web`
6. Click **"Deploy"**

**Benefits:**
- ✅ Auto-deploy on every push
- ✅ Preview deployments for branches
- ✅ Rollback to previous versions
- ✅ No manual deployment needed

---

## 📁 Repository Structure

Your GitHub repo will look like this:

```
blind-maze/
├── BlindMaze/              # iOS version
├── BlindMaze.xcodeproj/    # Xcode project
├── blind-maze-web/         # Web version
├── Documentation files     # All .md files
├── .gitignore             # Git ignore rules
└── README.md              # Main readme
```

---

## 🔒 Private vs Public Repository

### Public Repository (Recommended)
- ✅ Free unlimited
- ✅ Share with anyone
- ✅ Portfolio showcase
- ✅ Open source
- ❌ Code visible to everyone

### Private Repository
- ✅ Code hidden
- ✅ Free for personal use
- ❌ Can't showcase easily
- ❌ Requires access permissions

**Recommendation:** Make it public to showcase your work!

---

## 🎯 Best Practices

### Commit Messages

**Good:**
```bash
git commit -m "Add level 6 with spiral pattern"
git commit -m "Fix fog of war animation bug"
git commit -m "Update README with deployment instructions"
```

**Bad:**
```bash
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
```

### Commit Frequency

- Commit after completing a feature
- Commit after fixing a bug
- Commit before trying something risky
- Commit at end of work session

### Branch Strategy (Optional)

```bash
# Create feature branch
git checkout -b feature/new-level

# Make changes and commit
git add .
git commit -m "Add new level"

# Push branch
git push -u origin feature/new-level

# Merge on GitHub via Pull Request
# Or merge locally:
git checkout main
git merge feature/new-level
git push
```

---

## 🐛 Troubleshooting

### "fatal: not a git repository"

```bash
# Make sure you're in the right directory
cd "C:\Users\jenni\New folder (16)\Fogmaze"

# Initialize Git
git init
```

### "Permission denied (publickey)"

**Use HTTPS instead of SSH:**
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/blind-maze.git
```

### "Authentication failed"

**Use Personal Access Token:**
1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Copy token
5. Use token as password when pushing

### "Large files detected"

```bash
# Remove large files from staging
git reset HEAD path/to/large/file

# Add to .gitignore
echo "path/to/large/file" >> .gitignore

# Commit and push
git add .gitignore
git commit -m "Update gitignore"
git push
```

### "Merge conflict"

```bash
# Pull latest changes
git pull origin main

# Fix conflicts in files (look for <<<<<<< markers)
# Then:
git add .
git commit -m "Resolve merge conflicts"
git push
```

---

## 📊 What Gets Pushed

### ✅ Included (Will be pushed)
- All source code files
- Documentation (.md files)
- Configuration files
- README files
- .gitignore file

### ❌ Excluded (Won't be pushed - see .gitignore)
- `node_modules/` (web dependencies)
- `.next/` (Next.js build)
- `DerivedData/` (Xcode build)
- `xcuserdata/` (Xcode user data)
- `.DS_Store` (Mac system files)
- `*.log` (log files)

**Why?** These are generated files that can be recreated. Excluding them keeps the repo small and clean.

---

## 🎨 Customize Your GitHub Repo

### Add a Great README

Your main `README.md` should include:
- Project description
- Screenshots/GIF
- Features list
- How to run
- How to deploy
- Tech stack
- License

### Add Topics

On GitHub:
1. Go to your repository
2. Click ⚙️ next to "About"
3. Add topics: `game`, `puzzle`, `ios`, `web`, `nextjs`, `swiftui`, `typescript`

### Add License (Optional)

```bash
# Add MIT License
curl https://raw.githubusercontent.com/licenses/license-templates/master/templates/mit.txt > LICENSE

git add LICENSE
git commit -m "Add MIT License"
git push
```

---

## 🚀 Advanced: GitHub Actions (Optional)

Auto-deploy to Vercel on every push:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./blind-maze-web
```

---

## ✅ Final Checklist

- [ ] Git installed
- [ ] Git configured (name, email)
- [ ] Repository initialized
- [ ] Files added and committed
- [ ] GitHub repository created
- [ ] Remote added
- [ ] Pushed to GitHub
- [ ] Verified on GitHub website
- [ ] Connected to Vercel (optional)

---

## 🎉 Congratulations!

Your Blind Maze project is now on GitHub! 🎊

**What you can do now:**
- ✅ Share your GitHub repo URL
- ✅ Add it to your portfolio
- ✅ Deploy web version from GitHub
- ✅ Collaborate with others
- ✅ Track changes over time
- ✅ Showcase your work

**Your repo URL:**
```
https://github.com/YOUR_USERNAME/blind-maze
```

---

## 📞 Need Help?

### Git Issues
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

### GitHub Issues
- [GitHub Help](https://help.github.com/)
- [GitHub Community](https://github.community/)

---

## 🔄 Quick Reference

```bash
# Check status
git status

# Add files
git add .

# Commit
git commit -m "Your message"

# Push
git push

# Pull latest
git pull

# View history
git log

# Create branch
git checkout -b branch-name

# Switch branch
git checkout branch-name

# View remotes
git remote -v
```

---

**Ready to push?** Follow the steps above and your code will be on GitHub in minutes! 🚀
