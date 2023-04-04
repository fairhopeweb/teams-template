// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[team].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/api/invite.ts";
import * as $3 from "./routes/api/remove.ts";
import * as $4 from "./routes/index.tsx";
import * as $$0 from "./islands/ButtonModal.tsx";
import * as $$1 from "./islands/RemoveButton.tsx";

const manifest = {
  routes: {
    "./routes/[team].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/api/invite.ts": $2,
    "./routes/api/remove.ts": $3,
    "./routes/index.tsx": $4,
  },
  islands: {
    "./islands/ButtonModal.tsx": $$0,
    "./islands/RemoveButton.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
