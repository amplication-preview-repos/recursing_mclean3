import { Module } from "@nestjs/common";
import { ZoomIntegrationService } from "./zoomintegration.service";
import { ZoomIntegrationController } from "./zoomintegration.controller";
import { ZoomIntegrationResolver } from "./zoomintegration.resolver";

@Module({
  controllers: [ZoomIntegrationController],
  providers: [ZoomIntegrationService, ZoomIntegrationResolver],
  exports: [ZoomIntegrationService],
})
export class ZoomIntegrationModule {}
