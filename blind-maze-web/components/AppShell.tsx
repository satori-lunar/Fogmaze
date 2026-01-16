/**
 * App Shell - Main router between screens
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Onboarding from './Onboarding';
import HomeScreen from './HomeScreen';
import StoreModal from './StoreModal';
import Game from './Game';
import {
  PlayerProfile,
  loadProfile,
  markOnboardingSeen,
  consumeHeart,
  setCurrentLevel as saveCurrentLevel,
  awardLevelCompletion,
} from '@/lib/profileStore';

type Screen = 'onboarding' | 'home' | 'game';

export default function AppShell() {
  const [screen, setScreen] = useState<Screen>('home');
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [showStore, setShowStore] = useState(false);
  const [initialLevel, setInitialLevel] = useState(1);

  // Load profile on mount
  useEffect(() => {
    const p = loadProfile();
    setProfile(p);
    setInitialLevel(p.currentLevel);

    // Show onboarding if first time
    if (!p.hasSeenOnboarding) {
      setScreen('onboarding');
    }
  }, []);

  // Refresh profile from storage
  const refreshProfile = useCallback(() => {
    setProfile(loadProfile());
  }, []);

  // Handle onboarding complete
  const handleOnboardingComplete = useCallback(() => {
    markOnboardingSeen();
    refreshProfile();
    setScreen('home');
  }, [refreshProfile]);

  // Handle play button
  const handlePlay = useCallback(() => {
    if (!profile || profile.hearts <= 0) {
      setShowStore(true);
      return;
    }

    // Consume a heart
    const success = consumeHeart();
    if (!success) {
      setShowStore(true);
      return;
    }

    refreshProfile();
    setInitialLevel(profile.currentLevel);
    setScreen('game');
  }, [profile, refreshProfile]);

  // Handle level completion (called from Game)
  const handleLevelComplete = useCallback(
    (level: number, bombFree: boolean) => {
      // Award gold
      awardLevelCompletion(bombFree);

      // Save progress (next level)
      saveCurrentLevel(level + 1);

      refreshProfile();
    },
    [refreshProfile]
  );

  // Handle game over (return to home)
  const handleGameOver = useCallback(() => {
    refreshProfile();
    setScreen('home');
  }, [refreshProfile]);

  // Handle exit game
  const handleExitGame = useCallback(() => {
    refreshProfile();
    setScreen('home');
  }, [refreshProfile]);

  // Loading state
  if (!profile) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {screen === 'onboarding' && (
          <Onboarding key="onboarding" onComplete={handleOnboardingComplete} />
        )}
        {screen === 'home' && (
          <HomeScreen
            key="home"
            profile={profile}
            onPlay={handlePlay}
            onOpenStore={() => setShowStore(true)}
          />
        )}
        {screen === 'game' && (
          <Game
            key="game"
            initialLevel={initialLevel}
            onLevelComplete={handleLevelComplete}
            onGameOver={handleGameOver}
            onExit={handleExitGame}
          />
        )}
      </AnimatePresence>

      {/* Store Modal */}
      <AnimatePresence>
        {showStore && (
          <StoreModal
            profile={profile}
            onClose={() => setShowStore(false)}
            onProfileUpdate={refreshProfile}
          />
        )}
      </AnimatePresence>
    </>
  );
}
