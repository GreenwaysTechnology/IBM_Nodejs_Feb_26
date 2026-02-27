import { Injectable } from '@nestjs/common';

@Injectable()
export class GreeterService {
  sayGreet(): string {
    return 'Greet';
  }
}
