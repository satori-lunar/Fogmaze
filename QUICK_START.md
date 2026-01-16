# Quick Start Guide

Get Blind Maze running in 5 minutes!

---

## 🚨 Important Notice

**This is a native iOS app built with SwiftUI.**

❌ **CANNOT** deploy to Vercel (Vercel is for web apps)
✅ **CAN** run on iPhone/iPad with Xcode
✅ **CAN** deploy to App Store

**Need Vercel?** See [WEB_VERSION_GUIDE.md](WEB_VERSION_GUIDE.md) for web conversion.

---

## ⚡ 3-Step Setup

### Step 1: Requirements
- [ ] macOS computer (required for iOS development)
- [ ] Xcode 15.0+ (free from Mac App Store)
- [ ] iPhone/iPad OR iOS Simulator (included with Xcode)

### Step 2: Open Project
```bash
# Navigate to project folder
cd /path/to/Fogmaze

# Open in Xcode
open BlindMaze.xcodeproj
```

### Step 3: Run
1. In Xcode, select a device from the top bar:
   - Choose "iPhone 15" (or any iPhone simulator)
   - Or select your connected iPhone/iPad
2. Press `Cmd + R` (or click the Play button)
3. Wait for build to complete (~30 seconds first time)
4. Game launches automatically!

---

## 🎮 How to Play

### Controls
- **Swipe Up** → Move up
- **Swipe Down** → Move down
- **Swipe Left** → Move left
- **Swipe Right** → Move right

### Objective
1. Level starts with 3-second maze reveal
2. Memorize the path to the green exit
3. Navigate using only 1-tile visibility radius
4. Reach the exit to advance to next level

### Tips
- Pay attention during the 3-second reveal!
- You can't move through walls (dark gray blocks)
- Take your time - there's no timer
- 5 levels total, then it loops

---

## 🔧 Troubleshooting

### "Cannot find Xcode"
**Solution**: Install Xcode from Mac App Store (free, ~15 GB)

### "No devices available"
**Solution**: 
1. In Xcode menu: Xcode → Settings → Platforms
2. Click "+" to add iOS Simulator
3. Download iOS 17.0 simulator

### "Code signing error"
**Solution**:
1. Select project in Xcode left sidebar
2. Select "BlindMaze" target
3. Go to "Signing & Capabilities"
4. Change "Team" to your Apple ID
5. Change "Bundle Identifier" to something unique (e.g., `com.yourname.blindmaze`)

### "Build failed"
**Solution**:
1. Press `Cmd + Shift + K` (Clean Build Folder)
2. Press `Cmd + B` (Build)
3. Press `Cmd + R` (Run)

### Swipes not working in Simulator
**Solution**: Use mouse drag (click and drag) instead of clicking

---

## 📱 Testing on Physical Device

### First Time Setup
1. Connect iPhone/iPad via USB
2. Unlock device
3. Trust computer when prompted
4. In Xcode, select your device from device menu
5. Press `Cmd + R`

### If "Untrusted Developer" appears on device
1. On iPhone: Settings → General → VPN & Device Management
2. Tap your Apple ID
3. Tap "Trust"
4. Relaunch app

---

## 🎨 Quick Customizations

### Change Colors (2 minutes)

**File**: `BlindMaze/Views/MazeView.swift`

```swift
// Line ~67 - Change wall color
.fill(Color(red: 0.3, green: 0.3, blue: 0.3)) // Lighter gray

// Line ~80 - Change exit color
Color.red.opacity(0.6) // Red exit instead of green

// Line ~113 - Change player color
Color.cyan.opacity(0.6) // Cyan player instead of blue
```

### Change Reveal Time (1 minute)

**File**: `BlindMaze/ViewModels/GameViewModel.swift`

```swift
// Line ~42 - Change from 3 seconds to 5 seconds
Timer.scheduledTimer(withTimeInterval: 5.0, repeats: false)
```

### Add More Levels (10 minutes)

**File**: `BlindMaze/Models/Maze.swift`

```swift
// Add to MazeLevels.levels array (around line 45)
Maze(
    width: 9,
    height: 9,
    tiles: [
        [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall],
        [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .wall],
        // ... design your maze
        [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall]
    ],
    startPosition: Position(x: 1, y: 1),
    exitPosition: Position(x: 7, y: 7)
)
```

---

## 📖 Documentation

| File | Purpose |
|------|---------|
| **QUICK_START.md** | This file - get started fast |
| **README.md** | Project overview |
| **SETUP_INSTRUCTIONS.md** | Detailed setup guide |
| **CODE_REFERENCE.md** | Code structure and customization |
| **GAME_DESIGN.md** | Game design decisions |
| **WEB_VERSION_GUIDE.md** | How to convert to web for Vercel |
| **PROJECT_SUMMARY.md** | Complete project summary |

---

## 🚀 Deployment Options

### Option 1: App Store (iOS Only)
**Requirements**:
- Apple Developer Program ($99/year)
- App Store review (1-2 weeks)

**Steps**:
1. Join Apple Developer Program
2. Configure app signing in Xcode
3. Archive app (Product → Archive)
4. Upload to App Store Connect
5. Submit for review

**Reach**: iOS users worldwide

---

### Option 2: TestFlight (Beta Testing)
**Requirements**:
- Apple Developer Program ($99/year)
- No review needed for internal testing

**Steps**:
1. Archive app in Xcode
2. Upload to App Store Connect
3. Add testers via email
4. They install via TestFlight app

**Reach**: Up to 10,000 beta testers

---

### Option 3: Vercel (Web Version)
**Requirements**:
- Rebuild game using Next.js/React
- ~12-15 hours of development

**Steps**:
1. Follow WEB_VERSION_GUIDE.md
2. Convert Swift to TypeScript
3. Deploy to Vercel (free)

**Reach**: Anyone with a web browser

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Install Xcode | 30-60 min (one-time) |
| Open and run project | 2 min |
| Test gameplay | 5 min |
| Customize colors | 2 min |
| Add new level | 10 min |
| Deploy to TestFlight | 30 min |
| Deploy to App Store | 2 weeks (review) |
| Convert to web version | 12-15 hours |

---

## ✅ Checklist

### First Run
- [ ] Xcode installed
- [ ] Project opened
- [ ] Device/simulator selected
- [ ] App builds successfully
- [ ] App launches on device
- [ ] Swipe controls work
- [ ] Can complete level 1
- [ ] Level 2 loads after exit

### Before Deployment
- [ ] Tested on multiple devices
- [ ] All 5 levels work
- [ ] No crashes
- [ ] Customized as desired
- [ ] App icon added (optional)
- [ ] Bundle ID configured
- [ ] Code signing configured

---

## 🆘 Need Help?

### Quick Fixes
1. **Clean build**: `Cmd + Shift + K`
2. **Rebuild**: `Cmd + B`
3. **Restart Xcode**: Quit and reopen
4. **Restart Mac**: When all else fails

### Resources
- [Apple Developer Documentation](https://developer.apple.com/documentation/swiftui)
- [SwiftUI Tutorials](https://developer.apple.com/tutorials/swiftui)
- [Xcode Help](https://help.apple.com/xcode/)

### Common Issues
- **"No such module 'SwiftUI'"** → Check deployment target is iOS 15.0+
- **"Signing error"** → Change bundle ID and select your team
- **"Simulator not found"** → Download iOS simulator in Xcode settings
- **"App crashes"** → Check Xcode console for error messages

---

## 🎯 Success Criteria

You're successful when:
✅ App launches without errors
✅ You can swipe to move the player
✅ Walls block movement
✅ Maze reveals for 3 seconds, then fades
✅ Reaching exit loads next level

**If all above work → You're done! 🎉**

---

## 🎮 What's Next?

### Just Playing?
- Open Xcode
- Press `Cmd + R`
- Enjoy the game!

### Want to Customize?
- Read CODE_REFERENCE.md
- Make changes
- Test immediately

### Want to Deploy?
- **iOS**: Follow App Store steps above
- **Web**: Read WEB_VERSION_GUIDE.md

### Want to Learn?
- Study the code structure
- Read GAME_DESIGN.md
- Experiment with changes

---

## 🏁 Final Check

Before you start:
- [ ] I have a Mac
- [ ] I have Xcode (or will install it)
- [ ] I understand this is iOS-only
- [ ] I know Vercel requires web version

If all checked → **You're ready to go!**

---

**Estimated time to first run: 5 minutes**
**Estimated time to first customization: 10 minutes**
**Estimated time to App Store: 2-3 weeks**

**Let's build! 🚀**
