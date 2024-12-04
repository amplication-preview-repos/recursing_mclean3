import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ArgsType()
class LessonScheduleInput {
    @Field(() => Date)
    @Type(() => Date)
    lessonDate!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    studentId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    tutorId!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    zoomMeetingId?: string;
}

export { LessonScheduleInput as LessonScheduleInput };