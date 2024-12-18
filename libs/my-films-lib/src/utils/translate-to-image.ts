import { Image } from '../resources';

export const translateToImage = (data?: any): Image => ({
  aspectRatio: data?.aspect_ratio,
  height: data?.height,
  iso639: data?.iso_639_1,
  filePath: data?.file_path,
  voteAverage: data?.vote_average,
  voteCount: data?.vote_count,
  width: data?.width,
});
