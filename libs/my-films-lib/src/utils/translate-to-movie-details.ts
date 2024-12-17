import { MovieDetails } from '../resources/movie-detail.interface';
import { translateToCollection } from './translate-to-collection';
import { translateToLanguage } from './translate-to-language';
import { translateToProductionCompany } from './translate-to-production-company';
import { translateToProductionCountry } from './translate-to-production-country';

export const translateToMovieDetails = (data: any): MovieDetails => ({
  adult: data?.adult,
  backdropPath: data?.backdrop_path,
  belongsToCollection: data?.belongs_to_collection
    ? translateToCollection(data?.belongs_to_collection)
    : undefined,
  budget: data?.budget,
  genres: data?.genres,
  homepage: data?.homepage,
  id: data?.id,
  imdbId: data?.imdb_id,
  originCountry: data?.orgin_country,
  originalLanguage: data?.original_language,
  originalTitle: data?.original_title,
  overview: data?.overview,
  popularity: data?.popularity,
  posterPath: data?.poster_path,
  productionCompanies: data?.production_companies.map(p =>
    translateToProductionCompany(p),
  ),
  productionCountries: data?.production_countries.map(c =>
    translateToProductionCountry(c),
  ),
  releaseDate: data?.release_date,
  revenue: data?.revenue,
  runtime: data?.runtime,
  spokenLanguages: data?.spoken_languages.map(l => translateToLanguage(l)),
  status: data?.status,
  tagline: data?.tagline,
  title: data?.title,
  video: data?.video,
  voteAverage: data?.vote_average,
  voteCount: data?.vote_count,
});
