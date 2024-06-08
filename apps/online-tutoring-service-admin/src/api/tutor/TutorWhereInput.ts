import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { NonAvailabilityListRelationFilter } from "../nonAvailability/NonAvailabilityListRelationFilter";

export type TutorWhereInput = {
  availabilities?: AvailabilityListRelationFilter;
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
  nonAvailabilities?: NonAvailabilityListRelationFilter;
};
