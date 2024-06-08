import { AvailabilityUpdateManyWithoutTutorsInput } from "./AvailabilityUpdateManyWithoutTutorsInput";
import { LessonUpdateManyWithoutTutorsInput } from "./LessonUpdateManyWithoutTutorsInput";

export type TutorUpdateInput = {
  availabilities?: AvailabilityUpdateManyWithoutTutorsInput;
  lessons?: LessonUpdateManyWithoutTutorsInput;
};
