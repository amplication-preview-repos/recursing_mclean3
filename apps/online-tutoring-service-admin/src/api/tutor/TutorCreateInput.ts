import { AvailabilityCreateNestedManyWithoutTutorsInput } from "./AvailabilityCreateNestedManyWithoutTutorsInput";
import { LessonCreateNestedManyWithoutTutorsInput } from "./LessonCreateNestedManyWithoutTutorsInput";
import { NonAvailabilityCreateNestedManyWithoutTutorsInput } from "./NonAvailabilityCreateNestedManyWithoutTutorsInput";

export type TutorCreateInput = {
  availabilities?: AvailabilityCreateNestedManyWithoutTutorsInput;
  lessons?: LessonCreateNestedManyWithoutTutorsInput;
  nonAvailabilities?: NonAvailabilityCreateNestedManyWithoutTutorsInput;
};
