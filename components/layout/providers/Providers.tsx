import { ThemeProvider } from "next-themes";
import React from "react";
import TanstackQueryProvider from "@/components/layout/providers/TanstackQueryProvider";
import LinguiClientProvider from "@/components/layout/providers/LinguiClientProvider";
import { type Messages } from "@lingui/core";
import { type LocaleSupported } from "@/lib/constants";

type ProvidersProps = React.PropsWithChildren & {
  linguiInitialLocale: LocaleSupported;
  linguiInitialMessages: Messages;
};

function Providers({
  children,
  linguiInitialLocale,
  linguiInitialMessages,
}: ProvidersProps) {
  return (
    <LinguiClientProvider
      initialLocale={linguiInitialLocale}
      initialMessages={linguiInitialMessages}
    >
      <TanstackQueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </TanstackQueryProvider>
    </LinguiClientProvider>
  );
}

export default Providers;
