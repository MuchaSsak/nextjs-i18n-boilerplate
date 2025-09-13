import { type I18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { APP_URL } from "@/lib/constants";

async function getLocalizedMetadata(i18n: I18n, lang: string) {
  const title = i18n._(msg`Translation Demo`);
  const description = i18n._(
    msg`A demo showcasing how to use Lingui with Next.js, including pluralization, dynamic routes, and language switching.`
  );
  const url = APP_URL;
  const image = `${url}/opengraph-image.png`;

  return {
    title,
    description,
    url: url,
    image,

    alternates: {
      canonical: url,
      languages: {
        en: `${url}/en`,
        es: `${url}/es`,
        uk: `${url}/uk`,
        pl: `${url}/pl`,
      },
    },
    keywords: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tanstack Query",
      "Lingui",
      "i18n",
      i18n._("Internationalization"),
      i18n._("Localization"),
      i18n._("Translation"),
      i18n._("Copy"),
      i18n._("Boilerplate"),
    ],
    authors: [{ name: "Mateusz Muszarski" }],
    creator: "Mateusz Muszarski",
    publisher: "Mateusz Muszarski",

    openGraph: {
      title,
      description,
      url,
      siteName: i18n._("Translation Demo"),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: i18n._("Translation Demo preview"),
        },
      ],
      locale: lang,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@MuchaSsakkk",
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/icon.ico",
      apple: "/apple-icon.ico",
    },

    category: i18n._("technology"),
    metadataBase: new URL(url),
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
  };
}

export default getLocalizedMetadata;
