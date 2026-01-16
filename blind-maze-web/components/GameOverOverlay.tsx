/**
 * Game Over overlay component
 * Shown when player steps on a bomb tile
 */

'use client';

import { motion } from 'framer-motion';

interface GameOverOverlayProps {
  onRetry: () => void;
  onGoHome?: () => void;
}

export default function GameOverOverlay({ onRetry, onGoHome }: GameOverOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      {/* Fade to black background */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.92 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      
      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
      >
        {/* Message */}
        <motion.p
          className="text-2xl md:text-3xl font-light text-gray-300 text-center tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          You lost your way.
        </motion.p>
        
        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <motion.button
            onClick={onRetry}
            className="px-8 py-3 rounded-xl bg-gradient-to-b from-gray-700 to-gray-800 text-gray-200 font-medium tracking-wide
                       hover:from-gray-600 hover:to-gray-700 transition-all duration-300
                       shadow-lg hover:shadow-xl active:scale-95"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Retry Level
          </motion.button>
          
          {onGoHome && (
            <motion.button
              onClick={onGoHome}
              className="px-8 py-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
            >
              Go Home
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
