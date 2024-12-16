export interface List<T> {
  page: number;
  results: T[];
  totalPages: number;
  totalResults: number;
}
