import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/', '/api/webhooks/clerk'];

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl.pathname;

  if (PUBLIC_ROUTES.includes(url)) {
    return NextResponse.next();
  }

  // Protect other routes
  const session = await auth();
  if (!session?.userId) {
    return new NextResponse(null, { status: 401 });
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
