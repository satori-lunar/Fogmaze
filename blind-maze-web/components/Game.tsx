/**
 * Main game component
 * Ported from Swift ContentView
 */

'use client';

import { useSwipeable } from 'react-swipeable';
import { useEffect } from 'react';
import { Direction } from '@/lib/types';
import { useGame } from '@/lib/useGame';
import MazeGrid from './MazeGrid';

export default function Game() {
  const {
    currentLevel,
    playerPosition,
    maze,
    visibleTiles,
    isRevealing,
    gameState,
    movePlayer,
    totalLevels,
  } = useGame();

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedUp: () => movePlayer(Direction.Up),
    onSwipedDown: () => movePlayer(Direction.Down),
    onSwipedLeft: () => movePlayer(Direction.Left),
    onSwipedRight: () => movePlayer(Direction.Right),
    delta: 30,
    trackMouse: true,
    trackTouch: true,
  });

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          movePlayer(Direction.Up);
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          movePlayer(Direction.Down);
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          movePlayer(Direction.Left);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          movePlayer(Direction.Right);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [movePlayer]);

  return (
    <div
      {...handlers}
      className="min-h-screen bg-near-black flex flex-col items-center justify-center select-none touch-none"
    >
      {/* Level indicator */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-light text-white/80 tracking-wide">
          Level {currentLevel}
        </h1>
      </div>

      {/* Maze */}
      <div className="flex-1 flex items-center justify-center w-full px-4">
        <MazeGrid
          maze={maze}
          playerPosition={playerPosition}
          visibleTiles={visibleTiles}
          isRevealing={isRevealing}
        />
      </div>

      {/* Instructions (only show on desktop) */}
      <div className="hidden md:block mb-8 text-center">
        <p className="text-sm text-white/40">
          Use arrow keys or WASD to move • Swipe on touch devices
        </p>
      </div>
    </div>
  );
}
