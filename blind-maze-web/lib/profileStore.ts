/**
 * Profile Store - Manages player progress, hearts, and gold
 * Uses localStorage for persistence with UTC daily reset for hearts
 */

'use client';

const STORAGE_KEY = 'fogmaze_profile';
const MAX_HEARTS = 3;
const HEART_COST_GOLD = 75;

export interface PlayerProfile {
  currentLevel: number;
  gold: number;
  hearts: number;
  lastHeartResetUtc: string; // ISO date string (YYYY-MM-DD)
  hasSeenOnboarding: boolean;
}

const defaultProfile: PlayerProfile = {
  currentLevel: 1,
  gold: 0,
  hearts: MAX_HEARTS,
  lastHeartResetUtc: getUtcDateString(),
  hasSeenOnboarding: false,
};

/**
 * Get current UTC date as YYYY-MM-DD string
 */
function getUtcDateString(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

/**
 * Load profile from localStorage
 */
export function loadProfile(): PlayerProfile {
  if (typeof window === 'undefined') {
    return { ...defaultProfile };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { ...defaultProfile };
    }

    const profile: PlayerProfile = JSON.parse(stored);
    
    // Check if we need to reset hearts (new UTC day)
    const todayUtc = getUtcDateString();
    if (profile.lastHeartResetUtc !== todayUtc) {
      profile.hearts = MAX_HEARTS;
      profile.lastHeartResetUtc = todayUtc;
      saveProfile(profile);
    }

    return profile;
  } catch (error) {
    console.error('Error loading profile:', error);
    return { ...defaultProfile };
  }
}

/**
 * Save profile to localStorage
 */
export function saveProfile(profile: PlayerProfile): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Error saving profile:', error);
  }
}

/**
 * Update specific profile fields
 */
export function updateProfile(updates: Partial<PlayerProfile>): PlayerProfile {
  const profile = loadProfile();
  const updated = { ...profile, ...updates };
  saveProfile(updated);
  return updated;
}

/**
 * Check if player can play (has hearts)
 */
export function canPlay(): boolean {
  const profile = loadProfile();
  return profile.hearts > 0;
}

/**
 * Consume a heart when starting a level
 * Returns false if no hearts available
 */
export function consumeHeart(): boolean {
  const profile = loadProfile();
  if (profile.hearts <= 0) {
    return false;
  }
  
  updateProfile({ hearts: profile.hearts - 1 });
  return true;
}

/**
 * Award gold for completing a level
 * @param bombFree - true if completed without hitting a bomb
 */
export function awardLevelCompletion(bombFree: boolean): number {
  const profile = loadProfile();
  const baseReward = 1;
  const bonusReward = bombFree ? 5 : 0;
  const totalReward = baseReward + bonusReward;
  
  updateProfile({ gold: profile.gold + totalReward });
  return totalReward;
}

/**
 * Buy a heart with gold
 * Returns true if successful
 */
export function buyHeartWithGold(): boolean {
  const profile = loadProfile();
  
  if (profile.gold < HEART_COST_GOLD) {
    return false;
  }
  
  if (profile.hearts >= MAX_HEARTS) {
    return false; // Already at max hearts
  }
  
  updateProfile({
    gold: profile.gold - HEART_COST_GOLD,
    hearts: profile.hearts + 1,
  });
  
  return true;
}

/**
 * Add gold (from purchase or reward)
 */
export function addGold(amount: number): void {
  const profile = loadProfile();
  updateProfile({ gold: profile.gold + amount });
}

/**
 * Update current level progress
 */
export function setCurrentLevel(level: number): void {
  updateProfile({ currentLevel: level });
}

/**
 * Mark onboarding as seen
 */
export function markOnboardingSeen(): void {
  updateProfile({ hasSeenOnboarding: true });
}

/**
 * Reset profile (for testing)
 */
export function resetProfile(): void {
  saveProfile({ ...defaultProfile, lastHeartResetUtc: getUtcDateString() });
}

// Export constants for UI
export const CONSTANTS = {
  MAX_HEARTS,
  HEART_COST_GOLD,
};
