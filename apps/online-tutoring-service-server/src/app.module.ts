import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { StudentModule } from "./student/student.module";
import { TutorModule } from "./tutor/tutor.module";
import { CourseModule } from "./course/course.module";
import { EnrollmentModule } from "./enrollment/enrollment.module";
import { ChatModule } from "./chat/chat.module";
import { MessageModule } from "./message/message.module";
import { UserModule } from "./user/user.module";
import { AvailabilityModule } from "./availability/availability.module";
import { LessonModule } from "./lesson/lesson.module";
import { NonAvailabilityModule } from "./nonAvailability/nonAvailability.module";
import { ZoomIntegrationModule } from "./ZoomIntegration/zoomintegration.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    RabbitMQModule,
    StudentModule,
    TutorModule,
    CourseModule,
    EnrollmentModule,
    ChatModule,
    MessageModule,
    UserModule,
    AvailabilityModule,
    LessonModule,
    NonAvailabilityModule,
    ZoomIntegrationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
