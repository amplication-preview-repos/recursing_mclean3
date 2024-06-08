import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NonAvailabilityServiceBase } from "./base/nonAvailability.service.base";

@Injectable()
export class NonAvailabilityService extends NonAvailabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
