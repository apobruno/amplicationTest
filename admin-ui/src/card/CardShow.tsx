import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DECK_TITLE_FIELD } from "../deck/DeckTitle";

export const CardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Answer" source="answer" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Decks" source="deck.id" reference="Deck">
          <TextField source={DECK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Question" source="question" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
