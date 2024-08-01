import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TranslationValueServiceBase } from "./base/translationValue.service.base";

@Injectable()
export class TranslationValueService extends TranslationValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
