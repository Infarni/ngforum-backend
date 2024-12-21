import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function initSwaggerAdapter(app: NestFastifyApplication): void {
  const config = new DocumentBuilder()
    .setTitle('NGForum API')
    .setDescription('Documentation for NGForum API')
    .setVersion('0.1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, documentFactory);
}
