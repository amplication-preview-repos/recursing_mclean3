import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type AvailabilityUpdateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  tutor?: TutorWhereUniqueInput | null;
};
