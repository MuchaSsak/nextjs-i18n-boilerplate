import type { MetadataRoute } from "next";

import { APP_URL, LOCALES_SUPPORTED } from "@/lib/constants";

function sitemap(): MetadataRoute.Sitemap {
  const sitemapArray = [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.1,
    },
  ];

  // Add /lingui-demo page with all of the available locales
  LOCALES_SUPPORTED.map((locale) =>
    sitemapArray.push({
      url: `${APP_URL}/${locale}/lingui-demo`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    })
  );

  return sitemapArray as MetadataRoute.Sitemap;
}

export default sitemap;
