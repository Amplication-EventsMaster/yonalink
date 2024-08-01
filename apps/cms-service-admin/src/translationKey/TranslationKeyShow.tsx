import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";
import { TRANSLATIONKEY_TITLE_FIELD } from "./TranslationKeyTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const TranslationKeyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Key" source="key" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TranslationValue"
          target="translationKeyId"
          label="TranslationValues"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
