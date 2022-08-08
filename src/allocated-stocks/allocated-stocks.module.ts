import { Module } from '@nestjs/common';
import { AllocatedStocksService } from './allocated-stocks.service';
import { AllocatedStocksController } from './allocated-stocks.controller';

@Module({
  controllers: [AllocatedStocksController],
  providers: [AllocatedStocksService]
})
export class AllocatedStocksModule {}
