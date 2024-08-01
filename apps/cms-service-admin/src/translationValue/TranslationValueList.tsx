import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";
import { TRANSLATIONKEY_TITLE_FIELD } from "../translationKey/TranslationKeyTitle";

export const TranslationValueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TranslationValues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Language"
          source="language.id"
          reference="Language"
        >
          <TextField source={LANGUAGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="TranslationKey"
          source="translationkey.id"
          reference="TranslationKey"
        >
          <TextField source={TRANSLATIONKEY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
