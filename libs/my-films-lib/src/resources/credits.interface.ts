import { CastMember } from './cast-member.interface';
import { CrewMember } from './crew-member.interface';

export interface Credits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}
