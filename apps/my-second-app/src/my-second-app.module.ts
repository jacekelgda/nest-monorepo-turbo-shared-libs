import { Module } from '@nestjs/common';
import { MySecondAppController } from './my-second-app.controller';
import { MySecondAppService } from './my-second-app.service';
import { AuthModule } from '@core/auth'

@Module({
  imports: [AuthModule],
  controllers: [MySecondAppController],
  providers: [MySecondAppService],
})
export class MySecondAppModule {}
