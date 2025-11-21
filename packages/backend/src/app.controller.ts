import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'Hello World!';
  }

  @Get('ping')
  ping() {
    return { message: 'pong' };
  }
}
