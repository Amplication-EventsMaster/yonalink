import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";
import { TRANSLATIONKEY_TITLE_FIELD } from "../translationKey/TranslationKeyTitle";

export const TranslationValueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
