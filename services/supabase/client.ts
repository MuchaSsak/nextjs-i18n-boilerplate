import { SUPABASE_PUBLIC_ANON_KEY, SUPABASE_URL } from "@/lib/constants";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_PUBLIC_ANON_KEY);
}
