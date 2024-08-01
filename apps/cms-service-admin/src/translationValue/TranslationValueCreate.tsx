import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { LanguageTitle } from "../language/LanguageTitle";
import { TranslationKeyTitle } from "../translationKey/TranslationKeyTitle";

export const TranslationValueCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="language.id"
          reference="Language"
          label="Language"
        >
          <SelectInput optionText={LanguageTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="translationKey.id"
          reference="TranslationKey"
          label="TranslationKey"
        >
          <SelectInput optionText={TranslationKeyTitle} />
        </ReferenceInput>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
