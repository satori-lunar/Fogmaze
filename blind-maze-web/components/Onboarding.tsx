/**
 * Onboarding screen - Introduction to the game
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OnboardingProps {
  onComplete: () => void;
}

const slides = [
  {
    title: 'Welcome to Fog Maze',
    description: 'Navigate through hidden mazes using only memory and instinct.',
    icon: '🌫️',
  },
  {
    title: 'Memorize the Path',
    description: 'Each level reveals the maze for 3 seconds. Study it carefully before the fog returns.',
    icon: '👁️',
  },
  {
    title: 'Watch Your Step',
    description: 'Hidden bombs lurk in the fog. One wrong step and it\'s game over.',
    icon: '💣',
  },
  {
    title: 'Find the Exit',
    description: 'Reach the glowing green exit to complete each level and earn gold coins.',
    icon: '✨',
  },
  {
    title: 'Manage Your Hearts',
    description: 'You have 3 hearts daily. Each level attempt costs 1 heart. Use them wisely!',
    icon: '❤️',
  },
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-6"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)',
      }}
    >
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 text-sm text-gray-500 hover:text-gray-300 transition-colors"
      >
        Skip
      </button>

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center max-w-md"
        >
          {/* Icon */}
          <motion.div
            className="text-7xl mb-8"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            {slide.icon}
          </motion.div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-light tracking-wide mb-4"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed">
            {slide.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="flex gap-2 mt-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: index === currentSlide ? '#4ade80' : '#333',
              transform: index === currentSlide ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Next/Start button */}
      <motion.button
        onClick={handleNext}
        className="mt-8 px-8 py-4 rounded-full text-lg font-medium transition-all"
        style={{
          background: isLastSlide
            ? 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)'
            : 'linear-gradient(135deg, #333 0%, #222 100%)',
          color: isLastSlide ? '#0a0a0a' : '#fff',
          boxShadow: isLastSlide
            ? '0 4px 20px rgba(74, 222, 128, 0.3)'
            : '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isLastSlide ? 'Start Playing' : 'Next'}
      </motion.button>
    </div>
  );
}
