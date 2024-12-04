import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type LessonWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
  tutor?: TutorWhereUniqueInput;
};
