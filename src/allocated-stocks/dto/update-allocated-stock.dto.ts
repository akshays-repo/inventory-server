import { PartialType } from '@nestjs/mapped-types';
import { CreateAllocatedStockDto } from './create-allocated-stock.dto';

export class UpdateAllocatedStockDto extends PartialType(CreateAllocatedStockDto) {}
