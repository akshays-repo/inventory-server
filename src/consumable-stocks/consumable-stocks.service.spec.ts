import { Test, TestingModule } from '@nestjs/testing';
import { ConsumableStocksService } from './consumable-stocks.service';

describe('ConsumableStocksService', () => {
  let service: ConsumableStocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumableStocksService],
    }).compile();

    service = module.get<ConsumableStocksService>(ConsumableStocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
