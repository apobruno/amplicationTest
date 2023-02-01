import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TagWhereInput = {
  cards?: CardListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
