import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { Roulette } from '../src/entity/number.entity';
import { AppController } from '../src/app.controller';
import { AppService } from "../src/app.service";

describe('RouletteController', () => {
    let controller: AppController;
    let service: AppService;
    let repository: Repository<Roulette>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [
                {
                    provide: 'RANDOM_NUMBER_REPOSITORY',
                    useValue: Repository,
                },
            ],
        }).compile();

        controller = module.get<AppController>(AppController);
        service = module.get<AppService>(AppService);
        repository = module.get<Repository<Roulette>>('RANDOM_NUMBER_REPOSITORY');
    });

    describe('getRandomNumber', () => {
        it('should return and store a random number', async () => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            const result = await controller.getGreetingMessage(randomNumber);
            expect(result).toBe(randomNumber);
            const storedNumber = await service.saveNumber(randomNumber);
            expect(storedNumber).toEqual(randomNumber);
        });
    });
});