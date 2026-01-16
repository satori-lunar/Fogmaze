# Code Reference Guide

Quick reference for understanding and modifying the Blind Maze codebase.

## Key Files Overview

### 1. BlindMazeApp.swift
**Purpose**: App entry point
```swift
@main
struct BlindMazeApp: App
```
- Minimal boilerplate
- Launches ContentView
- No modifications needed unless adding app-level configuration

---

### 2. Models/Maze.swift
**Purpose**: Data structures and level definitions

#### Key Types:
```swift
enum TileType {
    case empty  // Walkable floor
    case wall   // Impassable barrier
    case exit   // Level goal
}

struct Position {
    var x: Int
    var y: Int
}

struct Maze {
    let width: Int
    let height: Int
    let tiles: [[TileType]]
    let startPosition: Position
    let exitPosition: Position
}
```

#### Adding New Levels:
```swift
// In MazeLevels.levels array:
Maze(
    width: 9,
    height: 9,
    tiles: [
        [.wall, .wall, .wall, ...],
        [.wall, .empty, .empty, ...],
        // ... more rows
    ],
    startPosition: Position(x: 1, y: 1),
    exitPosition: Position(x: 7, y: 7)
)
```

**Tips**:
- Always surround maze with walls
- Ensure path exists from start to exit
- Test on device for size appropriateness

---

### 3. ViewModels/GameViewModel.swift
**Purpose**: Game state and logic

#### Key Properties:
```swift
@Published var currentLevel: Int        // Current level number
@Published var playerPosition: Position // Player location
@Published var maze: Maze              // Current maze data
@Published var visibleTiles: Set<Position> // Tiles player can see
@Published var isRevealing: Bool       // True during 3-sec reveal
@Published var gameState: GameState    // Current game phase
```

#### Key Methods:

**startLevel()**
- Resets player to start position
- Reveals entire maze
- Starts 3-second timer
- Transitions to fog after timer

**movePlayer(direction: Direction)**
- Validates move against walls
- Updates player position with animation
- Updates visible tiles
- Checks for exit reached

**updateVisibleTiles()**
- Calculates which tiles should be visible
- Currently: player tile + 4 adjacent tiles
- Modify here to change visibility radius

**Customization Examples**:

```swift
// Change reveal duration (in startLevel):
Timer.scheduledTimer(withTimeInterval: 5.0, ...) // 5 seconds instead of 3

// Change visibility radius (in updateVisibleTiles):
// Add diagonal neighbors:
for dx in -1...1 {
    for dy in -1...1 {
        visible.insert(Position(x: playerPosition.x + dx, 
                               y: playerPosition.y + dy))
    }
}

// Change fade animation speed (in startLevel):
withAnimation(.easeOut(duration: 2.0)) { ... } // 2 seconds instead of 1
```

---

### 4. Views/ContentView.swift
**Purpose**: Main game container and input handling

#### Structure:
```swift
ContentView
├── Background (near-black)
├── VStack
│   ├── Level number text
│   └── MazeView
└── DragGesture (swipe detection)
```

#### Swipe Detection:
```swift
DragGesture(minimumDistance: 30)
    .onEnded { value in
        // Compares horizontal vs vertical movement
        // Calls viewModel.movePlayer(direction:)
    }
```

**Customization**:
```swift
// Change swipe sensitivity:
DragGesture(minimumDistance: 50) // Require longer swipe

// Add button controls:
HStack {
    Button("↑") { viewModel.movePlayer(direction: .up) }
    // ... more buttons
}
```

---

### 5. Views/MazeView.swift
**Purpose**: Renders maze grid with fog of war

#### Components:

**MazeView**
- Calculates tile size based on screen
- Renders grid of TileViews
- Positions PlayerView

**TileView**
- Renders individual tile based on type
- Shows/hides based on visibility
- Smooth fade transitions

**PlayerView**
- Glowing circle with radial gradient
- Pulse animation
- Outer glow effect

#### Visual Customization:

```swift
// Change wall color (in TileView):
.fill(Color(red: 0.3, green: 0.3, blue: 0.3)) // Lighter gray

// Change player color (in PlayerView):
Color.cyan.opacity(0.6) // Cyan instead of blue

// Change exit color (in TileView):
Color.red.opacity(0.6) // Red instead of green

// Adjust player glow size:
.frame(width: size * 2.0, height: size * 2.0) // Bigger glow

// Change animation speed:
.animation(.easeInOut(duration: 0.5), value: isVisible) // Slower fade
```

---

## Common Modifications

### 1. Add More Levels
**File**: `Models/Maze.swift`
**Location**: `MazeLevels.levels` array
**Action**: Append new Maze struct

### 2. Change Difficulty
**File**: `ViewModels/GameViewModel.swift`

```swift
// Easier (more visibility):
func updateVisibleTiles() {
    // Add 2-tile radius instead of 1
    for pos in playerPosition.neighbors() {
        visible.insert(pos)
        for neighbor in pos.neighbors() {
            visible.insert(neighbor)
        }
    }
}

// Harder (less reveal time):
Timer.scheduledTimer(withTimeInterval: 2.0, ...) // Only 2 seconds
```

### 3. Add Level Select
**File**: `Views/ContentView.swift`

```swift
// Add menu overlay:
if showMenu {
    VStack {
        ForEach(1...5, id: \.self) { level in
            Button("Level \(level)") {
                viewModel.loadLevel(level)
            }
        }
    }
}
```

### 4. Add Sound Effects
**File**: `ViewModels/GameViewModel.swift`

```swift
import AVFoundation

// In movePlayer:
AudioServicesPlaySystemSound(1104) // Play sound

// In reachedExit:
AudioServicesPlaySystemSound(1105) // Different sound
```

### 5. Add Haptic Feedback
**File**: `ViewModels/GameViewModel.swift`

```swift
import UIKit

// In movePlayer:
let generator = UIImpactFeedbackGenerator(style: .light)
generator.impactOccurred()

// In reachedExit:
let generator = UINotificationFeedbackGenerator()
generator.notificationOccurred(.success)
```

---

## Architecture Flow

```
User Swipes
    ↓
ContentView.handleSwipe()
    ↓
GameViewModel.movePlayer(direction:)
    ↓
    ├─→ Check if move is valid (wall collision)
    ├─→ Update playerPosition
    ├─→ Update visibleTiles
    └─→ Check if reached exit
        ↓
    GameViewModel.reachedExit()
        ↓
    GameViewModel.loadNextLevel()
        ↓
    GameViewModel.startLevel()
        ↓
    [Cycle repeats]
```

---

## SwiftUI Concepts Used

### @Published Properties
```swift
@Published var playerPosition: Position
```
- Automatically notifies views of changes
- Triggers view re-render

### @StateObject
```swift
@StateObject private var viewModel = GameViewModel()
```
- Creates and owns the view model
- Persists across view updates

### @ObservedObject
```swift
@ObservedObject var viewModel: GameViewModel
```
- Observes changes from parent-owned object
- Updates view when @Published properties change

### Animations
```swift
withAnimation(.easeInOut(duration: 0.2)) {
    playerPosition = newPosition
}
```
- Smoothly animates property changes
- Applied to all animated properties

---

## Performance Notes

### Efficient Patterns Used:

1. **Set for Visibility**: O(1) lookup time
```swift
visibleTiles.contains(position) // Fast
```

2. **Minimal Re-renders**: Only changed tiles update
```swift
.animation(.easeInOut(duration: 0.3), value: isVisible)
```

3. **Pre-computed Levels**: No generation overhead
```swift
static let levels: [Maze] = [...] // Computed once
```

### Avoid These:

❌ **Array for visibility** (O(n) lookup)
```swift
visibleTiles.first { $0 == position } != nil // Slow
```

❌ **Animating entire grid** (expensive)
```swift
withAnimation { /* update all tiles */ } // Laggy
```

❌ **Generating mazes** (complex algorithms)
```swift
func generateMaze() { /* expensive */ } // Slow startup
```

---

## Debugging Tips

### Print Player Position:
```swift
func movePlayer(direction: Direction) {
    print("Moving from \(playerPosition) to \(newPosition)")
    // ...
}
```

### Visualize Visible Tiles:
```swift
func updateVisibleTiles() {
    print("Visible: \(visibleTiles)")
    // ...
}
```

### Check Level Loading:
```swift
func loadNextLevel() {
    print("Loading level \(currentLevel)")
    // ...
}
```

### Preview in Xcode:
```swift
#Preview {
    ContentView()
}
```
- Live preview in Xcode canvas
- Faster than simulator for UI tweaks

---

## Testing Checklist

### Functionality:
- [ ] Player moves in all 4 directions
- [ ] Walls block movement
- [ ] Exit detection works
- [ ] Level progression works
- [ ] Fog of war reveals correctly
- [ ] 3-second reveal timing accurate

### Visual:
- [ ] Animations smooth at 60fps
- [ ] Colors match design
- [ ] Glow effects visible
- [ ] Fade transitions smooth
- [ ] UI scales on different devices

### Edge Cases:
- [ ] Swipe at screen edge
- [ ] Rapid swipes
- [ ] Swipe during reveal phase
- [ ] Reach exit during reveal
- [ ] Last level completion

---

## Quick Start Checklist

1. ✅ Open `BlindMaze.xcodeproj` in Xcode
2. ✅ Select iPhone simulator (any model)
3. ✅ Press `Cmd + R` to build and run
4. ✅ Test swipe controls
5. ✅ Complete level 1
6. ✅ Verify fog of war works
7. ✅ Check level progression

---

## Need Help?

### Common Issues:

**"Cannot find BlindMazeApp in scope"**
- Clean build folder: `Cmd + Shift + K`
- Rebuild: `Cmd + B`

**"No such module 'SwiftUI'"**
- Check deployment target is iOS 15.0+
- Verify Swift version is 5.0+

**Swipes not working in simulator**
- Use mouse drag instead of click
- Ensure drag distance > 30 points

**Animations choppy**
- Test on physical device (simulator can be slow)
- Reduce animation complexity if needed

---

This reference guide covers the essential aspects of the codebase. For more details, see inline comments in the source files.
