import { Test, TestingModule } from '@nestjs/testing';
import { ConsumableStocksController } from './consumable-stocks.controller';
import { ConsumableStocksService } from './consumable-stocks.service';

describe('ConsumableStocksController', () => {
  let controller: ConsumableStocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumableStocksController],
      providers: [ConsumableStocksService],
    }).compile();

    controller = module.get<ConsumableStocksController>(ConsumableStocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
