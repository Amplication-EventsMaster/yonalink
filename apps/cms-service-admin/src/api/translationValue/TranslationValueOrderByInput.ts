import { SortOrder } from "../../util/SortOrder";

export type TranslationValueOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  languageId?: SortOrder;
  translationKeyId?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
