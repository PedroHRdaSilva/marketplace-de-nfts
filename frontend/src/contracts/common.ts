export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface ApiEnvelope<T> {
  data: T;
}

export interface ApiListEnvelope<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface ApiErrorDetail {
  field?: string;
  code: string;
  message: string;
}

export interface ApiErrorBody {
  error: {
    code: string;
    message: string;
    details?: ApiErrorDetail[];
    requestId?: string;
  };
}

export type SortDirection = "asc" | "desc";
