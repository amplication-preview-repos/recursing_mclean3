import { LessonCreateNestedManyWithoutStudentsInput } from "./LessonCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  lessons?: LessonCreateNestedManyWithoutStudentsInput;
};
