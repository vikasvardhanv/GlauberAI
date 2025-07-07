import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || process.env.NEXT_PUBLIC_JWT_SECRET || '';
const COOKIE_NAME = 'glauberai_token';
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

const encoder = new TextEncoder();

export async function signJwt(payload: object): Promise<string> {
  return await new SignJWT(payload as any)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encoder.encode(JWT_SECRET));
}

export async function verifyJwt(token: string): Promise<any | null> {
  try {
    const { payload } = await jwtVerify(token, encoder.encode(JWT_SECRET));
    return payload;
  } catch (err) {
    return null;
  }
}

export function setAuthCookie(token: string) {
  cookies().set({
    name: COOKIE_NAME,
    value: token,
    ...COOKIE_OPTIONS,
  });
}

export function getAuthCookie(): string | null {
  return cookies().get(COOKIE_NAME)?.value || null;
}

export function clearAuthCookie() {
  cookies().delete(COOKIE_NAME);
} 