import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/', '/sign-in', '/sign-up', '/api/clerk', '/api/auth'];

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const session = await auth();

  if (!session.userId) {
    // User is not signed in → return 401 or redirect
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  // User is authenticated
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
