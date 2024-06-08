import { NonAvailability as TNonAvailability } from "../api/nonAvailability/NonAvailability";

export const NONAVAILABILITY_TITLE_FIELD = "id";

export const NonAvailabilityTitle = (record: TNonAvailability): string => {
  return record.id?.toString() || String(record.id);
};
