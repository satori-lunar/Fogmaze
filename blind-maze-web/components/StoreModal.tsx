/**
 * Store Modal - Buy hearts with gold or purchase gold
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayerProfile, CONSTANTS, buyHeartWithGold } from '@/lib/profileStore';

interface StoreModalProps {
  profile: PlayerProfile;
  onClose: () => void;
  onProfileUpdate: () => void;
}

const goldPackages = [
  { id: 'small', amount: 50, price: '$0.99', priceId: 'price_small' },
  { id: 'medium', amount: 150, price: '$2.99', priceId: 'price_medium', popular: true },
  { id: 'large', amount: 500, price: '$7.99', priceId: 'price_large' },
];

export default function StoreModal({ profile, onClose, onProfileUpdate }: StoreModalProps) {
  const [tab, setTab] = useState<'hearts' | 'gold'>('hearts');
  const [purchasing, setPurchasing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleBuyHeart = () => {
    if (profile.gold < CONSTANTS.HEART_COST_GOLD) {
      setMessage('Not enough gold!');
      setTimeout(() => setMessage(null), 2000);
      return;
    }

    if (profile.hearts >= CONSTANTS.MAX_HEARTS) {
      setMessage('Hearts already full!');
      setTimeout(() => setMessage(null), 2000);
      return;
    }

    const success = buyHeartWithGold();
    if (success) {
      setMessage('Heart purchased!');
      onProfileUpdate();
      setTimeout(() => setMessage(null), 2000);
    }
  };

  const handleBuyGold = async (priceId: string) => {
    setPurchasing(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setMessage(data.error || 'Failed to start checkout');
        setTimeout(() => setMessage(null), 3000);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setMessage('Failed to connect to payment service');
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setPurchasing(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        }}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-light">Store</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {/* Current balance */}
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">❤️</span>
              <span className="text-lg">{profile.hearts}/{CONSTANTS.MAX_HEARTS}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🪙</span>
              <span className="text-lg">{profile.gold}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10">
          <button
            onClick={() => setTab('hearts')}
            className={`flex-1 py-3 text-center transition-colors ${
              tab === 'hearts' ? 'text-white border-b-2 border-green-500' : 'text-gray-500'
            }`}
          >
            Buy Hearts
          </button>
          <button
            onClick={() => setTab('gold')}
            className={`flex-1 py-3 text-center transition-colors ${
              tab === 'gold' ? 'text-white border-b-2 border-yellow-500' : 'text-gray-500'
            }`}
          >
            Buy Gold
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {tab === 'hearts' ? (
              <motion.div
                key="hearts"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div
                  className="p-4 rounded-xl flex items-center justify-between"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">❤️</span>
                    <div>
                      <div className="font-medium">+1 Heart</div>
                      <div className="text-sm text-gray-400">
                        {CONSTANTS.HEART_COST_GOLD} 🪙
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={handleBuyHeart}
                    className="px-6 py-2 rounded-full font-medium"
                    style={{
                      background:
                        profile.gold >= CONSTANTS.HEART_COST_GOLD &&
                        profile.hearts < CONSTANTS.MAX_HEARTS
                          ? 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)'
                          : '#333',
                      color:
                        profile.gold >= CONSTANTS.HEART_COST_GOLD &&
                        profile.hearts < CONSTANTS.MAX_HEARTS
                          ? '#000'
                          : '#666',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={
                      profile.gold < CONSTANTS.HEART_COST_GOLD ||
                      profile.hearts >= CONSTANTS.MAX_HEARTS
                    }
                  >
                    Buy
                  </motion.button>
                </div>

                {profile.hearts >= CONSTANTS.MAX_HEARTS && (
                  <p className="text-center text-gray-500 mt-4 text-sm">
                    Your hearts are already full!
                  </p>
                )}

                {profile.gold < CONSTANTS.HEART_COST_GOLD &&
                  profile.hearts < CONSTANTS.MAX_HEARTS && (
                    <p className="text-center text-gray-500 mt-4 text-sm">
                      Need more gold? Check the Gold tab!
                    </p>
                  )}
              </motion.div>
            ) : (
              <motion.div
                key="gold"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                {goldPackages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    className={`p-4 rounded-xl flex items-center justify-between relative ${
                      pkg.popular ? 'ring-2 ring-yellow-500' : ''
                    }`}
                    style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {pkg.popular && (
                      <div
                        className="absolute -top-2 left-4 px-2 py-0.5 rounded text-xs font-bold"
                        style={{ background: '#fbbf24', color: '#000' }}
                      >
                        POPULAR
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">🪙</span>
                      <div>
                        <div className="font-medium">{pkg.amount} Gold</div>
                        <div className="text-sm text-gray-400">{pkg.price}</div>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => handleBuyGold(pkg.priceId)}
                      className="px-6 py-2 rounded-full font-medium"
                      style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                        color: '#000',
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={purchasing}
                    >
                      {purchasing ? '...' : 'Buy'}
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Message */}
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-3 rounded-lg text-center text-sm"
                style={{ background: 'rgba(74, 222, 128, 0.2)' }}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 text-center text-xs text-gray-600">
          Hearts reset daily at midnight UTC
        </div>
      </motion.div>
    </motion.div>
  );
}
