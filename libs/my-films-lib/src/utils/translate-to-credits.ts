import { Credits } from '../resources';
import { translateToCastMember } from './translate-to-cast-member';
import { translateToCrewMember } from './translate-to-crew-member';

export const translateToCredits = (data: any): Credits => ({
  id: data?.id,
  cast: data?.cast.map(c => translateToCastMember(c)),
  crew: data?.crew.map(c => translateToCrewMember(c)),
});
