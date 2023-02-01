import { Card } from "../card/Card";

export type Deck = {
  cards?: Array<Card>;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};
