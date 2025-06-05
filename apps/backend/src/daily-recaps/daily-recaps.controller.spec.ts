import { Test, TestingModule } from '@nestjs/testing';
import { DailyRecapsController } from './daily-recaps.controller';

describe('DailyRecapsController', () => {
  let controller: DailyRecapsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyRecapsController],
    }).compile();

    controller = module.get<DailyRecapsController>(DailyRecapsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
