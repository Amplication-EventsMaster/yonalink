import { Module } from "@nestjs/common";
import { TranslationValueModuleBase } from "./base/translationValue.module.base";
import { TranslationValueService } from "./translationValue.service";
import { TranslationValueController } from "./translationValue.controller";
import { TranslationValueResolver } from "./translationValue.resolver";

@Module({
  imports: [TranslationValueModuleBase],
  controllers: [TranslationValueController],
  providers: [TranslationValueService, TranslationValueResolver],
  exports: [TranslationValueService],
})
export class TranslationValueModule {}
