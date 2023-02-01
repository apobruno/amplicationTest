import { DeckWhereUniqueInput } from "../deck/DeckWhereUniqueInput";
import { TagCreateNestedManyWithoutCardsInput } from "./TagCreateNestedManyWithoutCardsInput";

export type CardCreateInput = {
  answer: string;
  deck?: DeckWhereUniqueInput | null;
  question: string;
  tag?: TagCreateNestedManyWithoutCardsInput;
};
