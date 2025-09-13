"use client";

import React, { useState } from "react";
import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { usePathname, useRouter } from "next/navigation";
import { LocaleSupported } from "@/lib/constants";

const languages = {
  en: msg`English`,
  pl: msg`Polish`,
  uk: msg`Ukrainian`,
  es: msg`Spanish`,
  pseudo: msg`Pseudo`,
} as const;

function LinguiDemoSwitcher() {
  const router = useRouter();
  const { i18n } = useLingui();
  const pathname = usePathname();

  const [locale, setLocale] = useState<LocaleSupported>(
    pathname?.split("/")[1] as LocaleSupported
  );

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value as LocaleSupported;

    const pathNameWithoutLocale = pathname?.split("/")?.slice(2) ?? [];
    const newPath = `/${locale}/${pathNameWithoutLocale.join("/")}`;

    setLocale(locale);
    router.push(newPath);
  }

  return (
    <select
      className="border border-border bg-background"
      value={locale}
      onChange={handleChange}
    >
      {Object.keys(languages).map((locale) => {
        return (
          <option value={locale} key={locale}>
            {i18n._(languages[locale as keyof typeof languages])}
          </option>
        );
      })}
    </select>
  );
}

export default LinguiDemoSwitcher;
