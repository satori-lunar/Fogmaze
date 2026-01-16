/**
 * Individual tile component
 * Ported from Swift TileView
 */

'use client';

import { motion } from 'framer-motion';
import { TileType } from '@/lib/types';

interface TileProps {
  type: TileType;
  isVisible: boolean;
  size: number;
}

export default function Tile({ type, isVisible, size }: TileProps) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {type === TileType.Wall && isVisible && (
        <div
          className="bg-dark-gray"
          style={{
            width: size * 0.95,
            height: size * 0.95,
            borderRadius: size * 0.15,
          }}
        />
      )}
      
      {type === TileType.Exit && isVisible && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div
            className="rounded-full"
            style={{
              width: size,
              height: size,
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, rgba(34, 197, 94, 0.2) 40%, transparent 70%)',
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
