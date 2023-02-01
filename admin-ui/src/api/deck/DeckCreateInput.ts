import { CardCreateNestedManyWithoutDecksInput } from "./CardCreateNestedManyWithoutDecksInput";

export type DeckCreateInput = {
  cards?: CardCreateNestedManyWithoutDecksInput;
  name: string;
};
