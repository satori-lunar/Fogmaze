# Blind Maze - 30 Level iOS Puzzle Game

A minimalist SwiftUI puzzle game with fog of war mechanics, bomb tiles, and reveal mechanics.

## ✅ Completed Components

### Models
- ✅ `TileType.swift` - All 6 tile types (empty, wall, start, exit, reveal, bomb)
- ✅ `Position.swift` - Grid position with neighbors
- ✅ `Level.swift` - Level data structure with auto-reveal logic
- ✅ `LevelManager.swift` - All 30 predefined levels

### Level Progression
- **Levels 1-10**: Small mazes (5x5-6x6), no bombs, auto-reveal
- **Levels 11-20**: Medium mazes (6x6-7x7), 1-2 bombs, auto-reveal
- **Levels 21-30**: Large mazes (8x8-9x9), 2-4 bombs + reveal tiles, NO auto-reveal

## 🔨 Still Need to Create

### ViewModels
- `GameViewModel.swift` - Main game state management
  - Player position tracking
  - Fog of war visibility
  - Reveal mechanics (auto + tile-based)
  - Bomb detection and game over state
  - Level progression
  - Retry logic

### Views
- `GameView.swift` - Main game container
- `MazeGridView.swift` - Renders the maze grid
- `TileView.swift` - Individual tile rendering
- `PlayerView.swift` - Glowing player circle
- `GameOverView.swift` - "You lost your way" overlay
- `LevelTransitionView.swift` - Level completion fade

### Features to Implement
1. **Fog of War System**
   - Show only player tile + 4 neighbors
   - Smooth fade animations

2. **Reveal Mechanics**
   - Levels 1-20: 3-second auto-reveal at start
   - Levels 21-30: No auto-reveal
   - Reveal tiles: 3-second full maze reveal when stepped on

3. **Bomb System**
   - Hidden by fog
   - Triggers game over when stepped on
   - Reveals full maze with bomb highlighted
   - Shows "You lost your way" message
   - Retry button reloads same level

4. **Level Completion**
   - Brief maze reveal
   - Smooth fade to next level
   - Congratulations on level 30 completion

5. **Visual Style**
   - Dark near-black gradient background
   - Softly rounded tiles
   - Glowing blue player
   - Green glowing exit
   - Red pulsing bombs (when visible)
   - Smooth animations throughout

## 📋 Implementation Checklist

- [x] Core data models
- [x] All 30 level definitions
- [ ] Game state management
- [ ] Fog of war system
- [ ] Reveal mechanics
- [ ] Bomb detection
- [ ] Game over flow
- [ ] Level progression
- [ ] Visual components
- [ ] Animations
- [ ] Testing

## 🎮 Game Rules

### Tile Types
- **0 (Empty)**: Walkable path
- **1 (Wall)**: Impassable barrier
- **2 (Start)**: Player starting position
- **3 (Exit)**: Level goal
- **4 (Reveal)**: Reveals full maze for 3 seconds
- **5 (Bomb)**: Game over when stepped on

### Visibility Rules
- Default: Only player tile + 4 adjacent tiles visible
- Levels 1-20: Full maze revealed for 3 seconds at start
- Levels 21-30: No auto-reveal (use reveal tiles)
- Reveal tiles: 3-second full maze reveal

### Bomb Rules
- Hidden by fog like normal tiles
- Stepping on bomb = game over
- Game over shows full maze with bomb highlighted
- "You lost your way" message
- Retry button reloads same level

## 🎨 Visual Design

- **Background**: Dark gradient (#0a0a0a to #1a1a1a)
- **Walls**: Dark gray (#2a2a2a) with rounded corners
- **Player**: Glowing blue circle with radial gradient
- **Exit**: Soft green glow with pulse animation
- **Bombs**: Muted red tint with slow pulse (when visible)
- **UI**: Minimal - only level number at top

## 🚀 Next Steps

1. Create `GameViewModel.swift` with all game logic
2. Build SwiftUI views for maze rendering
3. Implement fog of war system
4. Add reveal mechanics
5. Implement bomb detection and game over
6. Add smooth animations
7. Test all 30 levels
8. Polish and optimize

This is a complete, production-ready game structure with all levels defined and ready to implement!
