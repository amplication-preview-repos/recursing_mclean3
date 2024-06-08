/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Tutor as PrismaTutor,
  Availability as PrismaAvailability,
  Lesson as PrismaLesson,
} from "@prisma/client";

export class TutorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TutorCountArgs, "select">): Promise<number> {
    return this.prisma.tutor.count(args);
  }

  async tutors<T extends Prisma.TutorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TutorFindManyArgs>
  ): Promise<PrismaTutor[]> {
    return this.prisma.tutor.findMany<Prisma.TutorFindManyArgs>(args);
  }
  async tutor<T extends Prisma.TutorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TutorFindUniqueArgs>
  ): Promise<PrismaTutor | null> {
    return this.prisma.tutor.findUnique(args);
  }
  async createTutor<T extends Prisma.TutorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TutorCreateArgs>
  ): Promise<PrismaTutor> {
    return this.prisma.tutor.create<T>(args);
  }
  async updateTutor<T extends Prisma.TutorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TutorUpdateArgs>
  ): Promise<PrismaTutor> {
    return this.prisma.tutor.update<T>(args);
  }
  async deleteTutor<T extends Prisma.TutorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TutorDeleteArgs>
  ): Promise<PrismaTutor> {
    return this.prisma.tutor.delete(args);
  }

  async findAvailabilities(
    parentId: string,
    args: Prisma.AvailabilityFindManyArgs
  ): Promise<PrismaAvailability[]> {
    return this.prisma.tutor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .availabilities(args);
  }

  async findLessons(
    parentId: string,
    args: Prisma.LessonFindManyArgs
  ): Promise<PrismaLesson[]> {
    return this.prisma.tutor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .lessons(args);
  }
}
