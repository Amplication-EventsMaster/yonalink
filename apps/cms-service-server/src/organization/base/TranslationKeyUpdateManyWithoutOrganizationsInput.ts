/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TranslationKeyWhereUniqueInput } from "../../translationKey/base/TranslationKeyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TranslationKeyUpdateManyWithoutOrganizationsInput {
  @Field(() => [TranslationKeyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TranslationKeyWhereUniqueInput],
  })
  connect?: Array<TranslationKeyWhereUniqueInput>;

  @Field(() => [TranslationKeyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TranslationKeyWhereUniqueInput],
  })
  disconnect?: Array<TranslationKeyWhereUniqueInput>;

  @Field(() => [TranslationKeyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TranslationKeyWhereUniqueInput],
  })
  set?: Array<TranslationKeyWhereUniqueInput>;
}

export { TranslationKeyUpdateManyWithoutOrganizationsInput as TranslationKeyUpdateManyWithoutOrganizationsInput };
