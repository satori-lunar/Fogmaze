/**
 * Home Screen - Main menu with level, hearts, gold display
 */

'use client';

import { motion } from 'framer-motion';
import { PlayerProfile, CONSTANTS } from '@/lib/profileStore';

interface HomeScreenProps {
  profile: PlayerProfile;
  onPlay: () => void;
  onOpenStore: () => void;
}

export default function HomeScreen({ profile, onPlay, onOpenStore }: HomeScreenProps) {
  const canPlay = profile.hearts > 0;

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center p-6"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)',
      }}
    >
      {/* Top bar - Hearts and Gold */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
        {/* Hearts */}
        <div className="flex items-center gap-2">
          {Array.from({ length: CONSTANTS.MAX_HEARTS }).map((_, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {i < profile.hearts ? '❤️' : '🖤'}
            </motion.span>
          ))}
        </div>

        {/* Gold */}
        <motion.button
          onClick={onOpenStore}
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.3)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">🪙</span>
          <span className="font-bold text-black">{profile.gold}</span>
        </motion.button>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1
          className="text-5xl md:text-6xl font-extralight tracking-[0.2em] uppercase"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
          }}
        >
          Fog Maze
        </h1>
        <p className="text-gray-500 text-sm mt-2 tracking-widest uppercase">
          Navigate the Unknown
        </p>
      </motion.div>

      {/* Level indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12 text-center"
      >
        <div className="text-gray-400 text-sm uppercase tracking-wider mb-1">
          Current Level
        </div>
        <div
          className="text-6xl font-light"
          style={{
            background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {profile.currentLevel}
        </div>
        <div className="text-gray-600 text-xs mt-1">of 30</div>
      </motion.div>

      {/* Play button */}
      {canPlay ? (
        <motion.button
          onClick={onPlay}
          className="px-12 py-5 rounded-full text-xl font-medium"
          style={{
            background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
            color: '#0a0a0a',
            boxShadow: '0 8px 30px rgba(74, 222, 128, 0.4)',
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 12px 40px rgba(74, 222, 128, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Play Level {profile.currentLevel}
        </motion.button>
      ) : (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 mb-4">No hearts remaining today</p>
          <motion.button
            onClick={onOpenStore}
            className="px-8 py-4 rounded-full text-lg font-medium"
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
              color: '#000',
              boxShadow: '0 4px 20px rgba(251, 191, 36, 0.3)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get More Hearts
          </motion.button>
        </motion.div>
      )}

      {/* Hearts info */}
      {canPlay && (
        <motion.p
          className="text-gray-600 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Playing costs 1 heart • Hearts reset daily
        </motion.p>
      )}

      {/* Store button (when can play) */}
      {canPlay && (
        <motion.button
          onClick={onOpenStore}
          className="mt-8 text-gray-500 hover:text-gray-300 transition-colors text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          🪙 Visit Store
        </motion.button>
      )}
    </div>
  );
}
