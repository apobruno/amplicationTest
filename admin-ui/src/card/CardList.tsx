import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DECK_TITLE_FIELD } from "../deck/DeckTitle";

export const CardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cards"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Answer" source="answer" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Decks" source="deck.id" reference="Deck">
          <TextField source={DECK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Question" source="question" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
