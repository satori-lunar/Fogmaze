/**
 * Purchase Success Page
 * Credits gold after successful Stripe checkout
 */

'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { addGold, loadProfile } from '@/lib/profileStore';

function PurchaseSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [credited, setCredited] = useState(false);
  const [goldAmount, setGoldAmount] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    const gold = parseInt(searchParams.get('gold') || '0', 10);
    const sessionId = searchParams.get('session_id');

    if (gold > 0 && sessionId && !credited) {
      // Credit the gold
      addGold(gold);
      setGoldAmount(gold);
      setCredited(true);
    }
    
    // Update current balance
    setCurrentBalance(loadProfile().gold);
  }, [searchParams, credited]);

  const handleContinue = () => {
    router.push('/');
  };

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center p-6"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)',
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="text-8xl mb-8"
      >
        🎉
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-light text-white mb-4"
      >
        Purchase Complete!
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-3 text-2xl mb-8"
      >
        <span className="text-4xl">🪙</span>
        <span
          className="font-bold"
          style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          +{goldAmount} Gold
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-400 mb-8 text-center"
      >
        Your gold has been added to your account.
        <br />
        Current balance: {currentBalance} gold
      </motion.p>

      <motion.button
        onClick={handleContinue}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="px-8 py-4 rounded-full text-lg font-medium"
        style={{
          background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
          color: '#0a0a0a',
          boxShadow: '0 4px 20px rgba(74, 222, 128, 0.3)',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Continue Playing
      </motion.button>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center p-6"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)',
      }}
    >
      <div className="text-gray-400">Loading...</div>
    </div>
  );
}

export default function PurchaseSuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PurchaseSuccessContent />
    </Suspense>
  );
}
