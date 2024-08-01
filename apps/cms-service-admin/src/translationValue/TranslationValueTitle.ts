import { TranslationValue as TTranslationValue } from "../api/translationValue/TranslationValue";

export const TRANSLATIONVALUE_TITLE_FIELD = "value";

export const TranslationValueTitle = (record: TTranslationValue): string => {
  return record.value?.toString() || String(record.id);
};
