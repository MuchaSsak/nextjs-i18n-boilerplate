"use client";

import { I18nProvider } from "@lingui/react";
import { type Messages, setupI18n } from "@lingui/core";
import { useState } from "react";

type LinguiClientProviderProps = {
  children: React.ReactNode;
  initialLocale: string;
  initialMessages: Messages;
};

function LinguiClientProvider({
  children,
  initialLocale,
  initialMessages,
}: LinguiClientProviderProps) {
  const [i18n] = useState(() => {
    return setupI18n({
      locale: initialLocale,
      messages: { [initialLocale]: initialMessages },
    });
  });

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}

export default LinguiClientProvider;
