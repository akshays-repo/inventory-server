import { Test, TestingModule } from '@nestjs/testing';
import { AllocatedStocksController } from './allocated-stocks.controller';
import { AllocatedStocksService } from './allocated-stocks.service';

describe('AllocatedStocksController', () => {
  let controller: AllocatedStocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllocatedStocksController],
      providers: [AllocatedStocksService],
    }).compile();

    controller = module.get<AllocatedStocksController>(AllocatedStocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
