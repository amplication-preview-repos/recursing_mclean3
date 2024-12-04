import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { AvailabilityTitle } from "../availability/AvailabilityTitle";
import { LessonTitle } from "../lesson/LessonTitle";
import { NonAvailabilityTitle } from "../nonAvailability/NonAvailabilityTitle";

export const TutorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="availabilities"
          reference="Availability"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AvailabilityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="lessons"
          reference="Lesson"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LessonTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="nonAvailabilities"
          reference="NonAvailability"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NonAvailabilityTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
