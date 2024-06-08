import { Student } from "../student/Student";
import { Tutor } from "../tutor/Tutor";

export type Lesson = {
  createdAt: Date;
  date: Date | null;
  id: string;
  student?: Student | null;
  tutor?: Tutor | null;
  updatedAt: Date;
};
