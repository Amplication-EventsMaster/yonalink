import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TranslationValueListRelationFilter } from "../translationValue/TranslationValueListRelationFilter";

export type LanguageWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  translationValues?: TranslationValueListRelationFilter;
};
