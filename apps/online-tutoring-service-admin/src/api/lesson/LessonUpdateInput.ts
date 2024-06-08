import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type LessonUpdateInput = {
  date?: Date | null;
  student?: StudentWhereUniqueInput | null;
  tutor?: TutorWhereUniqueInput | null;
};
