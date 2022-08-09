import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AllocatedStocksService } from './allocated-stocks.service';
import { CreateAllocatedStockDto } from './dto/create-allocated-stock.dto';
import { UpdateAllocatedStockDto } from './dto/update-allocated-stock.dto';

@Controller('allocated-stocks')
export class AllocatedStocksController {
  constructor(
    private readonly allocatedStocksService: AllocatedStocksService,
  ) {}

  @Post()
  create(@Body() createAllocatedStockDto: CreateAllocatedStockDto) {
    return this.allocatedStocksService.create(createAllocatedStockDto);
  }

  @Get()
  findAll() {
    return this.allocatedStocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allocatedStocksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAllocatedStockDto: UpdateAllocatedStockDto,
  ) {
    return this.allocatedStocksService.update(+id, updateAllocatedStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allocatedStocksService.remove(+id);
  }
}
