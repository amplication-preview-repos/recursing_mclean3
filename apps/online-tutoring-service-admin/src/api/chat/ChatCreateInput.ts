import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  messages?: MessageCreateNestedManyWithoutChatsInput;
  name?: string | null;
};
