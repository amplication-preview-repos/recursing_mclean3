import { Module } from "@nestjs/common";
import { NonAvailabilityModuleBase } from "./base/nonAvailability.module.base";
import { NonAvailabilityService } from "./nonAvailability.service";
import { NonAvailabilityController } from "./nonAvailability.controller";
import { NonAvailabilityResolver } from "./nonAvailability.resolver";

@Module({
  imports: [NonAvailabilityModuleBase],
  controllers: [NonAvailabilityController],
  providers: [NonAvailabilityService, NonAvailabilityResolver],
  exports: [NonAvailabilityService],
})
export class NonAvailabilityModule {}
