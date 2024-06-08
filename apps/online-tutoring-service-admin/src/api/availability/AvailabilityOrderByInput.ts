import { SortOrder } from "../../util/SortOrder";

export type AvailabilityOrderByInput = {
  createdAt?: SortOrder;
  dayOfWeek?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  tutorId?: SortOrder;
  updatedAt?: SortOrder;
};
