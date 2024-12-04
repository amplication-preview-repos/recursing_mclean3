import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type NonAvailabilityWhereInput = {
  date?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  tutor?: TutorWhereUniqueInput;
};
