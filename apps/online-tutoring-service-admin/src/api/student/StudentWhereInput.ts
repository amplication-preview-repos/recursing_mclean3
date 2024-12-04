import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
};
