import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type AvailabilityCreateInput = {
  dayOfWeek?: "Option1" | null;
  endTime?: Date | null;
  startTime?: Date | null;
  tutor?: TutorWhereUniqueInput | null;
};
