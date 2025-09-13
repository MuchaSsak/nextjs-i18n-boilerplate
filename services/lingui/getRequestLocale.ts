import { LOCALES_SUPPORTED } from "@/lib/constants";
import Negotiator from "negotiator";

export function getRequestLocale(requestHeaders: Headers): string {
  const langHeader = requestHeaders.get("accept-language") || undefined;
  const languages = new Negotiator({
    headers: { "accept-language": langHeader },
  }).languages(LOCALES_SUPPORTED.slice());

  const activeLocale = languages[0] || LOCALES_SUPPORTED[0] || "en";

  return activeLocale;
}
