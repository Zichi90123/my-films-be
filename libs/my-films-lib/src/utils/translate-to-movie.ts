import { Movie } from '../resources';

export const translateToMovie = (data: any): Movie => ({
  adult: data?.adult,
  backdropPath: data?.backdrop_path,
  genreIds: data?.genre_ids,
  id: data?.id,
  originalLanguage: data?.original_language,
  originalTitle: data?.original_title,
  overview: data?.overview,
  popularity: data?.popularity,
  posterPath: data?.poster_path,
  releaseDate: data?.release_date,
  title: data?.title,
  video: data?.title,
  voteAverage: data?.vote_average,
  voteCount: data?.vote_count,
});
