import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { TutorTitle } from "../tutor/TutorTitle";

export const AvailabilityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="dayOfWeek"
          label="dayOfWeek"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="endTime" source="endTime" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceInput source="tutor.id" reference="Tutor" label="Tutor">
          <SelectInput optionText={TutorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
