import React from "react";

import "@/app/globals.css";
import { initLingui, PageLangParam } from "@/services/lingui/initLingui";
import { LOCALES_SUPPORTED, type LocaleSupported } from "@/lib/constants";
import { allMessages, getI18nInstance } from "@/services/lingui/appRouterI18n";
import { geistSans } from "@/lib/fonts";
import Providers from "@/components/layout/providers/Providers";
import getLocalizedMetadata from "@/lib/metadata";

// Static params
export async function generateStaticParams() {
  return LOCALES_SUPPORTED.map((lang) => ({ lang }));
}

// Metadata
export async function generateMetadata({ params }: PageLangParam) {
  const { lang } = await params;
  const i18n = getI18nInstance(lang);

  return getLocalizedMetadata(i18n, lang);
}

export default async function RootLayout({
  children,
  params,
}: React.PropsWithChildren<PageLangParam>) {
  const { lang } = await params;
  initLingui(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <Providers
          linguiInitialLocale={lang as LocaleSupported}
          linguiInitialMessages={allMessages[lang]}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
