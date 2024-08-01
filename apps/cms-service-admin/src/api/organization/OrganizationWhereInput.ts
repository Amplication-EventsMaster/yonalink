import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TranslationKeyListRelationFilter } from "../translationKey/TranslationKeyListRelationFilter";

export type OrganizationWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  translationKeys?: TranslationKeyListRelationFilter;
};
