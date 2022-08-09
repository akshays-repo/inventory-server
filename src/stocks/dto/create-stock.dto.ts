import { IsPositive } from 'class-validator';

export class CreateStockDto {
  @IsPositive()
  quantity: number;
  @IsPositive()
  productId: number;
}
