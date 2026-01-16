# Setup Instructions for Blind Maze

## Important Note About Deployment

**This is a native iOS application and CANNOT be deployed to Vercel.** Vercel is a web hosting platform for JavaScript/TypeScript applications, while this game is built with SwiftUI for iOS devices.

## Options for Running This Game

### Option 1: Run as iOS App (Current Implementation)

1. **Requirements**:
   - macOS computer with Xcode 15.0 or later
   - iOS device or iOS Simulator

2. **Steps**:
   ```bash
   # Open the project in Xcode
   open BlindMaze.xcodeproj
   ```
   
3. In Xcode:
   - Select your target device (iPhone simulator or connected device)
   - Press `Cmd + R` to build and run
   - The game will launch on your selected device

4. **For App Store Distribution**:
   - Enroll in Apple Developer Program ($99/year)
   - Configure signing & capabilities in Xcode
   - Submit through App Store Connect

### Option 2: Convert to Web App for Vercel (Requires Rebuild)

If you need to deploy to Vercel, the game would need to be completely rebuilt using web technologies:

**Technology Stack for Web Version**:
- React or Next.js (TypeScript)
- HTML5 Canvas or CSS Grid for rendering
- Touch/swipe gesture libraries
- Vercel deployment

**This would require**:
- Rewriting all SwiftUI views as React components
- Converting Swift logic to TypeScript
- Implementing web-based animations (CSS/Canvas)
- Setting up touch controls for mobile browsers

## Current Project Structure

```
BlindMaze/
├── BlindMaze.xcodeproj/        # Xcode project file
├── BlindMaze/
│   ├── BlindMazeApp.swift      # App entry point
│   ├── Info.plist              # App configuration
│   ├── Assets.xcassets/        # App icons and assets
│   ├── Models/
│   │   └── Maze.swift          # Game data models
│   ├── ViewModels/
│   │   └── GameViewModel.swift # Game logic
│   └── Views/
│       ├── ContentView.swift   # Main view
│       └── MazeView.swift      # Maze rendering
├── README.md                   # Documentation
└── .gitignore                  # Git ignore rules
```

## Testing the Game

### In iOS Simulator:
- Swipe gestures work with mouse drag
- Test on different iPhone models for screen size compatibility

### On Physical Device:
- Connect iPhone/iPad via USB
- Trust the computer on your device
- Select device in Xcode and run

## Next Steps

**If you want to keep it as iOS app**:
- Open in Xcode and run
- Test gameplay
- Add app icon if desired
- Submit to App Store

**If you need web deployment**:
- Let me know and I can create a web-based version using React/Next.js
- This version can then be deployed to Vercel
- Will maintain the same gameplay and visual style

## Questions?

- **Q: Can I run this without a Mac?**
  - A: No, iOS development requires macOS and Xcode. For cross-platform, we'd need the web version.

- **Q: Can this work on Android?**
  - A: Not as-is. Would need to rebuild in React Native or create web version.

- **Q: How do I deploy to Vercel?**
  - A: This SwiftUI app cannot be deployed to Vercel. Need web version instead.
