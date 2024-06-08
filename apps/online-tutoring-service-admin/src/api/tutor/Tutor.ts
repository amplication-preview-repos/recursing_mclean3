import { Availability } from "../availability/Availability";
import { Lesson } from "../lesson/Lesson";

export type Tutor = {
  availabilities?: Array<Availability>;
  createdAt: Date;
  id: string;
  lessons?: Array<Lesson>;
  updatedAt: Date;
};
