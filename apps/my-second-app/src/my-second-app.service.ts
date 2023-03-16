import { Injectable } from '@nestjs/common';
import { AuthService } from '@core/auth';

@Injectable()
export class MySecondAppService {
  constructor(private readonly coreAuthService: AuthService) {}
  getHello(): string {
    return `FOO 2: ${this.coreAuthService.hello()}`;
  }
}
