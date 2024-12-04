import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ZoomIntegrationService } from "./zoomintegration.service";
import { LessonScheduleInput } from "../zoomIntegration/LessonScheduleInput";
import { Message } from "../message/base/Message";

@swagger.ApiTags("zoomIntegrations")
@common.Controller("zoomIntegrations")
export class ZoomIntegrationController {
  constructor(protected readonly service: ZoomIntegrationService) {}

  @common.Post("/schedule-lesson")
  @swagger.ApiOkResponse({
    type: Message
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScheduleLessonWithZoom(
    @common.Body()
    body: LessonScheduleInput
  ): Promise<Message> {
        return this.service.ScheduleLessonWithZoom(body);
      }
}
