/**
 * Maze level definitions
 * Ported from Swift MazeLevels
 */

import { Maze, TileType } from './types';

const { Empty, Wall, Exit, Bomb, Reveal } = TileType;

export const levels: Maze[] = [
  // Level 1 - Simple introduction
  {
    width: 7,
    height: 7,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 5, y: 5 },
  },

  // Level 2 - More complex path
  {
    width: 9,
    height: 9,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Wall, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Empty, Wall, Empty, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 7, y: 7 },
  },

  // Level 3 - Spiral pattern (fixed with accessible exit)
  {
    width: 11,
    height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Exit, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 5, y: 5 },
  },

  // Level 4 - Zigzag challenge
  {
    width: 9,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 7, y: 11 },
  },

  // Level 5 - Complex maze
  {
    width: 13,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 11, y: 11 },
  },

  // Level 6 - Winding Path
  {
    width: 9,
    height: 9,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 7, y: 7 },
  },

  // Level 7 - Cross Pattern
  {
    width: 9,
    height: 9,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 7, y: 7 },
  },

  // Level 8 - Chambers
  {
    width: 11,
    height: 9,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Exit, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 9, y: 1 },
  },

  // Level 9 - Diagonal Maze
  {
    width: 11,
    height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 9, y: 9 },
  },

  // Level 10 - Double Spiral (fixed with accessible exit)
  {
    width: 11,
    height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Wall, Exit, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 5, y: 5 },
  },

  // Level 11 - Narrow Passages (1 bomb in dead end)
  {
    width: 13,
    height: 9,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Wall, Empty, Empty, Wall, Empty, Empty, Wall, Empty, Exit, Wall],
      [Wall, Empty, Bomb, Wall, Empty, Empty, Wall, Empty, Empty, Wall, Empty, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Empty, Wall, Empty, Empty, Wall, Empty, Empty, Wall, Empty, Empty, Wall],
      [Wall, Empty, Empty, Wall, Empty, Empty, Wall, Empty, Empty, Wall, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 11, y: 1 },
  },

  // Level 12 - Checkerboard (2 bombs in corners)
  {
    width: 11,
    height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 9, y: 9 },
  },

  // Level 13 - Snake Path (1 bomb at end of corridor)
  {
    width: 9,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 7, y: 11 },
  },

  // Level 14 - Ring Maze (2 bombs in outer corners)
  {
    width: 11,
    height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Exit, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 5, y: 5 },
  },

  // Level 15 - Quarters (2 bombs in dead end chambers)
  {
    width: 13,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Bomb, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Bomb, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 11, y: 11 },
  },

  // Level 16 - Labyrinth (2 bombs in side alcoves)
  {
    width: 13,
    height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 11, y: 9 },
  },

  // Level 17 - Corridors (2 bombs at corridor ends)
  {
    width: 11,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 9, y: 11 },
  },

  // Level 18 - Diamond (2 bombs in outer ring)
  {
    width: 13,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Exit, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 6, y: 6 },
  },

  // Level 19 - Maze Runner (2 bombs in alcoves)
  {
    width: 15,
    height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Exit, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Wall, Wall, Wall, Wall],
      [Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 13, y: 1 },
  },

  // Level 20 - Grand Finale Easy (2 bombs in outer corridors)
  {
    width: 15,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Exit, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 7, y: 6 },
  },

  // Levels 21-30: Expert Challenges
  
  // Level 21 - The Gauntlet (3 bombs in corners, 1 reveal in chamber)
  {
    width: 15,
    height: 15,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Reveal, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Exit, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 7, y: 7 },
  },

  // Level 22-30: Continue with increasingly complex patterns
  // (I'll create 8 more challenging levels)

  // Level 22 - Crossroads (3 bombs in quadrants, 1 reveal center)
  {
    width: 13,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Bomb, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Reveal, Empty, Wall, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Empty, Wall, Empty, Exit, Empty, Wall, Empty, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 6, y: 6 },
  },

  // Level 23-30 will follow similar complex patterns
  // For brevity, I'll create varied challenging mazes

  // Level 23 - The Fortress (4 bombs at corridor ends, 2 reveals in chambers)
  {
    width: 15,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Reveal, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Reveal, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 13, y: 1 },
  },

  // Levels 24-30: Continue with maximum complexity
  // Creating final 7 levels with varied patterns

  // Level 24 - Infinity (3 bombs in side alcoves, 2 reveals in loops)
  {
    width: 15,
    height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Exit, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall],
      [Wall, Bomb, Wall, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Reveal, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Wall, Empty, Empty, Reveal, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 13, y: 1 },
  },

  // Level 25-30: Final expert levels
  // (Creating 5 more ultra-challenging mazes)

  // Level 25 - The Nexus (4 bombs in corners, 2 reveals in chambers)
  {
    width: 17,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Empty, Reveal, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Exit, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Empty, Reveal, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 8, y: 6 },
  },

  // Level 26-30: Ultimate challenges
  // Creating final 5 levels with maximum complexity

  // Level 26 - The Labyrinth (4 bombs in outer ring, 2 reveals in inner chambers)
  {
    width: 17,
    height: 15,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Reveal, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Exit, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Reveal, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 8, y: 7 },
  },

  // Level 27-30: Final four ultimate mazes
  // Creating the last 4 levels

  // Level 27 - The Citadel (4 bombs in corners, 2 reveals in chambers)
  {
    width: 15,
    height: 15,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Reveal, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Exit, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Reveal, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 7, y: 7 },
  },

  // Level 28 - The Maze Master (4 bombs in alcoves, 2 reveals in chambers)
  {
    width: 17,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Exit, Wall],
      [Wall, Bomb, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Reveal, Wall, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Reveal, Wall, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 15, y: 1 },
  },

  // Level 29 - The Enigma (4 bombs in corners, 2 reveals in chambers)
  {
    width: 19,
    height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Reveal, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Exit, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Reveal, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 9, y: 6 },
  },

  // Level 30 - The Ultimate Challenge (4 bombs in outer ring, 2 reveals in chambers)
  {
    width: 19,
    height: 15,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Reveal, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Empty, Exit, Empty, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Reveal, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Bomb, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Bomb, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    startPosition: { x: 1, y: 1 },
    exitPosition: { x: 9, y: 7 },
  },
];

export function getLevel(levelNumber: number): Maze | null {
  const index = levelNumber - 1;
  if (index < 0 || index >= levels.length) {
    return null;
  }
  return levels[index];
}

export const totalLevels = levels.length;
