import { Availability } from "../availability/Availability";
import { Lesson } from "../lesson/Lesson";
import { NonAvailability } from "../nonAvailability/NonAvailability";

export type Tutor = {
  availabilities?: Array<Availability>;
  createdAt: Date;
  id: string;
  lessons?: Array<Lesson>;
  nonAvailabilities?: Array<NonAvailability>;
  updatedAt: Date;
};
