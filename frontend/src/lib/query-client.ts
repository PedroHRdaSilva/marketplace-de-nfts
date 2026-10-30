import { QueryClient } from "@tanstack/react-query";

import { ApiError } from "./api/errors";

const NON_RETRYABLE_STATUS = new Set([400, 401, 403, 404, 409, 422]);

function shouldRetry(failureCount: number, error: unknown): boolean {
  if (error instanceof ApiError) {
    if (error.code === "network_error" || error.code === "timeout") {
      return failureCount < 2;
    }
    if (NON_RETRYABLE_STATUS.has(error.status)) return false;
  }

  return failureCount < 2;
}

export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30_000,
        gcTime: 5 * 60_000,
        retry: shouldRetry,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: false,
      },
    },
  });
}

export const queryClient = createQueryClient();
