import { AvailabilityUpdateManyWithoutTutorsInput } from "./AvailabilityUpdateManyWithoutTutorsInput";
import { LessonUpdateManyWithoutTutorsInput } from "./LessonUpdateManyWithoutTutorsInput";
import { NonAvailabilityUpdateManyWithoutTutorsInput } from "./NonAvailabilityUpdateManyWithoutTutorsInput";

export type TutorUpdateInput = {
  availabilities?: AvailabilityUpdateManyWithoutTutorsInput;
  lessons?: LessonUpdateManyWithoutTutorsInput;
  nonAvailabilities?: NonAvailabilityUpdateManyWithoutTutorsInput;
};
