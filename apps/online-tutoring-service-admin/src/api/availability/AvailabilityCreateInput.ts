import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type AvailabilityCreateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  tutor?: TutorWhereUniqueInput | null;
};
