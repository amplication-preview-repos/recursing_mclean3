import { Lesson } from "../lesson/Lesson";

export type Student = {
  createdAt: Date;
  id: string;
  lessons?: Array<Lesson>;
  updatedAt: Date;
};
