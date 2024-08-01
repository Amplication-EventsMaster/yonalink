import * as graphql from "@nestjs/graphql";
import { TranslationValueResolverBase } from "./base/translationValue.resolver.base";
import { TranslationValue } from "./base/TranslationValue";
import { TranslationValueService } from "./translationValue.service";

@graphql.Resolver(() => TranslationValue)
export class TranslationValueResolver extends TranslationValueResolverBase {
  constructor(protected readonly service: TranslationValueService) {
    super(service);
  }
}
