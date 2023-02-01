import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DeckTitle } from "../deck/DeckTitle";
import { TagTitle } from "../tag/TagTitle";

export const CardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Answer" source="answer" />
        <ReferenceInput source="deck.id" reference="Deck" label="Decks">
          <SelectInput optionText={DeckTitle} />
        </ReferenceInput>
        <TextInput label="Question" source="question" />
        <ReferenceArrayInput
          source="tag"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
