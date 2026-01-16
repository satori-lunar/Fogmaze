/**
 * Maze grid component
 * Ported from Swift MazeView
 */

'use client';

import { motion } from 'framer-motion';
import { Maze, Position, positionToKey, positionsEqual } from '@/lib/types';
import Tile from './Tile';
import Player from './Player';

interface MazeGridProps {
  maze: Maze;
  playerPosition: Position;
  visibleTiles: Set<string>;
  isRevealing: boolean;
}

export default function MazeGrid({
  maze,
  playerPosition,
  visibleTiles,
  isRevealing,
}: MazeGridProps) {
  // Calculate tile size based on viewport
  const calculateTileSize = () => {
    if (typeof window === 'undefined') return 50;
    
    const availableWidth = Math.min(window.innerWidth * 0.9, 800);
    const availableHeight = Math.min(window.innerHeight * 0.7, 800);
    
    const tileWidth = availableWidth / maze.width;
    const tileHeight = availableHeight / maze.height;
    
    return Math.min(tileWidth, tileHeight, 50);
  };

  const tileSize = calculateTileSize();
  const mazeWidth = maze.width * tileSize;
  const mazeHeight = maze.height * tileSize;

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="relative"
        style={{
          width: mazeWidth,
          height: mazeHeight,
        }}
      >
        {/* Maze tiles */}
        <div
          className="grid gap-0"
          style={{
            gridTemplateColumns: `repeat(${maze.width}, ${tileSize}px)`,
            gridTemplateRows: `repeat(${maze.height}, ${tileSize}px)`,
          }}
        >
          {maze.tiles.map((row, y) =>
            row.map((tile, x) => {
              const position = { x, y };
              const key = positionToKey(position);
              const isVisible = isRevealing || visibleTiles.has(key);

              return (
                <Tile
                  key={key}
                  type={tile}
                  isVisible={isVisible}
                  size={tileSize}
                  isFullReveal={isRevealing}
                />
              );
            })
          )}
        </div>

        {/* Player */}
        <motion.div
          className="absolute"
          style={{
            left: playerPosition.x * tileSize + tileSize / 2,
            top: playerPosition.y * tileSize + tileSize / 2,
          }}
          animate={{
            left: playerPosition.x * tileSize + tileSize / 2,
            top: playerPosition.y * tileSize + tileSize / 2,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
        >
          <Player size={tileSize * 0.6} isRevealing={isRevealing} />
        </motion.div>
      </div>
    </div>
  );
}
