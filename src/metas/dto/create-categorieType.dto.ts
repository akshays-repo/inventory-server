import { IsString, IsNotEmpty } from 'class-validator';

export class CategorieTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
