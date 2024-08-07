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
import { TranslationKeyWhereInput } from "./TranslationKeyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TranslationKeyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TranslationKeyWhereInput,
  })
  @ValidateNested()
  @Type(() => TranslationKeyWhereInput)
  @IsOptional()
  @Field(() => TranslationKeyWhereInput, {
    nullable: true,
  })
  every?: TranslationKeyWhereInput;

  @ApiProperty({
    required: false,
    type: () => TranslationKeyWhereInput,
  })
  @ValidateNested()
  @Type(() => TranslationKeyWhereInput)
  @IsOptional()
  @Field(() => TranslationKeyWhereInput, {
    nullable: true,
  })
  some?: TranslationKeyWhereInput;

  @ApiProperty({
    required: false,
    type: () => TranslationKeyWhereInput,
  })
  @ValidateNested()
  @Type(() => TranslationKeyWhereInput)
  @IsOptional()
  @Field(() => TranslationKeyWhereInput, {
    nullable: true,
  })
  none?: TranslationKeyWhereInput;
}
export { TranslationKeyListRelationFilter as TranslationKeyListRelationFilter };
