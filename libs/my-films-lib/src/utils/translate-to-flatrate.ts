import { Flatrate } from '../resources';

export const translateToFlatrate = (data: any): Flatrate => ({
  logoPath: data?.logo_path,
  providerId: data?.provider_id,
  providerName: data?.provider_name,
  displayPriority: data?.display_priority,
});
