import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  manufature: string;
  @IsString()
  thumNailImage?: string;
  @IsNumber()
  @IsPositive()
  price?: number;
  @IsNumber()
  @IsPositive()
  categoryId: number;
}
