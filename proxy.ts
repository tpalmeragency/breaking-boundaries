import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(req: NextRequest) {
  const auth = req.headers.get('authorization');

  const user = process.env.PASSWORD_PROTECT_USER;
  const pass = process.env.PASSWORD_PROTECT_PASS;

  if (!auth) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected"',
      },
    });
  }

  const [username, password] = atob(auth.split(' ')[1]).split(':');

  if (username !== user || password !== pass) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected"',
      },
    });
  }

  return NextResponse.next();
}
