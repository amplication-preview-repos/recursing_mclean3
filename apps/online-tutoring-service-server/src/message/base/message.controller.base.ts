/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MessageService } from "../message.service";
import { MessageCreateInput } from "./MessageCreateInput";
import { Message } from "./Message";
import { MessageFindManyArgs } from "./MessageFindManyArgs";
import { MessageWhereUniqueInput } from "./MessageWhereUniqueInput";
import { MessageUpdateInput } from "./MessageUpdateInput";

export class MessageControllerBase {
  constructor(protected readonly service: MessageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Message })
  async createMessage(
    @common.Body() data: MessageCreateInput
  ): Promise<Message> {
    return await this.service.createMessage({
      data: {
        ...data,

        chat: data.chat
          ? {
              connect: data.chat,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        chat: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Message] })
  @ApiNestedQuery(MessageFindManyArgs)
  async messages(@common.Req() request: Request): Promise<Message[]> {
    const args = plainToClass(MessageFindManyArgs, request.query);
    return this.service.messages({
      ...args,
      select: {
        chat: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Message })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async message(
    @common.Param() params: MessageWhereUniqueInput
  ): Promise<Message | null> {
    const result = await this.service.message({
      where: params,
      select: {
        chat: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Message })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMessage(
    @common.Param() params: MessageWhereUniqueInput,
    @common.Body() data: MessageUpdateInput
  ): Promise<Message | null> {
    try {
      return await this.service.updateMessage({
        where: params,
        data: {
          ...data,

          chat: data.chat
            ? {
                connect: data.chat,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          chat: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          timestamp: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Message })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMessage(
    @common.Param() params: MessageWhereUniqueInput
  ): Promise<Message | null> {
    try {
      return await this.service.deleteMessage({
        where: params,
        select: {
          chat: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          timestamp: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/receive-messages")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ReceiveMessages(
    @common.Body()
    body: MessageCreateInput
  ): Promise<string> {
    return this.service.ReceiveMessages(body);
  }

  @common.Get("/receive-messages/:chatId")
  @swagger.ApiOkResponse({
    type: Message,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ReceiveMessagesQuery(
    @common.Body()
    body: MessageCreateInput
  ): Promise<Message[]> {
    return this.service.ReceiveMessagesQuery(body);
  }

  @common.Get("/:id/send-message")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async SendMessage(
    @common.Body()
    body: MessageCreateInput
  ): Promise<string> {
    return this.service.SendMessage(body);
  }

  @common.Post("/send-message")
  @swagger.ApiOkResponse({
    type: Message,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async SendMessageMutation(
    @common.Body()
    body: MessageCreateInput
  ): Promise<Message> {
    return this.service.SendMessageMutation(body);
  }
}
