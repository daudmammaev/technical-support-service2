import { NestFactory } from '@nestjs/core';
import { FeedBackModule } from './support/Module';




async function bootstrap() {
  const app = await NestFactory.create(FeedBackModule);
  await app.listen(3000);
}
bootstrap();
