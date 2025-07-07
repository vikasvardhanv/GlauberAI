import { NextRequest, NextResponse } from 'next/server';
import { verifyJwt, getAuthCookie } from './lib/auth';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/dashboard')) {
    const token = req.cookies.get('glauberai_token')?.value;
    if (!token || !verifyJwt(token)) {
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