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
  Student as PrismaStudent,
  Lesson as PrismaLesson,
} from "@prisma/client";

export class StudentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StudentCountArgs, "select">): Promise<number> {
    return this.prisma.student.count(args);
  }

  async students<T extends Prisma.StudentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindManyArgs>
  ): Promise<PrismaStudent[]> {
    return this.prisma.student.findMany<Prisma.StudentFindManyArgs>(args);
  }
  async student<T extends Prisma.StudentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindUniqueArgs>
  ): Promise<PrismaStudent | null> {
    return this.prisma.student.findUnique(args);
  }
  async createStudent<T extends Prisma.StudentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentCreateArgs>
  ): Promise<PrismaStudent> {
    return this.prisma.student.create<T>(args);
  }
  async updateStudent<T extends Prisma.StudentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentUpdateArgs>
  ): Promise<PrismaStudent> {
    return this.prisma.student.update<T>(args);
  }
  async deleteStudent<T extends Prisma.StudentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDeleteArgs>
  ): Promise<PrismaStudent> {
    return this.prisma.student.delete(args);
  }

  async findLessons(
    parentId: string,
    args: Prisma.LessonFindManyArgs
  ): Promise<PrismaLesson[]> {
    return this.prisma.student
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .lessons(args);
  }
}
