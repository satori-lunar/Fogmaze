/**
 * Player character component
 * Ported from Swift PlayerView
 */

'use client';

import { motion } from 'framer-motion';

interface PlayerProps {
  size: number;
  isRevealing: boolean;
}

export default function Player({ size, isRevealing }: PlayerProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size * 1.6,
        height: size * 1.6,
        left: -size * 0.3,
        top: -size * 0.3,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isRevealing ? 0.5 : 1,
        scale: 1,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 30%, rgba(59, 130, 246, 0.1) 60%, transparent 80%)',
          filter: 'blur(3px)',
        }}
      />
      
      {/* Pulse ring */}
      <motion.div
        className="absolute"
        style={{
          width: size * 0.9,
          height: size * 0.9,
          left: '50%',
          top: '50%',
          marginLeft: -size * 0.45,
          marginTop: -size * 0.45,
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.5)',
        }}
        animate={{
          scale: [1, 1.1],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Inner player circle */}
      <div
        className="absolute"
        style={{
          width: size,
          height: size,
          left: '50%',
          top: '50%',
          marginLeft: -size * 0.5,
          marginTop: -size * 0.5,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(59, 130, 246, 0.7) 100%)',
        }}
      />
    </motion.div>
  );
}
