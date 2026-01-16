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
        width: size * 2,
        height: size * 2,
        left: -size * 0.5,
        top: -size * 0.5,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isRevealing ? 0.4 : 1,
        scale: 1,
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Large outer glow - light source effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, rgba(59, 130, 246, 0.2) 20%, rgba(37, 99, 235, 0.1) 40%, transparent 70%)',
          filter: 'blur(12px)',
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Medium glow */}
      <motion.div
        className="absolute"
        style={{
          width: size * 1.6,
          height: size * 1.6,
          left: '50%',
          top: '50%',
          marginLeft: -size * 0.8,
          marginTop: -size * 0.8,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.5) 0%, rgba(96, 165, 250, 0.3) 40%, transparent 70%)',
          filter: 'blur(6px)',
        }}
      />
      
      {/* Pulse ring */}
      <motion.div
        className="absolute"
        style={{
          width: size * 1.1,
          height: size * 1.1,
          left: '50%',
          top: '50%',
          marginLeft: -size * 0.55,
          marginTop: -size * 0.55,
          borderRadius: '50%',
          border: '2px solid rgba(191, 219, 254, 0.6)',
        }}
        animate={{
          scale: [1, 1.2],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
      
      {/* Inner player circle */}
      <motion.div
        className="absolute"
        style={{
          width: size,
          height: size,
          left: '50%',
          top: '50%',
          marginLeft: -size * 0.5,
          marginTop: -size * 0.5,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(191, 219, 254, 1) 30%, rgba(96, 165, 250, 0.9) 70%, rgba(59, 130, 246, 0.8) 100%)',
          boxShadow: `
            0 0 20px rgba(96, 165, 250, 0.8),
            0 0 40px rgba(59, 130, 246, 0.4),
            inset 0 1px 3px rgba(255, 255, 255, 0.5)
          `,
        }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(96, 165, 250, 0.8), 0 0 40px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.5)',
            '0 0 30px rgba(96, 165, 250, 1), 0 0 60px rgba(59, 130, 246, 0.6), inset 0 1px 3px rgba(255, 255, 255, 0.5)',
            '0 0 20px rgba(96, 165, 250, 0.8), 0 0 40px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
