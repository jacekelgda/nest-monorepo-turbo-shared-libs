import { NestFactory } from '@nestjs/core';
import { MySecondAppModule } from './my-second-app.module';

async function bootstrap() {
  const app = await NestFactory.create(MySecondAppModule);
  console.log('Hello from 2')
  await app.listen(3001);
}
bootstrap();
