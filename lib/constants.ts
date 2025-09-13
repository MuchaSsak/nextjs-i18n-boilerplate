// General
export const APP_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// Supabase
// TODO: Fill out these
export const SUPABASE_URL = "";
export const SUPABASE_PUBLIC_ANON_KEY = "";

// Lingui
export type LocaleSupported = (typeof LOCALES_SUPPORTED)[number];
export const LOCALES_SUPPORTED = ["en", "pl", "uk", "es", "pseudo"] as const;
export const DEFAULT_LOCALE: LocaleSupported = "en";
