import { CastMember } from "../resources";

export const translateToCastMember = (data: any): CastMember => ({
    adult: data?.adult,
    gender: data?.gender,
    id: data?.id,
    knownForDepartment: data?.known_for_department,
    name: data?.name,
    originalName: data?.original_name,
    popularity: data?.popularity,
    profilePath: data?.profile_path,
    castId: data?.cast_id,
    character: data?.character,
    creditId: data?.credit_id,
    order: data?.order
})