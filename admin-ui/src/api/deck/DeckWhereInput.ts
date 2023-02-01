import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeckWhereInput = {
  cards?: CardListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
