import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization')

  const user = process.env.PASSWORD_PROTECT_USER
  const pass = process.env.PASSWORD_PROTECT_PASS

  if (!auth) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected"',
      },
    })
  }

  const [username, password] = atob(auth.split(' ')[1]).split(':')

  if (username !== user || password !== pass) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  return NextResponse.next()
}

// Make sure this matches the paths you want to protect
export const config = {
  matcher: '/:path*', // protects the entire site
}
