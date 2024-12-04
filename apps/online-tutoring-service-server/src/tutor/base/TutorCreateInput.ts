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
import { AvailabilityCreateNestedManyWithoutTutorsInput } from "./AvailabilityCreateNestedManyWithoutTutorsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { LessonCreateNestedManyWithoutTutorsInput } from "./LessonCreateNestedManyWithoutTutorsInput";
import { NonAvailabilityCreateNestedManyWithoutTutorsInput } from "./NonAvailabilityCreateNestedManyWithoutTutorsInput";

@InputType()
class TutorCreateInput {
  @ApiProperty({
    required: false,
    type: () => AvailabilityCreateNestedManyWithoutTutorsInput,
  })
  @ValidateNested()
  @Type(() => AvailabilityCreateNestedManyWithoutTutorsInput)
  @IsOptional()
  @Field(() => AvailabilityCreateNestedManyWithoutTutorsInput, {
    nullable: true,
  })
  availabilities?: AvailabilityCreateNestedManyWithoutTutorsInput;

  @ApiProperty({
    required: false,
    type: () => LessonCreateNestedManyWithoutTutorsInput,
  })
  @ValidateNested()
  @Type(() => LessonCreateNestedManyWithoutTutorsInput)
  @IsOptional()
  @Field(() => LessonCreateNestedManyWithoutTutorsInput, {
    nullable: true,
  })
  lessons?: LessonCreateNestedManyWithoutTutorsInput;

  @ApiProperty({
    required: false,
    type: () => NonAvailabilityCreateNestedManyWithoutTutorsInput,
  })
  @ValidateNested()
  @Type(() => NonAvailabilityCreateNestedManyWithoutTutorsInput)
  @IsOptional()
  @Field(() => NonAvailabilityCreateNestedManyWithoutTutorsInput, {
    nullable: true,
  })
  nonAvailabilities?: NonAvailabilityCreateNestedManyWithoutTutorsInput;
}

export { TutorCreateInput as TutorCreateInput };
