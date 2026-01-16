/**
 * Main game component
 * Ported from Swift ContentView
 */

'use client';

import { useSwipeable } from 'react-swipeable';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const [touchFeedback, setTouchFeedback] = useState<string | null>(null);

  // Swipe handlers with highly optimized settings for mobile
  const handlers = useSwipeable({
    onSwipedUp: () => {
      setTouchFeedback('↑');
      movePlayer(Direction.Up);
      setTimeout(() => setTouchFeedback(null), 200);
    },
    onSwipedDown: () => {
      setTouchFeedback('↓');
      movePlayer(Direction.Down);
      setTimeout(() => setTouchFeedback(null), 200);
    },
    onSwipedLeft: () => {
      setTouchFeedback('←');
      movePlayer(Direction.Left);
      setTimeout(() => setTouchFeedback(null), 200);
    },
    onSwipedRight: () => {
      setTouchFeedback('→');
      movePlayer(Direction.Right);
      setTimeout(() => setTouchFeedback(null), 200);
    },
    delta: 15, // Sweet spot for responsiveness without accidental swipes
    preventScrollOnSwipe: true,
    trackMouse: true,
    trackTouch: true,
    touchEventOptions: { passive: false },
    swipeDuration: 1000, // Allow slower swipes for better UX
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

  // Prevent default touch behaviors
  useEffect(() => {
    const preventDefaultTouch = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault(); // Prevent pinch zoom
      }
    };

    document.addEventListener('touchmove', preventDefaultTouch, { passive: false });
    document.addEventListener('gesturestart', preventDefaultTouch as any);
    
    return () => {
      document.removeEventListener('touchmove', preventDefaultTouch);
      document.removeEventListener('gesturestart', preventDefaultTouch as any);
    };
  }, []);

  return (
    <div
      {...handlers}
      className="min-h-screen flex flex-col items-center justify-center select-none"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        touchAction: 'none', // Better touch handling
        WebkitTouchCallout: 'none', // Disable iOS callout
        WebkitUserSelect: 'none', // Disable iOS text selection
        userSelect: 'none',
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

      {/* Touch feedback indicator (mobile only) */}
      <AnimatePresence>
        {touchFeedback && (
          <motion.div
            className="md:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="text-6xl font-bold"
              style={{
                color: 'rgba(96, 165, 250, 0.8)',
                textShadow: '0 0 20px rgba(96, 165, 250, 0.6)',
              }}
            >
              {touchFeedback}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
