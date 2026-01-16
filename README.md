# Blind Maze

A minimalist iOS puzzle game built with SwiftUI featuring fog of war mechanics.

## Overview

Blind Maze is a grid-based puzzle game where players navigate through mazes with limited visibility. At the start of each level, the entire maze is revealed for 3 seconds before fading into darkness, leaving only a 1-tile radius visible around the player.

## Features

- **Fog of War Mechanic**: Maze revealed for 3 seconds at level start, then hidden except for immediate surroundings
- **Grid-Based Movement**: Swipe up, down, left, or right to move one tile at a time
- **5 Handcrafted Levels**: Progressive difficulty with varied maze layouts
- **Minimalist UI**: Clean interface showing only the level number
- **Smooth Animations**: Elegant fade transitions and glowing effects
- **Beautiful Visuals**:
  - Near-black background
  - Dark gray walls with rounded corners
  - Softly glowing blue player circle
  - Subtle green glow for exit

## Requirements

- iOS 15.0 or later
- Xcode 15.0 or later
- Swift 5.0 or later

## Installation

1. Open `BlindMaze.xcodeproj` in Xcode
2. Select your target device or simulator
3. Press `Cmd + R` to build and run

## How to Play

1. **Start Level**: When a level begins, memorize the maze layout during the 3-second reveal
2. **Navigate**: Swipe in any direction (up, down, left, right) to move your glowing circle
3. **Find Exit**: Reach the green glowing exit to advance to the next level
4. **Limited Vision**: Only tiles immediately adjacent to your position are visible

## Project Structure

```
BlindMaze/
├── BlindMazeApp.swift          # App entry point
├── Models/
│   └── Maze.swift              # Maze data structures and level definitions
├── ViewModels/
│   └── GameViewModel.swift     # Game state management and logic
└── Views/
    ├── ContentView.swift       # Main game view with swipe controls
    └── MazeView.swift          # Maze rendering with fog of war
```

## Code Architecture

- **MVVM Pattern**: Clean separation between views and business logic
- **SwiftUI**: Modern declarative UI framework
- **Combine**: Reactive state management with `@Published` properties
- **Grid-Based System**: Simple coordinate-based movement and collision detection

## Customization

### Adding New Levels

Edit `BlindMaze/Models/Maze.swift` and add new maze definitions to the `MazeLevels.levels` array:

```swift
Maze(
    width: 9,
    height: 9,
    tiles: [
        // Define your maze layout using .wall, .empty, and .exit
    ],
    startPosition: Position(x: 1, y: 1),
    exitPosition: Position(x: 7, y: 7)
)
```

### Adjusting Visibility

In `GameViewModel.swift`, modify the `updateVisibleTiles()` method to change the fog of war radius.

### Changing Reveal Duration

In `GameViewModel.swift`, adjust the timer interval in `startLevel()`:

```swift
Timer.scheduledTimer(withTimeInterval: 3.0, repeats: false) // Change 3.0 to desired seconds
```

## Design Philosophy

- **Minimalism**: No timers, scores, or distracting UI elements
- **Clarity**: Clean code with clear separation of concerns
- **Smooth Experience**: Emphasis on fluid animations and responsive controls
- **Memory Challenge**: Tests spatial memory and navigation skills

## Note on Deployment

This is a native iOS application built with SwiftUI. It is designed to run on iOS devices and cannot be deployed to web hosting platforms like Vercel. To distribute this app:

- **TestFlight**: For beta testing
- **App Store**: For public release
- **Ad-Hoc/Enterprise**: For internal distribution

If you need a web-based version that can be deployed to Vercel, the game would need to be rebuilt using web technologies (React, TypeScript, HTML5 Canvas, etc.).

## License

This project is provided as-is for educational and personal use.

## Credits

Built with SwiftUI for iOS
