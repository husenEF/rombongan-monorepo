import { Test, TestingModule } from '@nestjs/testing';
import { DailyRecapsService } from './daily-recaps.service';

describe('DailyRecapsService', () => {
  let service: DailyRecapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyRecapsService],
    }).compile();

    service = module.get<DailyRecapsService>(DailyRecapsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
