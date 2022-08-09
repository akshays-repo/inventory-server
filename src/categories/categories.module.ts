import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieType } from 'src/metas/entities/categorieType.entity';
import { Category } from './entities/category.entity';
import { MetasService } from 'src/metas/metas.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategorieType, Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
