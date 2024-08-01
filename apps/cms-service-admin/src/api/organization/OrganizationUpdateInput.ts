import { TranslationKeyUpdateManyWithoutOrganizationsInput } from "./TranslationKeyUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  address?: string | null;
  name?: string | null;
  phone?: string | null;
  translationKeys?: TranslationKeyUpdateManyWithoutOrganizationsInput;
};
