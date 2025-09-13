import { Trans } from "@lingui/react/macro";
import React from "react";

function LinguiDemoDescription() {
  return (
    <p className="pt-4">
      <Trans id="next-explanation">
        Isn&apos;t this tech stack just so cool? It also includes Supabase and
        Tanstack Query! Internationalization has never been easier. I mean,
        notice how the route automatically synchronizes with the dynamically
        changed language. Or metadata, like the title. How neat!
      </Trans>
    </p>
  );
}

export default LinguiDemoDescription;
