import { NextRequest, NextResponse } from 'next/server';
import { verifyJwt } from './lib/auth';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('glauberai_token')?.value;
  const secret = process.env.JWT_SECRET || process.env.NEXT_PUBLIC_JWT_SECRET;
  console.log('Middleware token:', token);
  console.log('JWT_SECRET in middleware:', secret);
  const { pathname } = req.nextUrl;
  let jwtValid = false;
  let decoded = null;
  if (token && secret) {
    decoded = await verifyJwt(token);
    jwtValid = !!decoded;
    if (jwtValid) {
      console.log('Decoded JWT:', decoded);
    } else {
      console.log('JWT verify error: Invalid or expired token');
    }
  } else {
    console.log('Missing token or JWT_SECRET');
  }
  console.log('JWT valid:', jwtValid);
  if (pathname.startsWith('/dashboard')) {
    if (!jwtValid) {
      const url = req.nextUrl.clone();
      url.pathname = '/auth/signin';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
}; 