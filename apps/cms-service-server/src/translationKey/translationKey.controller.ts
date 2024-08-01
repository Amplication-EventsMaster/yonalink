import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TranslationKeyService } from "./translationKey.service";
import { TranslationKeyControllerBase } from "./base/translationKey.controller.base";

@swagger.ApiTags("translationKeys")
@common.Controller("translationKeys")
export class TranslationKeyController extends TranslationKeyControllerBase {
  constructor(protected readonly service: TranslationKeyService) {
    super(service);
  }
}
