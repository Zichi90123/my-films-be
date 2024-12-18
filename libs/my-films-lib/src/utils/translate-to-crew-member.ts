import { CrewMember } from '../resources';

export const translateToCrewMember = (data: any): CrewMember => ({
  adult: data?.adult,
  gender: data?.gender,
  id: data?.id,
  knownForDepartment: data?.known_for_department,
  name: data?.name,
  originalName: data?.original_name,
  popularity: data?.popularity,
  profilePath: data?.profile_path,
  creditId: data?.credit_id,
  department: data?.department,
  job: data?.job,
});
