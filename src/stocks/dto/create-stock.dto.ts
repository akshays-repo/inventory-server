import { IsPositive } from 'class-validator';

export class CreateStockDto {
  @IsPositive()
  quntity: number;
  @IsPositive()
  productId: number;
}
