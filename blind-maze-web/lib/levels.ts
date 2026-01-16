/**
 * Maze level definitions
 * Ported from Swift MazeLevels
 */

import { Maze, TileType } from './types';

const { Empty, Wall, Exit } = TileType;

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

  // Level 3 - Spiral pattern
  {
    width: 11,
    height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Exit, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
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
];

export function getLevel(levelNumber: number): Maze | null {
  const index = levelNumber - 1;
  if (index < 0 || index >= levels.length) {
    return null;
  }
  return levels[index];
}

export const totalLevels = levels.length;
