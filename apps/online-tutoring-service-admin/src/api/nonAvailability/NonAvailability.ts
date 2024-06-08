import { Tutor } from "../tutor/Tutor";

export type NonAvailability = {
  createdAt: Date;
  date: Date | null;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  tutor?: Tutor | null;
  updatedAt: Date;
};
