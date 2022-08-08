import { Module } from '@nestjs/common';
import { ConsumableStocksService } from './consumable-stocks.service';
import { ConsumableStocksController } from './consumable-stocks.controller';

@Module({
  controllers: [ConsumableStocksController],
  providers: [ConsumableStocksService]
})
export class ConsumableStocksModule {}
