import { config, IConfig } from './config';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { initAppAdapter } from './adapters/app.adapter';
import { initSwaggerAdapter } from './adapters/swagger.adapter';

async function bootstrap() {
  const appConfig: IConfig = config();

  const app: NestFastifyApplication = await initAppAdapter();
  initSwaggerAdapter(app);

  await app.listen(appConfig.server.port);
}
bootstrap();
