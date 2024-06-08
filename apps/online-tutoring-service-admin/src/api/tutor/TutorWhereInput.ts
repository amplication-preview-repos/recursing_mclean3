import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type TutorWhereInput = {
  availabilities?: AvailabilityListRelationFilter;
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
};
