import { Trans } from "@lingui/react/macro";
import React from "react";

function LinguiDemoTitle() {
  return (
    <>
      <h1 className="pt-2 text-3xl font-bold">
        <Trans>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Trans>
      </h1>

      <h2 className="italic">This text is not translated for comparison</h2>
    </>
  );
}

export default LinguiDemoTitle;
