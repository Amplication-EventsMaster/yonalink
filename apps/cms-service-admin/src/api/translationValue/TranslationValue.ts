import { Language } from "../language/Language";
import { TranslationKey } from "../translationKey/TranslationKey";

export type TranslationValue = {
  createdAt: Date;
  id: string;
  language?: Language | null;
  translationKey?: TranslationKey | null;
  updatedAt: Date;
  value: string | null;
};
