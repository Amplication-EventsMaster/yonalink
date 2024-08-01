import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TranslationValueListRelationFilter } from "../translationValue/TranslationValueListRelationFilter";

export type TranslationKeyWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  key?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  translationValues?: TranslationValueListRelationFilter;
};
