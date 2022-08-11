import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');

  const app = await NestFactory.create(AppModule);

  console.log('server config', serverConfig);

  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost'],
  });

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
}
bootstrap();
