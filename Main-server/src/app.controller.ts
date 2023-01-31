import { Controller, Get, Inject, OnModuleInit} from '@nestjs/common';
import {ClientProxy, MessagePattern} from "@nestjs/microservices";
import {AppService} from "./app.service";

@Controller()
export class AppController implements OnModuleInit{
  constructor(
      private readonly appService: AppService,
      @Inject('ROULETTE_SERVICE') private readonly client: ClientProxy,
  ) {}

  async onModuleInit() {
    await this.client.connect();
  }

  @Get('roulette')
  async getRequest(): Promise<void> {
    try{
      this.client.send({cmd:'roulette'}, 'hello');
    } catch (e) {
      throw e;
    }
  }

  @MessagePattern({cmd: 'roulette'})
  async getGreetingMessage(number: number): Promise<number> {
    await this.appService.saveNumber(number);
    return number;
  }
}