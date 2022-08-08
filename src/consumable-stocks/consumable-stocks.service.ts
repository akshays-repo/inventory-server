import { Injectable } from '@nestjs/common';
import { CreateConsumableStockDto } from './dto/create-consumable-stock.dto';
import { UpdateConsumableStockDto } from './dto/update-consumable-stock.dto';

@Injectable()
export class ConsumableStocksService {
  create(createConsumableStockDto: CreateConsumableStockDto) {
    return 'This action adds a new consumableStock';
  }

  findAll() {
    return `This action returns all consumableStocks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consumableStock`;
  }

  update(id: number, updateConsumableStockDto: UpdateConsumableStockDto) {
    return `This action updates a #${id} consumableStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} consumableStock`;
  }
}
