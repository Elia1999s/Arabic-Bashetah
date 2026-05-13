import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Only protect the /admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const basicAuth = req.headers.get('authorization');

    // The expected password (you can change this to whatever you want)
    // Here it checks for username "admin" and password "123456" as a placeholder
    // To change it, encode "username:password" in base64.
    // For example, "admin:arabic2026" is "YWRtaW46YXJhYmljMjAyNg=="
    // We will use "admin:admin" which is "YWRtaW46YWRtaW4="
    
    const url = req.nextUrl;
    
    // Check if the auth header is valid
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      // Replace 'admin' and 'admin' with your desired secure username and password
      const expectedUser = process.env.ADMIN_USERNAME || 'admin';
      const expectedPwd = process.env.ADMIN_PASSWORD || 'admin';

      if (user === expectedUser && pwd === expectedPwd) {
        return NextResponse.next();
      }
    }

    // Require authentication
    url.pathname = '/api/unauthorized';
    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
