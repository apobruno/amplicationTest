import { Deck as TDeck } from "../api/deck/Deck";

export const DECK_TITLE_FIELD = "name";

export const DeckTitle = (record: TDeck): string => {
  return record.name || String(record.id);
};
