import { CardUpdateManyWithoutDecksInput } from "./CardUpdateManyWithoutDecksInput";

export type DeckUpdateInput = {
  cards?: CardUpdateManyWithoutDecksInput;
  name?: string;
};
