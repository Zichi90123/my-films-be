import { SearchResultMediaType } from '../enum';

export interface SearchResult {
  backdropPath: string;
  id: number;
  title?: string;
  originalTitle?: string;
  overview: string;
  posterPath: string;
  mediaType: SearchResultMediaType;
  adult: boolean;
  originalLanguage: string;
  genreIds: string[];
  popularity: number;
  releaseDate?: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  name?: string;
  originalName?: string;
  firstAirDate?: string;
  originCountry?: string[] | string;
  gender?: number;
  knownForDepartment?: string;
  profilePath?: string;
  knownFor?: SearchResult;
}
