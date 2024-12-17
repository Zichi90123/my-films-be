import { WatchProviders } from '../resources';
import { translateToFlatrate } from './translate-to-flatrate';

export const translateToWatchProviders = (data: any): WatchProviders => ({
  link: data?.link,
  flatrate: data?.flatrate.map(f => translateToFlatrate(f)),
});
