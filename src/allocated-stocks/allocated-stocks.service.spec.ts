import { Test, TestingModule } from '@nestjs/testing';
import { AllocatedStocksService } from './allocated-stocks.service';

describe('AllocatedStocksService', () => {
  let service: AllocatedStocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllocatedStocksService],
    }).compile();

    service = module.get<AllocatedStocksService>(AllocatedStocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
