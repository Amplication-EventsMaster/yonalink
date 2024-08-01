/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumWorkflowStepAction } from "./EnumWorkflowStepAction";
import {
  IsEnum,
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Max,
  ValidateNested,
} from "class-validator";
import { EnumWorkflowStepTemplate } from "./EnumWorkflowStepTemplate";
import { Workflow } from "../../workflow/base/Workflow";
import { Type } from "class-transformer";
import { WorkflowReminder } from "../../workflowReminder/base/WorkflowReminder";

@ObjectType()
class WorkflowStep {
  @ApiProperty({
    required: true,
    enum: EnumWorkflowStepAction,
  })
  @IsEnum(EnumWorkflowStepAction)
  @Field(() => EnumWorkflowStepAction, {
    nullable: true,
  })
  action?: "EMAIL_HOST" | "EMAIL_ATTENDEE" | "SMS_ATTENDEE" | "SMS_NUMBER";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  emailSubject!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reminderBody!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sendTo!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  stepNumber!: number;

  @ApiProperty({
    required: true,
    enum: EnumWorkflowStepTemplate,
  })
  @IsEnum(EnumWorkflowStepTemplate)
  @Field(() => EnumWorkflowStepTemplate, {
    nullable: true,
  })
  template?: "REMINDER" | "CUSTOM";

  @ApiProperty({
    required: true,
    type: () => Workflow,
  })
  @ValidateNested()
  @Type(() => Workflow)
  workflow?: Workflow;

  @ApiProperty({
    required: false,
    type: () => [WorkflowReminder],
  })
  @ValidateNested()
  @Type(() => WorkflowReminder)
  @IsOptional()
  workflowReminders?: Array<WorkflowReminder>;
}

export { WorkflowStep as WorkflowStep };
