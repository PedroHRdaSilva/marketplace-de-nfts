import { http, HttpResponse } from "msw";

import type { ApiEnvelope, HealthResponse } from "@/contracts";

import { socketHandlers } from "../socket";

const healthHandler = http.get("/api/health", () => {
  return HttpResponse.json<ApiEnvelope<HealthResponse>>({
    data: {
      status: "ok",
      service: "nft-marketplace-msw",
      version: "0.0.0",
      dataSource: "mock",
      time: new Date().toISOString(),
    },
  });
});

export const handlers = [healthHandler, ...socketHandlers];
