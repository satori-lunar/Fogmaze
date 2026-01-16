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
      className="min-h-screen flex flex-col items-center justify-center select-none touch-none"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      }}
    >
      {/* Level indicator */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 
          className="text-3xl md:text-4xl font-extralight tracking-[0.3em] uppercase"
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textShadow: '0 2px 20px rgba(96, 165, 250, 0.15)',
            letterSpacing: '0.3em',
          }}
        >
          Level {currentLevel}
        </h1>
      </motion.div>

      {/* Maze */}
      <div className="flex-1 flex items-center justify-center w-full px-4">
        <MazeGrid
          maze={maze}
          playerPosition={playerPosition}
          visibleTiles={visibleTiles}
          isRevealing={isRevealing}
        />
      </div>

      {/* Instructions (only show on desktop, very subtle) */}
      <motion.div 
        className="hidden md:block mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p 
          className="text-xs font-light tracking-wider"
          style={{
            color: 'rgba(255, 255, 255, 0.25)',
          }}
        >
          Arrow keys or WASD to move
        </p>
      </motion.div>
    </div>
  );
}
