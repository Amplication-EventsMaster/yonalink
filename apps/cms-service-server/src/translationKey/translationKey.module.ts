import { Module } from "@nestjs/common";
import { TranslationKeyModuleBase } from "./base/translationKey.module.base";
import { TranslationKeyService } from "./translationKey.service";
import { TranslationKeyController } from "./translationKey.controller";
import { TranslationKeyResolver } from "./translationKey.resolver";

@Module({
  imports: [TranslationKeyModuleBase],
  controllers: [TranslationKeyController],
  providers: [TranslationKeyService, TranslationKeyResolver],
  exports: [TranslationKeyService],
})
export class TranslationKeyModule {}
