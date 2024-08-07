/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { TranslationKeyUpdateManyWithoutOrganizationsInput } from "./TranslationKeyUpdateManyWithoutOrganizationsInput";
import { Type } from "class-transformer";

@InputType()
class OrganizationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => TranslationKeyUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => TranslationKeyUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => TranslationKeyUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  translationKeys?: TranslationKeyUpdateManyWithoutOrganizationsInput;
}

export { OrganizationUpdateInput as OrganizationUpdateInput };
