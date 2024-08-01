import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TranslationValueUpdateManyWithoutTranslationKeysInput } from "./TranslationValueUpdateManyWithoutTranslationKeysInput";

export type TranslationKeyUpdateInput = {
  description?: string | null;
  key?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  translationValues?: TranslationValueUpdateManyWithoutTranslationKeysInput;
};
