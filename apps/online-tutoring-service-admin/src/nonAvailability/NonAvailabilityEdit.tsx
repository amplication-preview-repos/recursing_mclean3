import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TutorTitle } from "../tutor/TutorTitle";

export const NonAvailabilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <DateTimeInput label="endTime" source="endTime" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceInput source="tutor.id" reference="Tutor" label="Tutor">
          <SelectInput optionText={TutorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
