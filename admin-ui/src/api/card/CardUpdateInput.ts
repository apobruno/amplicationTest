import { DeckWhereUniqueInput } from "../deck/DeckWhereUniqueInput";
import { TagUpdateManyWithoutCardsInput } from "./TagUpdateManyWithoutCardsInput";

export type CardUpdateInput = {
  answer?: string;
  deck?: DeckWhereUniqueInput | null;
  question?: string;
  tag?: TagUpdateManyWithoutCardsInput;
};
