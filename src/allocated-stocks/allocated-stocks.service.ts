import { Injectable } from '@nestjs/common';
import { CreateAllocatedStockDto } from './dto/create-allocated-stock.dto';
import { UpdateAllocatedStockDto } from './dto/update-allocated-stock.dto';

@Injectable()
export class AllocatedStocksService {
  create(createAllocatedStockDto: CreateAllocatedStockDto) {
    return 'This action adds a new allocatedStock';
  }

  findAll() {
    return `This action returns all allocatedStocks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} allocatedStock`;
  }

  update(id: number, updateAllocatedStockDto: UpdateAllocatedStockDto) {
    return `This action updates a #${id} allocatedStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} allocatedStock`;
  }
}
