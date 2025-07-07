import { NextRequest, NextResponse } from 'next/server';
import { getAuthCookie, verifyJwt, signJwt, setAuthCookie } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function PUT(req: NextRequest) {
  const token = getAuthCookie();
  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const decoded = await verifyJwt(token);
  if (!decoded || typeof decoded === 'string') {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  try {
    const { fullName, currentPassword, newPassword } = await req.json();

    const user = await prisma.user.findUnique({
      where: { id: decoded.id as string }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const updateData: any = {};

    // Update full name if provided
    if (fullName !== undefined) {
      updateData.fullName = fullName;
    }

    // Update password if provided
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json({ error: 'Current password is required' }, { status: 400 });
      }

      const validPassword = await bcrypt.compare(currentPassword, user.password);
      if (!validPassword) {
        return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 });
      }

      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: decoded.id as string },
      data: updateData,
      select: {
        id: true,
        email: true,
        fullName: true,
        createdAt: true
      }
    });

    // Generate new JWT with updated info
    const newToken = await signJwt({ 
      id: updatedUser.id, 
      email: updatedUser.email, 
      fullName: updatedUser.fullName 
    });
    setAuthCookie(newToken);

    return NextResponse.json({ 
      user: updatedUser,
      message: 'Profile updated successfully' 
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 