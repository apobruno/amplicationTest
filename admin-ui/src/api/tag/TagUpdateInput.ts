import { CardUpdateManyWithoutTagsInput } from "./CardUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  cards?: CardUpdateManyWithoutTagsInput;
  name?: string | null;
};
