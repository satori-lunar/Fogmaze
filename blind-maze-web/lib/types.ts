/**
 * Core game types and data structures
 * Ported from Swift to TypeScript
 */

export enum TileType {
  Empty = 'empty',
  Wall = 'wall',
  Exit = 'exit',
  Bomb = 'bomb',
  Reveal = 'reveal',
}

export interface Position {
  x: number;
  y: number;
}

export interface Maze {
  width: number;
  height: number;
  tiles: TileType[][];
  startPosition: Position;
  exitPosition: Position;
}

export enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

export enum GameState {
  Revealing = 'revealing',
  Playing = 'playing',
  Transitioning = 'transitioning',
  GameOver = 'gameover',
}

// Helper functions
export function positionsEqual(a: Position, b: Position): boolean {
  return a.x === b.x && a.y === b.y;
}

export function getNeighbors(position: Position): Position[] {
  return [
    { x: position.x, y: position.y - 1 }, // up
    { x: position.x, y: position.y + 1 }, // down
    { x: position.x - 1, y: position.y }, // left
    { x: position.x + 1, y: position.y }, // right
  ];
}

export function positionToKey(position: Position): string {
  return `${position.x},${position.y}`;
}

export function getTileAt(maze: Maze, position: Position): TileType {
  if (
    position.x < 0 ||
    position.x >= maze.width ||
    position.y < 0 ||
    position.y >= maze.height
  ) {
    return TileType.Wall;
  }
  return maze.tiles[position.y][position.x];
}

export function isWalkable(maze: Maze, position: Position): boolean {
  const tile = getTileAt(maze, position);
  return tile === TileType.Empty || tile === TileType.Exit || tile === TileType.Bomb || tile === TileType.Reveal;
}
