import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TranslationValueCreateNestedManyWithoutTranslationKeysInput } from "./TranslationValueCreateNestedManyWithoutTranslationKeysInput";

export type TranslationKeyCreateInput = {
  description?: string | null;
  key?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  translationValues?: TranslationValueCreateNestedManyWithoutTranslationKeysInput;
};
