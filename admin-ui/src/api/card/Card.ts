import { Deck } from "../deck/Deck";
import { Tag } from "../tag/Tag";

export type Card = {
  answer: string;
  createdAt: Date;
  deck?: Deck | null;
  id: string;
  question: string;
  tag?: Array<Tag>;
  updatedAt: Date;
};
