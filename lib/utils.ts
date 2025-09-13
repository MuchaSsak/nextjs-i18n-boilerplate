import { LOCALES_SUPPORTED } from "@/lib/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// TailwindCSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Lingui
export function pathnameHasLocale(pathname: string) {
  return LOCALES_SUPPORTED.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
}
