import { TranslationValue } from "../translationValue/TranslationValue";

export type Language = {
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  translationValues?: Array<TranslationValue>;
  updatedAt: Date;
};
