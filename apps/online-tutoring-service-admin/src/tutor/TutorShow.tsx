import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TUTOR_TITLE_FIELD } from "./TutorTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const TutorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Availability"
          target="tutorId"
          label="Availabilities"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dayOfWeek" source="dayOfWeek" />
            <TextField label="endTime" source="endTime" />
            <TextField label="ID" source="id" />
            <TextField label="startTime" source="startTime" />
            <ReferenceField label="Tutor" source="tutor.id" reference="Tutor">
              <TextField source={TUTOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Lesson" target="tutorId" label="Lessons">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tutor" source="tutor.id" reference="Tutor">
              <TextField source={TUTOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="NonAvailability"
          target="tutorId"
          label="NonAvailabilities"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="endTime" source="endTime" />
            <TextField label="ID" source="id" />
            <TextField label="startTime" source="startTime" />
            <ReferenceField label="Tutor" source="tutor.id" reference="Tutor">
              <TextField source={TUTOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
