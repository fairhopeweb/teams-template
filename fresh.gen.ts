// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[team].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/api/invite.ts";
import * as $3 from "./routes/api/joke.ts";
import * as $4 from "./routes/api/joke2.ts";
import * as $5 from "./routes/api/test.ts";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/team.tsx";
import * as $$0 from "./islands/ButtonModal.tsx";
import * as $$1 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/[team].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/api/invite.ts": $2,
    "./routes/api/joke.ts": $3,
    "./routes/api/joke2.ts": $4,
    "./routes/api/test.ts": $5,
    "./routes/index.tsx": $6,
    "./routes/team.tsx": $7,
  },
  islands: {
    "./islands/ButtonModal.tsx": $$0,
    "./islands/Counter.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;