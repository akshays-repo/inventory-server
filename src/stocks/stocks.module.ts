import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AllocatedTo,
  AllocatedStocks,
  ConsumableStocks,
} from './entities/stock.entity';
import { Product } from 'src/products/entities/product.entity';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AllocatedStocks, AllocatedTo, ConsumableStocks]),
    ProductsModule,
  ],

  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
