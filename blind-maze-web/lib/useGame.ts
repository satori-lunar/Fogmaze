/**
 * Game state management hook
 * Ported from Swift GameViewModel
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Direction,
  GameState,
  Position,
  Maze,
  TileType,
  positionsEqual,
  getNeighbors,
  positionToKey,
  isWalkable,
  getTileAt,
} from './types';
import { getLevel, totalLevels } from './levels';

interface UseGameOptions {
  initialLevel?: number;
  onLevelComplete?: (level: number, hitBomb: boolean) => void;
}

export function useGame(options: UseGameOptions = {}) {
  const { initialLevel = 1, onLevelComplete } = options;
  const [currentLevel, setCurrentLevel] = useState(initialLevel);
  const [hitBombThisLevel, setHitBombThisLevel] = useState(false);
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 1, y: 1 });
  const [maze, setMaze] = useState<Maze>(() => getLevel(1)!);
  const [visibleTiles, setVisibleTiles] = useState<Set<string>>(new Set());
  const [isRevealing, setIsRevealing] = useState(true);
  const [gameState, setGameState] = useState<GameState>(GameState.Revealing);
  
  const revealTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Update visible tiles based on player position
  const updateVisibleTiles = useCallback((position: Position) => {
    const visible = new Set<string>();
    
    // Add player position
    visible.add(positionToKey(position));
    
    // Add immediate neighbors (1-tile radius)
    getNeighbors(position).forEach((neighbor) => {
      visible.add(positionToKey(neighbor));
    });
    
    setVisibleTiles(visible);
  }, []);

  // Get all positions in the maze
  const getAllPositions = useCallback((currentMaze: Maze): Position[] => {
    const positions: Position[] = [];
    for (let y = 0; y < currentMaze.height; y++) {
      for (let x = 0; x < currentMaze.width; x++) {
        positions.push({ x, y });
      }
    }
    return positions;
  }, []);

  // Start a level
  const startLevel = useCallback(
    (levelNumber: number) => {
      const newMaze = getLevel(levelNumber);
      if (!newMaze) {
        // No more levels, restart from level 1
        setCurrentLevel(1);
        const firstMaze = getLevel(1)!;
        setMaze(firstMaze);
        setPlayerPosition(firstMaze.startPosition);
        setGameState(GameState.Revealing);
        setIsRevealing(true);
        
        // Reveal entire maze
        const allPositions = getAllPositions(firstMaze);
        const allKeys = new Set(allPositions.map(positionToKey));
        setVisibleTiles(allKeys);
        
        // Hide after 3 seconds
        if (revealTimerRef.current) {
          clearTimeout(revealTimerRef.current);
        }
        revealTimerRef.current = setTimeout(() => {
          setIsRevealing(false);
          setGameState(GameState.Playing);
          updateVisibleTiles(firstMaze.startPosition);
        }, 3000);
        
        return;
      }

      setCurrentLevel(levelNumber);
      setMaze(newMaze);
      setPlayerPosition(newMaze.startPosition);
      setGameState(GameState.Revealing);
      setIsRevealing(true);
      setHitBombThisLevel(false); // Reset bomb tracking for new level

      // Reveal entire maze
      const allPositions = getAllPositions(newMaze);
      const allKeys = new Set(allPositions.map(positionToKey));
      setVisibleTiles(allKeys);

      // Hide after 3 seconds
      if (revealTimerRef.current) {
        clearTimeout(revealTimerRef.current);
      }
      revealTimerRef.current = setTimeout(() => {
        setIsRevealing(false);
        setGameState(GameState.Playing);
        updateVisibleTiles(newMaze.startPosition);
      }, 3000);
    },
    [getAllPositions, updateVisibleTiles]
  );

  // Initialize game
  useEffect(() => {
    try {
      startLevel(initialLevel);
    } catch (error) {
      console.error('Error initializing game:', error);
    }
    
    return () => {
      if (revealTimerRef.current) {
        clearTimeout(revealTimerRef.current);
      }
    };
  }, [startLevel, initialLevel]);

  // Move player
  const movePlayer = useCallback(
    (direction: Direction) => {
      if (gameState !== GameState.Playing) return;

      let newPosition: Position;
      switch (direction) {
        case Direction.Up:
          newPosition = { x: playerPosition.x, y: playerPosition.y - 1 };
          break;
        case Direction.Down:
          newPosition = { x: playerPosition.x, y: playerPosition.y + 1 };
          break;
        case Direction.Left:
          newPosition = { x: playerPosition.x - 1, y: playerPosition.y };
          break;
        case Direction.Right:
          newPosition = { x: playerPosition.x + 1, y: playerPosition.y };
          break;
      }

      // Check if move is valid
      if (!isWalkable(maze, newPosition)) return;

      // Move player
      setPlayerPosition(newPosition);
      updateVisibleTiles(newPosition);

      // Check tile type at new position
      const tileType = getTileAt(maze, newPosition);

      // Check if stepped on bomb
      if (tileType === TileType.Bomb) {
        setHitBombThisLevel(true);
        setGameState(GameState.GameOver);
        setIsRevealing(true); // Show bombs on game over
        // Reveal entire maze
        const allPositions = getAllPositions(maze);
        const allKeys = new Set(allPositions.map(positionToKey));
        setVisibleTiles(allKeys);
        return;
      }

      // Check if stepped on reveal tile
      if (tileType === TileType.Reveal) {
        setIsRevealing(true); // Show bombs during reveal
        // Reveal entire maze for 3 seconds
        const allPositions = getAllPositions(maze);
        const allKeys = new Set(allPositions.map(positionToKey));
        setVisibleTiles(allKeys);
        
        // Hide after 3 seconds
        if (revealTimerRef.current) {
          clearTimeout(revealTimerRef.current);
        }
        revealTimerRef.current = setTimeout(() => {
          setIsRevealing(false);
          if (gameState === GameState.Playing) {
            updateVisibleTiles(newPosition);
          }
        }, 3000);
      }

      // Check if reached exit
      if (positionsEqual(newPosition, maze.exitPosition)) {
        setGameState(GameState.Transitioning);
        // Reveal maze briefly before transition
        const allPositions = getAllPositions(maze);
        const allKeys = new Set(allPositions.map(positionToKey));
        setVisibleTiles(allKeys);
        
        // Notify level completion
        const bombFree = !hitBombThisLevel;
        onLevelComplete?.(currentLevel, bombFree);
        
        setTimeout(() => {
          setHitBombThisLevel(false); // Reset for next level
          startLevel(currentLevel + 1);
        }, 1000);
      }
    },
    [gameState, playerPosition, maze, currentLevel, updateVisibleTiles, startLevel, getAllPositions, hitBombThisLevel, onLevelComplete]
  );

  // Restart current level
  const restartLevel = useCallback(() => {
    startLevel(currentLevel);
  }, [currentLevel, startLevel]);

  return {
    currentLevel,
    playerPosition,
    maze,
    visibleTiles,
    isRevealing,
    gameState,
    movePlayer,
    restartLevel,
    totalLevels,
  };
}
