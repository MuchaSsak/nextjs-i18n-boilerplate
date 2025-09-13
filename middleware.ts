import { type NextRequest, NextResponse } from "next/server";

import { updateSession } from "@/services/supabase/middleware";
import { getRequestLocale } from "@/services/lingui/getRequestLocale";
import { pathnameHasLocale } from "@/lib/utils";

export function middleware(request: NextRequest) {
  // Refresh Supabase session
  updateSession(request);

  // Check if the current pathname has any supported locale
  const { pathname } = request.nextUrl;
  if (pathnameHasLocale(pathname)) return;

  // Redirect if there is no locale
  const locale = getRequestLocale(request.headers);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
