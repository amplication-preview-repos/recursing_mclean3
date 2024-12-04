import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  chat?: ChatWhereUniqueInput | null;
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
