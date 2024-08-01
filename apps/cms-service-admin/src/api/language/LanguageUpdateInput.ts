import { TranslationValueUpdateManyWithoutLanguagesInput } from "./TranslationValueUpdateManyWithoutLanguagesInput";

export type LanguageUpdateInput = {
  code?: string | null;
  name?: string | null;
  translationValues?: TranslationValueUpdateManyWithoutLanguagesInput;
};
