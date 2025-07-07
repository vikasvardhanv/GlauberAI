import { NextRequest, NextResponse } from 'next/server';
import { getAuthCookie, verifyJwt } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const token = getAuthCookie();
  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  const user = verifyJwt(token);
  if (!user || typeof user === 'string') {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
  return NextResponse.json({ user });
} 