import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TranslationKeyServiceBase } from "./base/translationKey.service.base";

@Injectable()
export class TranslationKeyService extends TranslationKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
