import { StringFilter } from "../../util/StringFilter";
import { DeckWhereUniqueInput } from "../deck/DeckWhereUniqueInput";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type CardWhereInput = {
  answer?: StringFilter;
  deck?: DeckWhereUniqueInput;
  id?: StringFilter;
  question?: StringFilter;
  tag?: TagListRelationFilter;
};
