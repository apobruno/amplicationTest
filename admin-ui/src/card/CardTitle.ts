import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "answer";

export const CardTitle = (record: TCard): string => {
  return record.answer || String(record.id);
};
