import { SortOrder } from "../../util/SortOrder";

export type TranslationKeyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  organizationId?: SortOrder;
  updatedAt?: SortOrder;
};
