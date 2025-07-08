import { NextRequest, NextResponse } from 'next/server';
import { getAuthCookie, verifyJwt } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const token = getAuthCookie();
  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const decoded = await verifyJwt(token);
  if (!decoded || typeof decoded === 'string') {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  try {
    // Get user and their requests for this month
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        password: true,
        fullName: true,
        plan: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Count requests for this month
    const currentUsage = await prisma.request.count({
      where: {
        userId: user.id,
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    });

    // Calculate usage based on plan
    const planLimits: Record<string, number> = {
      STARTER: 10,
      PROFESSIONAL: 50000,
      ENTERPRISE: -1 // Unlimited
    };

    const planLimit = planLimits[user.plan] || 10;
    const isUnlimited = user.plan === 'ENTERPRISE';
    const usagePercentage = isUnlimited ? 0 : (currentUsage / planLimit) * 100;
    const remainingRequests = isUnlimited ? -1 : Math.max(0, planLimit - currentUsage);

    const usage = {
      currentUsage,
      planLimit,
      remainingRequests,
      usagePercentage,
      isUnlimited,
      plan: {
        name: user.plan,
        requests: planLimit,
        price: user.plan === 'PROFESSIONAL' ? 29 : 0,
        features: user.plan === 'STARTER' ? [
          'Up to 10 requests/month',
          'Smart AI routing',
          'All AI models',
          'Standard support',
          'Basic analytics'
        ] : user.plan === 'PROFESSIONAL' ? [
          'Up to 50,000 requests/month',
          'Smart AI routing',
          'All AI models',
          'Priority support',
          'Advanced analytics',
          'Custom integrations'
        ] : [
          'Unlimited requests',
          'Smart AI routing',
          'All AI models',
          'Dedicated support',
          'Advanced analytics',
          'Custom integrations',
          'SLA guarantee'
        ]
      }
    };

    return NextResponse.json({ usage });
  } catch (error) {
    console.error('Error fetching usage:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 