import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TranslationKeyTitle } from "../translationKey/TranslationKeyTitle";

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Name" source="name" />
        <TextInput label="phone" source="phone" />
        <ReferenceArrayInput
          source="translationKeys"
          reference="TranslationKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TranslationKeyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
