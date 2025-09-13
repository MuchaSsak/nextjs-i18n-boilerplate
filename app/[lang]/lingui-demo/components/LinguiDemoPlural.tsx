"use client";

import React, { useState } from "react";
import { Trans, Plural } from "@lingui/react/macro";

function LinguiDemoPlural() {
  const [italiansCount, setItaliansCount] = useState(1);

  return (
    <div className="py-4">
      <p className="pb-2">
        <Trans>Plural Test: How many Italians?</Trans>
      </p>

      <div className="flex justify-center gap-8">
        <select
          className="border border-border bg-background"
          value={italiansCount}
          onChange={(e) => setItaliansCount(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>

        <p>
          <Plural value={italiansCount} one={"Italian"} other={"Italians"} />
        </p>
      </div>
    </div>
  );
}

export default LinguiDemoPlural;
