import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });

export async function POST(req: NextRequest) {
  try {
    const { plan, amount, email } = await req.json();
    if (!plan || !amount || !email) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `GlauberAI Subscription (${plan} Plan)`
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL || 'https://glauberai.com/dashboard/billing?success=1',
      cancel_url: process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL || 'https://glauberai.com/dashboard/billing?canceled=1',
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe Checkout error:', error);
    return NextResponse.json({ error: 'Stripe Checkout failed.' }, { status: 500 });
  }
} 