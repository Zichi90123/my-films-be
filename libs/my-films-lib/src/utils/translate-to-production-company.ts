import { ProductionCompany } from '../resources';

export const translateToProductionCompany = (data: any): ProductionCompany => ({
  id: data?.id,
  name: data?.name,
  originCountry: data?.origin_country,
  logoPath: data?.logo_path,
});
