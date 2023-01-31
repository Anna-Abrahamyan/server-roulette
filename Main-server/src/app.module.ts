import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './ormconfig';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Roulette } from "./entity/number.entity";

@Module({
  imports: [
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory:typeOrmConfig,
          inject: [ConfigService]}),
      TypeOrmModule.forFeature([Roulette]),
      ClientsModule.register([{
          name: 'ROULETTE_SERVICE',
          transport: Transport.RMQ,
          options: {
              urls: ['amqp://localhost:5672'],
              queue: 'roulette',
              queueOptions: {
                  durable: false
              },
          },
      },
      ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}