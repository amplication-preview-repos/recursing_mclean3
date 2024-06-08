import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type NonAvailabilityUpdateInput = {
  date?: Date | null;
  endTime?: Date | null;
  startTime?: Date | null;
  tutor?: TutorWhereUniqueInput | null;
};
