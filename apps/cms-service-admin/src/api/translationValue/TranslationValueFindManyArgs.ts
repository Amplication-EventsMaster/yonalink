import { TranslationValueWhereInput } from "./TranslationValueWhereInput";
import { TranslationValueOrderByInput } from "./TranslationValueOrderByInput";

export type TranslationValueFindManyArgs = {
  where?: TranslationValueWhereInput;
  orderBy?: Array<TranslationValueOrderByInput>;
  skip?: number;
  take?: number;
};
