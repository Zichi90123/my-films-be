import { ProductionCountry } from '../resources';

export const translateToProductionCountry = (data: any): ProductionCountry => ({
  iso3166: data?.iso_3166_1,
  name: data?.name,
});
