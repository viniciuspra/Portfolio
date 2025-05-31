import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "pt"];
const defaultLocale = "pt";

function getLocale(req: NextRequest): string {
  const acceptLanguage = req.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].split("-")[0]);
  for (const locale of preferred) {
    if (locales.includes(locale)) {
      return locale;
    }
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (/\.[a-z0-9]+$/i.test(pathname)) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`),
  );
  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(req);
  const destination = `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(destination, req.url));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|studio).*)",
  ],
};
