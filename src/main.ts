import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD

  app.enableCors()

=======
>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
  await app.listen(3000);
}
bootstrap();
