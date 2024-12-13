import { TvSeriesList } from '../resources';
import { translateToTvSerie } from './translate-to-tv-serie';

export const translateToTvSeriesList = (data: any): TvSeriesList => ({
  page: data?.page,
  results: data?.results.map((r: any) => translateToTvSerie(r)),
  totalPages: data?.total_pages,
  totalResults: data?.total_results,
});
