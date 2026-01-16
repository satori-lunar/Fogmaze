/**
 * Stripe Checkout API Route
 * Creates a checkout session for purchasing gold
 */

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe (only if key is available)
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    })
  : null;

// Gold packages with their Stripe price IDs
const goldPackages: Record<string, { amount: number; priceId: string }> = {
  price_small: { amount: 50, priceId: process.env.STRIPE_PRICE_SMALL || '' },
  price_medium: { amount: 150, priceId: process.env.STRIPE_PRICE_MEDIUM || '' },
  price_large: { amount: 500, priceId: process.env.STRIPE_PRICE_LARGE || '' },
};

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { error: 'Payment service not configured. Please set up Stripe API keys.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { priceId } = body;

    // Validate package
    const pkg = goldPackages[priceId];
    if (!pkg || !pkg.priceId) {
      return NextResponse.json(
        { error: 'Invalid package selected' },
        { status: 400 }
      );
    }

    // Get the base URL for redirects
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
      request.headers.get('origin') || 
      'http://localhost:3000';

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: pkg.priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/purchase-success?session_id={CHECKOUT_SESSION_ID}&gold=${pkg.amount}`,
      cancel_url: `${baseUrl}?purchase=cancelled`,
      metadata: {
        goldAmount: pkg.amount.toString(),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
