import { AvailabilityCreateNestedManyWithoutTutorsInput } from "./AvailabilityCreateNestedManyWithoutTutorsInput";
import { LessonCreateNestedManyWithoutTutorsInput } from "./LessonCreateNestedManyWithoutTutorsInput";

export type TutorCreateInput = {
  availabilities?: AvailabilityCreateNestedManyWithoutTutorsInput;
  lessons?: LessonCreateNestedManyWithoutTutorsInput;
};
