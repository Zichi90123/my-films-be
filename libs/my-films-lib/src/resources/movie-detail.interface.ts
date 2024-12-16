import { Collection } from './collection.interface';
import { Genre } from './genre.interface';
import { Language } from './language.interface';
import { ProductionCompany } from './production-company.interface';
import { ProductionCountry } from './production-country.interface';

export interface MovieDetails {
  adult: boolean;
  backdropPath: string;
  belongsToCollection?: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdbId: string;
  originCountry: string[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry;
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
