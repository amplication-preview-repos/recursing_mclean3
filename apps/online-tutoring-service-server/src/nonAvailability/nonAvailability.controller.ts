import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NonAvailabilityService } from "./nonAvailability.service";
import { NonAvailabilityControllerBase } from "./base/nonAvailability.controller.base";

@swagger.ApiTags("nonAvailabilities")
@common.Controller("nonAvailabilities")
export class NonAvailabilityController extends NonAvailabilityControllerBase {
  constructor(protected readonly service: NonAvailabilityService) {
    super(service);
  }
}
