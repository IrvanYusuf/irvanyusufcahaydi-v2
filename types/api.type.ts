import { PostgrestError } from "@supabase/supabase-js";

export type ApiResponse<T> = {
  data: T[] | null;
  error: PostgrestError | null;
  count?: number | null;
  status: number;
  statusText?: string;
};

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  keyword?: string;
}

export interface PaginatedResponse<T>
  extends ApiResponse<{ data: T; pagination: PaginationMeta }> {}
