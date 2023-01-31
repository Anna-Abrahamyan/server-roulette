import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Roulette } from "./entity/number.entity";

@Injectable()
export class AppService {
  constructor(@InjectRepository(Roulette) private readonly numberRepository: Repository<Roulette>) {}
  async saveNumber(number: number): Promise<void> {

    await this.numberRepository.save({value: number});
  }
}