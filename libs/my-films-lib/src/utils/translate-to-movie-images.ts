import { MovieImages } from '../resources';
import { translateToImage } from './translate-to-image';

export const translateToMovieImages = (data: any): MovieImages => ({
  backdrops: data?.backdrops.map((i: any) => translateToImage(i)),
  id: data?.id,
  logos: data?.logos.map((i: any) => translateToImage(i)),
  posters: data?.posters.map((i: any) => translateToImage(i)),
});
