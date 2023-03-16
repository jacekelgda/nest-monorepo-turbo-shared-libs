import { NestFactory } from '@nestjs/core';
import { MyAppModule } from './my-app.module';

async function bootstrap() {
  const app = await NestFactory.create(MyAppModule);
  console.log('Hello from 1')
  await app.listen(3000);
}
bootstrap();
