import { List, TvSerie } from '../resources';
import { translateToTvSerie } from './translate-to-tv-serie';

export const translateToTvSeriesList = (data: any): List<TvSerie> => ({
  page: data?.page,
  results: data?.results.map((r: any) => translateToTvSerie(r)),
  totalPages: data?.total_pages,
  totalResults: data?.total_results,
});
