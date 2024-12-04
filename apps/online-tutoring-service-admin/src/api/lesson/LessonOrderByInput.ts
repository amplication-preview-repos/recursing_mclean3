import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  tutorId?: SortOrder;
  updatedAt?: SortOrder;
};
