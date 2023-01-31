import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor() {}

  public generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}