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
import { LessonCreateNestedManyWithoutStudentsInput } from "./LessonCreateNestedManyWithoutStudentsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StudentCreateInput {
  @ApiProperty({
    required: false,
    type: () => LessonCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => LessonCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => LessonCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  lessons?: LessonCreateNestedManyWithoutStudentsInput;
}

export { StudentCreateInput as StudentCreateInput };
