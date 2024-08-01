/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LanguageService } from "../language.service";
import { LanguageCreateInput } from "./LanguageCreateInput";
import { Language } from "./Language";
import { LanguageFindManyArgs } from "./LanguageFindManyArgs";
import { LanguageWhereUniqueInput } from "./LanguageWhereUniqueInput";
import { LanguageUpdateInput } from "./LanguageUpdateInput";
import { TranslationValueFindManyArgs } from "../../translationValue/base/TranslationValueFindManyArgs";
import { TranslationValue } from "../../translationValue/base/TranslationValue";
import { TranslationValueWhereUniqueInput } from "../../translationValue/base/TranslationValueWhereUniqueInput";

export class LanguageControllerBase {
  constructor(protected readonly service: LanguageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Language })
  async createLanguage(
    @common.Body() data: LanguageCreateInput
  ): Promise<Language> {
    return await this.service.createLanguage({
      data: data,
      select: {
        code: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Language] })
  @ApiNestedQuery(LanguageFindManyArgs)
  async languages(@common.Req() request: Request): Promise<Language[]> {
    const args = plainToClass(LanguageFindManyArgs, request.query);
    return this.service.languages({
      ...args,
      select: {
        code: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Language })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async language(
    @common.Param() params: LanguageWhereUniqueInput
  ): Promise<Language | null> {
    const result = await this.service.language({
      where: params,
      select: {
        code: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Language })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLanguage(
    @common.Param() params: LanguageWhereUniqueInput,
    @common.Body() data: LanguageUpdateInput
  ): Promise<Language | null> {
    try {
      return await this.service.updateLanguage({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Language })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLanguage(
    @common.Param() params: LanguageWhereUniqueInput
  ): Promise<Language | null> {
    try {
      return await this.service.deleteLanguage({
        where: params,
        select: {
          code: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/translationValues")
  @ApiNestedQuery(TranslationValueFindManyArgs)
  async findTranslationValues(
    @common.Req() request: Request,
    @common.Param() params: LanguageWhereUniqueInput
  ): Promise<TranslationValue[]> {
    const query = plainToClass(TranslationValueFindManyArgs, request.query);
    const results = await this.service.findTranslationValues(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        language: {
          select: {
            id: true,
          },
        },

        translationKey: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/translationValues")
  async connectTranslationValues(
    @common.Param() params: LanguageWhereUniqueInput,
    @common.Body() body: TranslationValueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translationValues: {
        connect: body,
      },
    };
    await this.service.updateLanguage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/translationValues")
  async updateTranslationValues(
    @common.Param() params: LanguageWhereUniqueInput,
    @common.Body() body: TranslationValueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translationValues: {
        set: body,
      },
    };
    await this.service.updateLanguage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/translationValues")
  async disconnectTranslationValues(
    @common.Param() params: LanguageWhereUniqueInput,
    @common.Body() body: TranslationValueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translationValues: {
        disconnect: body,
      },
    };
    await this.service.updateLanguage({
      where: params,
      data,
      select: { id: true },
    });
  }
}
