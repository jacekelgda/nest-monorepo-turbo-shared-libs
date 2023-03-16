import { Module } from '@nestjs/common';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';
import { AuthModule } from '@core/auth'

@Module({
  imports: [AuthModule],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule {}
