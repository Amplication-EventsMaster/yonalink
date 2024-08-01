import { Organization } from "../organization/Organization";
import { TranslationValue } from "../translationValue/TranslationValue";

export type TranslationKey = {
  createdAt: Date;
  description: string | null;
  id: string;
  key: string | null;
  organization?: Organization | null;
  translationValues?: Array<TranslationValue>;
  updatedAt: Date;
};
