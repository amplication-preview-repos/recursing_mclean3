import { Message } from "../message/Message";

export type Chat = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  updatedAt: Date;
};
