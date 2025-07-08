'use client';

import { useEffect, useRef, useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CreditCard } from 'lucide-react';

// Replace with your real PayPal client ID
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '';
const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';

export default function BillingPage() {
  // In a real app, fetch billing info and user email from API or context
  const plan = 'Starter';
  const usage = { requests: 120, limit: 1000, cost: 12.34 };
  const userEmail = 'user@example.com'; // TODO: Replace with real user email

  // PayPal state
  const [paymentStatus, setPaymentStatus] = useState<'idle'|'success'|'error'|'processing'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const paypalRef = useRef<HTMLDivElement>(null);

  // Stripe state
  const [stripeStatus, setStripeStatus] = useState<'idle'|'redirecting'|'error'>('idle');
  const [stripeError, setStripeError] = useState<string | null>(null);

  useEffect(() => {
    if (!paypalRef.current) return;
    
    // Check if PayPal is configured
    if (!PAYPAL_CLIENT_ID) {
      setError('PayPal is not configured. Please contact support.');
      return;
    }

    // Dynamically load PayPal JS SDK
    const scriptId = 'paypal-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
      script.async = true;
      script.onload = renderPayPalButton;
      script.onerror = () => {
        setError('Failed to load PayPal. Please try again later.');
      };
      document.body.appendChild(script);
    } else {
      renderPayPalButton();
    }
    
    function renderPayPalButton() {
      // @ts-ignore
      if (window.paypal && paypalRef.current) {
        setPaypalLoaded(true);
        // @ts-ignore
        window.paypal.Buttons({
          style: { layout: 'vertical', color: 'blue', shape: 'rect', label: 'paypal' },
          createOrder: (data: any, actions: any) => {
            setPaymentStatus('processing');
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: usage.cost.toFixed(2),
                  },
                  description: `GlauberAI Subscription (${plan} Plan)`
                }
              ]
            });
          },
          onApprove: async (data: any, actions: any) => {
            try {
              await actions.order.capture();
              setPaymentStatus('success');
              setError(null);
            } catch (err) {
              setPaymentStatus('error');
              setError('Payment could not be completed.');
            }
          },
          onError: (err: any) => {
            setPaymentStatus('error');
            setError('Payment failed. Please try again.');
          },
          onCancel: () => {
            setPaymentStatus('idle');
            setError('Payment was cancelled.');
          }
        }).render(paypalRef.current);
      }
    }
    
    // Cleanup
    return () => {
      if (paypalRef.current) paypalRef.current.innerHTML = '';
    };
  }, [usage.cost, plan]);

  // Stripe payment handler
  const handleStripePayment = async () => {
    setStripeStatus('redirecting');
    setStripeError(null);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, amount: usage.cost, email: userEmail })
      });
      const data = await res.json();
      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        setStripeStatus('error');
        setStripeError(data.error || 'Stripe payment failed.');
      }
    } catch (err) {
      setStripeStatus('error');
      setStripeError('Stripe payment failed. Please check your connection.');
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Billing & Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Current Plan Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Current Plan</span>
                  <Badge variant="secondary">{plan}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Requests Used</span>
                  <span>{usage.requests} / {usage.limit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>This Month's Cost</span>
                  <span className="font-semibold">${usage.cost.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 text-muted-foreground text-sm">
                Choose your preferred payment method below:
              </div>

              {/* PayPal Payment Option */}
              <div className="pt-4 pb-6 border-b">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <span className="font-medium">Pay with PayPal</span>
                </div>
                
                {!PAYPAL_CLIENT_ID ? (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      PayPal is not configured. Please contact support to enable PayPal payments.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <>
                    <div ref={paypalRef} id="paypal-button-container" className="mb-4"></div>
                    {!paypalLoaded && (
                      <div className="text-sm text-muted-foreground">Loading PayPal...</div>
                    )}
                    {paymentStatus === 'success' && (
                      <div className="text-green-600 font-semibold">Payment successful! Thank you for your purchase.</div>
                    )}
                    {paymentStatus === 'processing' && (
                      <div className="text-blue-600 font-medium">Processing payment...</div>
                    )}
                    {paymentStatus === 'error' && error && (
                      <div className="text-red-600 font-medium">{error}</div>
                    )}
                    {paymentStatus === 'idle' && error && (
                      <div className="text-yellow-600 font-medium">{error}</div>
                    )}
                    <div className="text-xs text-muted-foreground mt-2">
                      Secure payment processed by PayPal
                    </div>
                  </>
                )}
              </div>

              {/* Stripe Payment Option */}
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Pay with Card (Stripe)</span>
                </div>
                
                <button
                  className="btn-primary w-full py-3 rounded-lg text-white font-semibold"
                  onClick={handleStripePayment}
                  disabled={stripeStatus === 'redirecting'}
                >
                  {stripeStatus === 'redirecting' ? 'Redirecting to Stripe...' : 'Pay with Card'}
                </button>
                
                {stripeStatus === 'error' && stripeError && (
                  <Alert className="mt-3">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{stripeError}</AlertDescription>
                  </Alert>
                )}
                
                <div className="text-xs text-muted-foreground mt-2">
                  Secure payment processed by Stripe
                </div>
              </div>

              {/* Configuration Notice */}
              {(!PAYPAL_CLIENT_ID || !STRIPE_PUBLISHABLE_KEY) && (
                <Alert className="mt-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Some payment methods are not configured. Please set up your payment provider keys in the environment variables.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 