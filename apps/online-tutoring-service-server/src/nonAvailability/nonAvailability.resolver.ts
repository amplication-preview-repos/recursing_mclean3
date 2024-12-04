import * as graphql from "@nestjs/graphql";
import { NonAvailabilityResolverBase } from "./base/nonAvailability.resolver.base";
import { NonAvailability } from "./base/NonAvailability";
import { NonAvailabilityService } from "./nonAvailability.service";

@graphql.Resolver(() => NonAvailability)
export class NonAvailabilityResolver extends NonAvailabilityResolverBase {
  constructor(protected readonly service: NonAvailabilityService) {
    super(service);
  }
}
