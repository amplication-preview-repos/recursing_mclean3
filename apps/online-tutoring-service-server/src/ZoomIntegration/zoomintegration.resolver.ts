import * as graphql from "@nestjs/graphql";
import { LessonScheduleInput } from "../zoomIntegration/LessonScheduleInput";
import { Message } from "../message/base/Message";
import { ZoomIntegrationService } from "./zoomintegration.service";

export class ZoomIntegrationResolver {
  constructor(protected readonly service: ZoomIntegrationService) {}

  @graphql.Mutation(() => Message)
  async ScheduleLessonWithZoom(
    @graphql.Args()
    args: LessonScheduleInput
  ): Promise<Message> {
    return this.service.ScheduleLessonWithZoom(args);
  }
}
