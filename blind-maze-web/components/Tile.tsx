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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.95
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {type === TileType.Wall && isVisible && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            width: size * 0.92,
            height: size * 0.92,
            borderRadius: size * 0.2,
            background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
            boxShadow: `
              inset 0 1px 2px rgba(255, 255, 255, 0.05),
              inset 0 -1px 2px rgba(0, 0, 0, 0.3),
              0 2px 8px rgba(0, 0, 0, 0.4)
            `,
          }}
        />
      )}
      
      {type === TileType.Exit && isVisible && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ width: size, height: size }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Outer glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: size * 1.4,
              height: size * 1.4,
              background: 'radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)',
              filter: 'blur(8px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Inner glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: size * 0.7,
              height: size * 0.7,
              background: 'radial-gradient(circle, rgba(134, 239, 172, 0.8) 0%, rgba(74, 222, 128, 0.4) 50%, transparent 80%)',
              boxShadow: '0 0 20px rgba(74, 222, 128, 0.5)',
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
