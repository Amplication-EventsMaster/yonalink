import { TranslationKeyWhereInput } from "./TranslationKeyWhereInput";
import { TranslationKeyOrderByInput } from "./TranslationKeyOrderByInput";

export type TranslationKeyFindManyArgs = {
  where?: TranslationKeyWhereInput;
  orderBy?: Array<TranslationKeyOrderByInput>;
  skip?: number;
  take?: number;
};
