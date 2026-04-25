import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimitStore = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30; // 30 requests per minute per IP

const BLOCKED_USER_AGENTS = [
  'scriptexbot',
  'curl',
  'python-requests',
  'postmanruntime',
];

export function middleware(request: NextRequest) {
  const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown-ip';
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  // 1. Bot Protection
  const isBot = BLOCKED_USER_AGENTS.some((bot) => userAgent.includes(bot));
  if (isBot) {
    return new NextResponse('Access Denied: Malicious User Agent Detected', {
      status: 403,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  // 2. Rate Limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const now = Date.now();
    const storeEntry = rateLimitStore.get(ip);

    if (!storeEntry || (now - storeEntry.timestamp > RATE_LIMIT_WINDOW_MS)) {
      rateLimitStore.set(ip, { count: 1, timestamp: now });
    } else {
      storeEntry.count++;
      if (storeEntry.count > MAX_REQUESTS_PER_WINDOW) {
        return new NextResponse('Too Many Requests: Rate limit exceeded', {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((RATE_LIMIT_WINDOW_MS - (now - storeEntry.timestamp)) / 1000).toString(),
            'Content-Type': 'text/plain',
          },
        });
      }
    }
  }

  const response = NextResponse.next();
  response.headers.set('X-Edge-Protected', 'true');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
