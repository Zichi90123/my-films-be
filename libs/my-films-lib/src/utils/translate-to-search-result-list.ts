import { List, SearchResult } from '../resources';
import { translateToSearchResult } from './translate-to-search-result';

export const translateToSearchResultList = (data: any): List<SearchResult> => ({
  page: data?.page,
  results: data?.results.map((r: any) => translateToSearchResult(r)),
  totalPages: data?.total_pages,
  totalResults: data?.total_results,
});
