import { defineConfig } from "@lingui/cli";

export default defineConfig({
  locales: ["en", "pl", "uk", "es", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["app/", "components/", "lib/"],
    },
  ],
});
