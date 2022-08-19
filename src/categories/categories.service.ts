import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieType } from 'src/metas/entities/categorieType.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import slugify from 'slugify';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categorieRepository: Repository<Category>,
    @InjectRepository(CategorieType)
    private readonly categorieTypeRepository: Repository<CategorieType>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const categoryType = await this.categorieTypeRepository.findOneBy({
        id: createCategoryDto.type,
      });
      if (categoryType) {
        const saveCategory = {
          name: createCategoryDto.name,
          type: categoryType,
          thumbNailImage: createCategoryDto.thumbNailImage,
          slug: slugify(createCategoryDto.name, {
            replacement: '-',
            lower: true,
            trim: true,
          }),
        };
        const categorie = await this.categorieRepository.save(saveCategory);
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
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.categorieRepository.find();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'category type not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findBySlug(slug: string) {
    try {
      return await this.categorieRepository.findOneBy({ slug: slug });
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
