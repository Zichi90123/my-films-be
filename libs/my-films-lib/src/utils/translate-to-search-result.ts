import { SearchResult } from '../resources';

export const translateToSearchResult = (data: any): SearchResult => {
  return {
    backdropPath: data?.backdrop_path,
    id: data?.id,
    title: data?.title,
    originalTitle: data?.original_title,
    overview: data?.overview,
    posterPath: data?.poster_path,
    mediaType: data?.media_type,
    adult: data?.adult,
    originalLanguage: data?.original_language,
    genreIds: data?.genre_ids,
    popularity: data?.popularity,
    releaseDate: data?.release_date,
    video: data?.video,
    voteAverage: data?.vote_average,
    voteCount: data?.vote_count,
    name: data?.name,
    originalName: data?.original_name,
    firstAirDate: data?.first_air_date,
    originCountry: data?.origin_country,
    gender: data?.gender,
    knownForDepartment: data?.known_for_department,
    profilePath: data?.profile_path,
    knownFor: data?.known_for?.map((k: any) => translateToSearchResult(k)),
  };
};
