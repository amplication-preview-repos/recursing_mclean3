import { Tutor } from "../tutor/Tutor";

export type Availability = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  tutor?: Tutor | null;
  updatedAt: Date;
};
