import { TranslationKey } from "../translationKey/TranslationKey";

export type Organization = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  phone: string | null;
  translationKeys?: Array<TranslationKey>;
  updatedAt: Date;
};
