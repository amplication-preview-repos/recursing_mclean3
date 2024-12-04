import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  messages?: MessageUpdateManyWithoutChatsInput;
  name?: string | null;
};
