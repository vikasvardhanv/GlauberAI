import { NextRequest, NextResponse } from 'next/server';
import { getAuthCookie, verifyJwt } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = "force-dynamic";
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
    const user = await prisma.user.findUnique({
      where: { id: decoded.id as string },
      select: {
        id: true,
        email: true,
        fullName: true,
        createdAt: true
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 