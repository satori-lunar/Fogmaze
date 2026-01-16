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
  positionsEqual,
  getNeighbors,
  positionToKey,
  isWalkable,
} from './types';
import { getLevel, totalLevels } from './levels';

export function useGame() {
  const [currentLevel, setCurrentLevel] = useState(1);
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
    startLevel(1);
    
    return () => {
      if (revealTimerRef.current) {
        clearTimeout(revealTimerRef.current);
      }
    };
  }, [startLevel]);

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

      // Check if reached exit
      if (positionsEqual(newPosition, maze.exitPosition)) {
        setGameState(GameState.Transitioning);
        setTimeout(() => {
          startLevel(currentLevel + 1);
        }, 500);
      }
    },
    [gameState, playerPosition, maze, currentLevel, updateVisibleTiles, startLevel]
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
