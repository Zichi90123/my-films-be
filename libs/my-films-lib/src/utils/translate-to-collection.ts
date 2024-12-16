import { Collection } from '../resources';

export const translateToCollection = (data: any): Collection => ({
  id: data?.id,
  name: data?.name,
  posterPath: data?.poster_path,
  backdropPath: data?.backdrop_path,
});
