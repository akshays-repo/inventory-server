import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsumableStocksService } from './consumable-stocks.service';
import { CreateConsumableStockDto } from './dto/create-consumable-stock.dto';
import { UpdateConsumableStockDto } from './dto/update-consumable-stock.dto';

@Controller('consumable-stocks')
export class ConsumableStocksController {
  constructor(private readonly consumableStocksService: ConsumableStocksService) {}

  @Post()
  create(@Body() createConsumableStockDto: CreateConsumableStockDto) {
    return this.consumableStocksService.create(createConsumableStockDto);
  }

  @Get()
  findAll() {
    return this.consumableStocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumableStocksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsumableStockDto: UpdateConsumableStockDto) {
    return this.consumableStocksService.update(+id, updateConsumableStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumableStocksService.remove(+id);
  }
}
