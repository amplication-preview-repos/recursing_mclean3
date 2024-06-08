import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TutorServiceBase } from "./base/tutor.service.base";

@Injectable()
export class TutorService extends TutorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
