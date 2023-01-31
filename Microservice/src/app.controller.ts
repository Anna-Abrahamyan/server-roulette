import {Controller, Get, Inject, OnModuleInit} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {AppService} from "./app.service";

@Controller()
export class AppController implements OnModuleInit {
  constructor(
      @Inject('ROULETTE_SERVICE') private readonly client: ClientProxy,
      private readonly appService: AppService,
  ) {}

  async onModuleInit() {
    await this.client.connect();
  }

  @Get()
  getNumber() {
    const number = this.appService.generateRandomNumber();
    this.client.send({cmd: 'roulette'}, number);
  }
}