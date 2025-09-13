import React from "react";
import LinguiDemoTitle from "@/app/[lang]/lingui-demo/components/LinguiDemoTitle";
import LinguiDemoDescription from "@/app/[lang]/lingui-demo/components/LinguiDemoDescription";
import LinguiDemoPlural from "@/app/[lang]/lingui-demo/components/LinguiDemoPlural";
import LinguiDemoSwitcher from "@/app/[lang]/lingui-demo/components/LinguiDemoSwitcher";
import { Button } from "@/components/ui/button";
import { Trans } from "@lingui/react/macro";

function LinguiDemoPage() {
  return (
    <main className="flex h-screen w-screen items-center text-center max-md:px-4 md:px-48">
      <div>
        <LinguiDemoSwitcher />
        <LinguiDemoTitle />
        <LinguiDemoDescription />
        <LinguiDemoPlural />
        <Button variant="outline">
          <Trans>
            Oh, and this boilerplate comes with shadcn/ui too, by the way.
          </Trans>
        </Button>
      </div>
    </main>
  );
}

export default LinguiDemoPage;
