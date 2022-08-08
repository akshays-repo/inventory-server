import { PartialType } from '@nestjs/mapped-types';
import { CreateConsumableStockDto } from './create-consumable-stock.dto';

export class UpdateConsumableStockDto extends PartialType(CreateConsumableStockDto) {}
