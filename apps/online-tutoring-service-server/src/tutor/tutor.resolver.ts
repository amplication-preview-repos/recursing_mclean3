import * as graphql from "@nestjs/graphql";
import { TutorResolverBase } from "./base/tutor.resolver.base";
import { Tutor } from "./base/Tutor";
import { TutorService } from "./tutor.service";

@graphql.Resolver(() => Tutor)
export class TutorResolver extends TutorResolverBase {
  constructor(protected readonly service: TutorService) {
    super(service);
  }
}
