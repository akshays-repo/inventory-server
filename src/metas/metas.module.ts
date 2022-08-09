import { Module } from '@nestjs/common';
import { MetasService } from './metas.service';
import { MetasController } from './metas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieType } from './entities/categorieType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategorieType])],
  controllers: [MetasController],
  providers: [MetasService],
})
export class MetasModule {}
