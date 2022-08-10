import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('stocks')
@UseGuards(AuthGuard())
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post('/allocated')
  createAllocated(@Body() createStockDto: CreateStockDto) {
    return this.stocksService.createAllocated(createStockDto);
  }

  @Post('/consumable')
  createConsumable(@Body() createStockDto: CreateStockDto) {
    return this.stocksService.createConsumable(createStockDto);
  }

  @Get('/consumable')
  findAllConsumable() {
    return this.stocksService.findAllConsumable();
  }

  @Get('/allocated')
  findAllAllocated() {
    return this.stocksService.findAllAllocated();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stocksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stocksService.update(+id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stocksService.remove(+id);
  }
}
