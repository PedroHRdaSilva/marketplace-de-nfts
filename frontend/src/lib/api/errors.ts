import { isAxiosError } from "axios";

import type { ApiErrorBody, ApiErrorDetail } from "@/contracts";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isApiErrorBody(value: unknown): value is ApiErrorBody {
  if (!isRecord(value) || !isRecord(value.error)) return false;
  return typeof value.error.code === "string" && typeof value.error.message === "string";
}

export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details: ApiErrorDetail[] | undefined;
  readonly requestId: string | undefined;

  constructor(params: {
    message: string;
    status: number;
    code: string;
    details?: ApiErrorDetail[];
    requestId?: string;
    cause?: unknown;
  }) {
    super(params.message, { cause: params.cause });
    this.name = "ApiError";
    this.status = params.status;
    this.code = params.code;
    this.details = params.details;
    this.requestId = params.requestId;
  }

  static from(error: unknown): ApiError {
    if (error instanceof ApiError) return error;

    if (isAxiosError(error)) {
      const status = error.response?.status ?? 0;
      const body: unknown = error.response?.data;

      if (isApiErrorBody(body)) {
        return new ApiError({
          message: body.error.message,
          status,
          code: body.error.code,
          details: body.error.details,
          requestId: body.error.requestId,
          cause: error,
        });
      }

      if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
        return new ApiError({
          message: "A requisição demorou demais. Tente novamente.",
          status: 0,
          code: "timeout",
          cause: error,
        });
      }

      if (!error.response) {
        return new ApiError({
          message: "Não foi possível conectar ao servidor.",
          status: 0,
          code: "network_error",
          cause: error,
        });
      }

      return new ApiError({
        message: "Ocorreu um erro inesperado.",
        status,
        code: "http_error",
        cause: error,
      });
    }

    return new ApiError({
      message: error instanceof Error ? error.message : "Ocorreu um erro inesperado.",
      status: 0,
      code: "unknown_error",
      cause: error,
    });
  }
}

export function getErrorMessage(error: unknown): string {
  return ApiError.from(error).message;
}

export function isSessionExpired(error: unknown): boolean {
  const apiError = ApiError.from(error);
  return apiError.status === 401 || apiError.code === "session_expired";
}
