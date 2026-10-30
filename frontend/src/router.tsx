import { createRouter } from "@tanstack/react-router";

import type { RouterContext } from "@/lib/router-context";
import { queryClient } from "@/lib/query-client";
import { routeTree } from "@/routeTree.gen";

export const router = createRouter({
  routeTree,
  context: { queryClient } satisfies RouterContext,
  defaultPreload: "intent",
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
