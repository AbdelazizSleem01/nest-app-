import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getzezo(): string {
    return 'zezo';
  }

  printHelloToUser(): string {
    return 'Welcome To';
  }
  pathParam(): string {
    return 'path Parameter';
  }
  bodyParam(name): string {
    return 'Welcome To ' + name;
  }
}
