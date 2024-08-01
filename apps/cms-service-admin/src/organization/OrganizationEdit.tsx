import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TranslationKeyTitle } from "../translationKey/TranslationKeyTitle";

export const OrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
