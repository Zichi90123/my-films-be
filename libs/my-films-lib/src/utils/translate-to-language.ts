import { Language } from '../resources/language.interface';

export const translateToLanguage = (data: any): Language => ({
  iso639: data?.iso_639_1,
  englishName: data?.english_name,
  name: data?.name,
});
