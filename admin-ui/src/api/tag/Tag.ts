import { Card } from "../card/Card";

export type Tag = {
  cards?: Array<Card>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
