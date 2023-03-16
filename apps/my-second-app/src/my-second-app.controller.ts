import { Controller, Get } from '@nestjs/common';
import { MySecondAppService } from './my-second-app.service';

@Controller()
export class MySecondAppController {
  constructor(private readonly mySecondAppService: MySecondAppService) {}

  @Get()
  getHello(): string {
    return this.mySecondAppService.getHello();
  }
}
