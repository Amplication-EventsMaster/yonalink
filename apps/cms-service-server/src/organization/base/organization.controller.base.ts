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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrganizationService } from "../organization.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrganizationCreateInput } from "./OrganizationCreateInput";
import { Organization } from "./Organization";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";
import { OrganizationUpdateInput } from "./OrganizationUpdateInput";
import { TranslationKeyFindManyArgs } from "../../translationKey/base/TranslationKeyFindManyArgs";
import { TranslationKey } from "../../translationKey/base/TranslationKey";
import { TranslationKeyWhereUniqueInput } from "../../translationKey/base/TranslationKeyWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Organization })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrganization(
    @common.Body() data: OrganizationCreateInput
  ): Promise<Organization> {
    return await this.service.createOrganization({
      data: data,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Organization] })
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async organizations(@common.Req() request: Request): Promise<Organization[]> {
    const args = plainToClass(OrganizationFindManyArgs, request.query);
    return this.service.organizations({
      ...args,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async organization(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    const result = await this.service.organization({
      where: params,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        phone: true,
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrganization(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() data: OrganizationUpdateInput
  ): Promise<Organization | null> {
    try {
      return await this.service.updateOrganization({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          id: true,
          name: true,
          phone: true,
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
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOrganization(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    try {
      return await this.service.deleteOrganization({
        where: params,
        select: {
          address: true,
          createdAt: true,
          id: true,
          name: true,
          phone: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/translationKeys")
  @ApiNestedQuery(TranslationKeyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TranslationKey",
    action: "read",
    possession: "any",
  })
  async findTranslationKeys(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<TranslationKey[]> {
    const query = plainToClass(TranslationKeyFindManyArgs, request.query);
    const results = await this.service.findTranslationKeys(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        key: true,

        organization: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/translationKeys")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectTranslationKeys(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: TranslationKeyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translationKeys: {
        connect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/translationKeys")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateTranslationKeys(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: TranslationKeyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translationKeys: {
        set: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/translationKeys")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectTranslationKeys(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: TranslationKeyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translationKeys: {
        disconnect: body,
      },
    };
    await this.service.updateOrganization({
      where: params,
      data,
      select: { id: true },
    });
  }
}
