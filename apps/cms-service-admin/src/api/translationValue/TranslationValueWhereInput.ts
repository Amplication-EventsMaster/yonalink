import { StringFilter } from "../../util/StringFilter";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { TranslationKeyWhereUniqueInput } from "../translationKey/TranslationKeyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TranslationValueWhereInput = {
  id?: StringFilter;
  language?: LanguageWhereUniqueInput;
  translationKey?: TranslationKeyWhereUniqueInput;
  value?: StringNullableFilter;
};
