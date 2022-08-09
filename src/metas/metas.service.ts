import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategorieTypeDto } from './dto/create-categorieType.dto';
import { CreateMetaDto } from './dto/create-meta.dto';
import { UpdateMetaDto } from './dto/update-meta.dto';
import { CategorieType } from './entities/categorieType.entity';

@Injectable()
export class MetasService {
  constructor(
    @InjectRepository(CategorieType)
    private readonly categorieTypeRepository: Repository<CategorieType>,
  ) {}

  create(createMetaDto: CreateMetaDto) {
    return 'This action adds a new meta';
  }

  async createCategorie(categorieTypeDto: CategorieTypeDto) {
    try {
      const category = await this.categorieTypeRepository.save(
        categorieTypeDto,
      );
      return category;
    } catch (error) {
      throw error;
    }
  }
  async findAllCategoryType() {
    return await this.categorieTypeRepository.find();
  }

  async findOneCategoryType(id: number) {
    const categorie = this.categorieTypeRepository.findOneBy({
      id,
    });
    if (categorie) {
      return categorie;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'category type not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} meta`;
  }

  update(id: number, updateMetaDto: UpdateMetaDto) {
    return `This action updates a #${id} meta`;
  }

  remove(id: number) {
    return `This action removes a #${id} meta`;
  }
}
