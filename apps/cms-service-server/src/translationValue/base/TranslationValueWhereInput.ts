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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { LanguageWhereUniqueInput } from "../../language/base/LanguageWhereUniqueInput";
import { TranslationKeyWhereUniqueInput } from "../../translationKey/base/TranslationKeyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class TranslationValueWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => LanguageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereUniqueInput)
  @IsOptional()
  @Field(() => LanguageWhereUniqueInput, {
    nullable: true,
  })
  language?: LanguageWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TranslationKeyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TranslationKeyWhereUniqueInput)
  @IsOptional()
  @Field(() => TranslationKeyWhereUniqueInput, {
    nullable: true,
  })
  translationKey?: TranslationKeyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  value?: StringNullableFilter;
}

export { TranslationValueWhereInput as TranslationValueWhereInput };