import { List, Movie } from '../resources';
import { translateToMovie } from './translate-to-movie';

export const translateToMoviesList = (data: any): List<Movie> => ({
  page: data?.page,
  results: data?.results.map((r: any) => translateToMovie(r)),
  totalPages: data?.total_pages,
  totalResults: data?.total_results,
});
