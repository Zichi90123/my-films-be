import { TvSerie } from '../resources';

export const translateToTvSerie = (data: any): TvSerie => ({
  adult: data?.adult,
  backdropPath: data?.backdrop_path,
  genreIds: data?.genre_ids,
  id: data?.id,
  originCountry: data?.origin_country,
  originalLanguage: data?.original_language,
  originalName: data?.original_name,
  overview: data?.overview,
  popularity: data?.popularity,
  posterPath: data?.poster_path,
  firstAirDate: data?.first_air_date,
  name: data?.name,
  voteAverage: data?.vote_average,
  voteCount: data?.vote_count,
});
