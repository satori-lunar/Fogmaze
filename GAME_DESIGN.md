# Blind Maze - Game Design Document

## Core Concept

A minimalist puzzle game that tests spatial memory through fog of war mechanics. Players must memorize maze layouts during a brief reveal period, then navigate using only immediate visibility.

## Gameplay Loop

```
Level Start
    ↓
Maze Revealed (3 seconds)
    ↓
Fade to Fog of War
    ↓
Navigate with Limited Vision
    ↓
Reach Exit
    ↓
Next Level
```

## Visual Design

### Color Palette
- **Background**: RGB(13, 13, 13) - Near black
- **Walls**: RGB(51, 51, 51) - Dark gray with rounded corners
- **Player**: Blue gradient with white core and soft glow
- **Exit**: Green radial gradient with subtle glow
- **Fog**: Complete darkness (invisible tiles)

### Visual Effects
1. **Fade Animation**: 1-second smooth transition from revealed to hidden
2. **Player Glow**: Radial gradient with pulse animation (1.5s cycle)
3. **Movement**: 0.2s ease-in-out animation
4. **Exit Glow**: Subtle radial gradient when visible

## Game Mechanics

### Movement System
- **Grid-Based**: Player moves one tile at a time
- **Collision Detection**: Cannot move through walls
- **Swipe Controls**: 
  - Swipe up → Move up
  - Swipe down → Move down
  - Swipe left → Move left
  - Swipe right → Move right
- **Minimum Swipe Distance**: 30 points to prevent accidental moves

### Visibility System
- **Reveal Phase**: All tiles visible for 3 seconds
- **Fog Phase**: Only player tile + 4 adjacent tiles visible (1-tile radius)
- **Dynamic Updates**: Visibility updates immediately on player movement

### Level Progression
- **5 Levels Total**: Increasing complexity
- **Auto-Advance**: Reaching exit automatically loads next level
- **Loop**: After level 5, restart from level 1
- **No Fail State**: Players can explore indefinitely

## Level Design

### Level 1: Introduction (7×7)
- Simple path with one branch
- Teaches basic navigation
- Short path to exit

### Level 2: Branching (9×9)
- Multiple paths
- Some dead ends
- Tests memory of layout

### Level 3: Spiral (11×11)
- Circular pattern
- Center exit
- Requires planning route

### Level 4: Zigzag (9×13)
- Long vertical maze
- Back-and-forth pattern
- Tests patience and memory

### Level 5: Complex (13×13)
- Multiple intersections
- Many decision points
- Ultimate challenge

## Technical Architecture

### MVVM Pattern

```
View Layer (SwiftUI)
    ├── ContentView: Main container + swipe handling
    └── MazeView: Grid rendering
        ├── TileView: Individual tile rendering
        └── PlayerView: Player character with glow

ViewModel Layer
    └── GameViewModel: Game state + logic
        ├── Level management
        ├── Player movement
        ├── Visibility calculations
        └── Win condition detection

Model Layer
    └── Maze: Data structures
        ├── TileType enum
        ├── Position struct
        ├── Maze struct
        └── MazeLevels: Level definitions
```

### State Management

**Published Properties** (Observable):
- `currentLevel`: Int
- `playerPosition`: Position
- `maze`: Maze
- `visibleTiles`: Set<Position>
- `isRevealing`: Bool
- `gameState`: GameState enum

**Game States**:
1. `revealing`: 3-second reveal phase
2. `playing`: Normal gameplay with fog
3. `transitioning`: Brief pause when reaching exit

## User Experience

### Onboarding
- No tutorial needed
- Level 1 teaches through play
- Intuitive swipe controls

### Feedback
- **Movement**: Smooth animation confirms input
- **Invalid Move**: No response (wall collision)
- **Level Complete**: Brief pause, then new level loads
- **Visual Clarity**: High contrast between visible/hidden tiles

### Accessibility
- Large touch targets (swipe anywhere)
- No time pressure
- Clear visual hierarchy
- No sound required (visual-only game)

## Performance Considerations

### Optimization
- Minimal re-renders (only affected tiles)
- Set-based visibility checks (O(1) lookup)
- Pre-defined levels (no generation overhead)
- Efficient SwiftUI animations

### Memory
- Small grid sizes (max 13×13)
- 5 levels stored in memory
- Minimal asset usage
- No texture loading

## Future Enhancement Ideas

### Potential Features (Not Implemented)
- Level editor
- Procedural maze generation
- Difficulty settings (reveal time, visibility radius)
- Move counter
- Undo functionality
- Haptic feedback
- Sound effects
- More levels
- Achievement system
- Dark mode toggle (already dark!)

### Monetization Options (Not Implemented)
- Premium level packs
- Remove ads (none currently)
- Cosmetic player skins
- Maze themes

## Design Principles

1. **Minimalism**: Remove everything unnecessary
2. **Clarity**: Clear visual communication
3. **Smoothness**: Fluid animations throughout
4. **Memory Challenge**: Core mechanic, not gimmick
5. **No Pressure**: Explore at your own pace
6. **Progressive Difficulty**: Gentle learning curve

## Technical Requirements

- iOS 15.0+
- SwiftUI framework
- Combine framework (for reactive state)
- Portrait orientation
- iPhone and iPad compatible

## File Organization

```
BlindMaze/
├── App Entry
│   └── BlindMazeApp.swift
├── Models (Data)
│   └── Maze.swift
├── ViewModels (Logic)
│   └── GameViewModel.swift
├── Views (UI)
│   ├── ContentView.swift
│   └── MazeView.swift
├── Resources
│   ├── Info.plist
│   └── Assets.xcassets/
└── Documentation
    ├── README.md
    ├── SETUP_INSTRUCTIONS.md
    └── GAME_DESIGN.md
```

## Testing Checklist

- [ ] All 5 levels load correctly
- [ ] Swipe controls work in all directions
- [ ] Wall collision prevents movement
- [ ] Fog reveals only adjacent tiles
- [ ] 3-second reveal works properly
- [ ] Fade animation is smooth
- [ ] Reaching exit advances level
- [ ] Level 5 loops back to Level 1
- [ ] Player glow animates continuously
- [ ] Exit glow visible when in range
- [ ] Works on various iPhone sizes
- [ ] Works on iPad
- [ ] Portrait orientation locked
- [ ] No performance issues
- [ ] No memory leaks

## Known Limitations

1. **Platform**: iOS only (SwiftUI)
2. **Deployment**: Cannot deploy to Vercel (native app)
3. **Levels**: Fixed set of 5 levels
4. **Controls**: Swipe only (no button alternative)
5. **Save State**: No persistence between sessions
6. **Orientation**: Portrait only

## Conclusion

Blind Maze is a polished, minimalist puzzle game that successfully implements fog of war mechanics in a mobile-friendly format. The clean code architecture makes it easy to extend with new levels or features while maintaining the core experience.
