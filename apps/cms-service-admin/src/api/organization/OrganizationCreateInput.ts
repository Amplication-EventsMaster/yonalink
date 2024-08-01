import { TranslationKeyCreateNestedManyWithoutOrganizationsInput } from "./TranslationKeyCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  address?: string | null;
  name?: string | null;
  phone?: string | null;
  translationKeys?: TranslationKeyCreateNestedManyWithoutOrganizationsInput;
};
