import { Injectable } from '@nestjs/common';
import { AuthService } from '@core/auth';

@Injectable()
export class MyAppService {
  constructor(private readonly coreAuthService: AuthService) {}
  getHello(): string {
    return `FOO: ${this.coreAuthService.hello()}`;
  }
}
