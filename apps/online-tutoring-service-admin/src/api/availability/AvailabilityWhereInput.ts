import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type AvailabilityWhereInput = {
  dayOfWeek?: "Option1";
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  tutor?: TutorWhereUniqueInput;
};
