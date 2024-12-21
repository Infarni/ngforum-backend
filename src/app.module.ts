import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config, IConfig } from './config';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    const logger: Logger = new Logger(AppModule.name);

    const appConfig: IConfig = config();
    logger.log(`Config: ${JSON.stringify(appConfig, null, 2)}`);
  }
}
