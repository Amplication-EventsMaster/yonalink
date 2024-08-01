import { TranslationValueCreateNestedManyWithoutLanguagesInput } from "./TranslationValueCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  code?: string | null;
  name?: string | null;
  translationValues?: TranslationValueCreateNestedManyWithoutLanguagesInput;
};
