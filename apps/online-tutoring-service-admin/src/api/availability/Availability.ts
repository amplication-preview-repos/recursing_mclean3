import { Tutor } from "../tutor/Tutor";

export type Availability = {
  createdAt: Date;
  dayOfWeek?: "Option1" | null;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  tutor?: Tutor | null;
  updatedAt: Date;
};
