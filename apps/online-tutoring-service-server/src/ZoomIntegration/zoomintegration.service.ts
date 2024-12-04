import { Injectable } from "@nestjs/common";
import { LessonScheduleInput } from "../zoomIntegration/LessonScheduleInput";
import { Message } from "../message/base/Message";

@Injectable()
export class ZoomIntegrationService {
  constructor() {}
  async ScheduleLessonWithZoom(args: LessonScheduleInput): Promise<Message> {
    throw new Error("Not implemented");
  }
}
