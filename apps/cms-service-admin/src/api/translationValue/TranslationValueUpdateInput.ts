import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { TranslationKeyWhereUniqueInput } from "../translationKey/TranslationKeyWhereUniqueInput";

export type TranslationValueUpdateInput = {
  language?: LanguageWhereUniqueInput | null;
  translationKey?: TranslationKeyWhereUniqueInput | null;
  value?: string | null;
};
