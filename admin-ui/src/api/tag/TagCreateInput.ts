import { CardCreateNestedManyWithoutTagsInput } from "./CardCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  cards?: CardCreateNestedManyWithoutTagsInput;
  name?: string | null;
};
