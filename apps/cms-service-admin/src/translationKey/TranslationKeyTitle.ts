import { TranslationKey as TTranslationKey } from "../api/translationKey/TranslationKey";

export const TRANSLATIONKEY_TITLE_FIELD = "key";

export const TranslationKeyTitle = (record: TTranslationKey): string => {
  return record.key?.toString() || String(record.id);
};
