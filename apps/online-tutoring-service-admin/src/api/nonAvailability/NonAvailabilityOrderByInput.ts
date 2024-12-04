import { SortOrder } from "../../util/SortOrder";

export type NonAvailabilityOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  tutorId?: SortOrder;
  updatedAt?: SortOrder;
};
