import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TranslationValueService } from "./translationValue.service";
import { TranslationValueControllerBase } from "./base/translationValue.controller.base";

@swagger.ApiTags("translationValues")
@common.Controller("translationValues")
export class TranslationValueController extends TranslationValueControllerBase {
  constructor(protected readonly service: TranslationValueService) {
    super(service);
  }
}
