import { Tutor as TTutor } from "../api/tutor/Tutor";

export const TUTOR_TITLE_FIELD = "id";

export const TutorTitle = (record: TTutor): string => {
  return record.id?.toString() || String(record.id);
};
