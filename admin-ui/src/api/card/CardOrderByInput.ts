import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  answer?: SortOrder;
  createdAt?: SortOrder;
  deckId?: SortOrder;
  id?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
