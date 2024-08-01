import * as graphql from "@nestjs/graphql";
import { TranslationKeyResolverBase } from "./base/translationKey.resolver.base";
import { TranslationKey } from "./base/TranslationKey";
import { TranslationKeyService } from "./translationKey.service";

@graphql.Resolver(() => TranslationKey)
export class TranslationKeyResolver extends TranslationKeyResolverBase {
  constructor(protected readonly service: TranslationKeyService) {
    super(service);
  }
}
