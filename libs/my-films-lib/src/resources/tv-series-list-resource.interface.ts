import { TvSerie } from './tv-serie.interface';

export interface TvSeriesList {
  page: number;
  results: TvSerie[];
  totalPages: number;
  totalResults: number;
}
