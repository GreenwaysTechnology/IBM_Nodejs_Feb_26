import { Controller, Get } from '@nestjs/common';
import { GreeterService } from './greeter.service';

@Controller()
export class GreeterController {
  
  constructor(private readonly greeterService: GreeterService) {}

  @Get('greet')
  getGreet(): string {
    return this.greeterService.sayGreet();
  }
}
