import { Module } from '@nestjs/common';
import { GreeterService } from './greeter.service';
import { GreeterController } from './greeter.controller';


@Module({
  imports: [], //submodule
  controllers: [GreeterController], //home controller
  providers: [GreeterService], //home service
})
export class GreeterModule {}
