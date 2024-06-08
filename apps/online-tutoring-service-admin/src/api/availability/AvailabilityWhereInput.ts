import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type AvailabilityWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  tutor?: TutorWhereUniqueInput;
};
