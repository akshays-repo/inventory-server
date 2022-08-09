import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Category)
    private readonly categorieRepository: Repository<Category>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const category = await this.categorieRepository.findOneBy({
        id: createProductDto.categoryId,
      });

      if (category) {
        const savingData: DeepPartial<Product> = {
          ...createProductDto,
          category: category,
          categoryType: category.type,
        };
        return await this.productRepository.save(savingData);
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
    return await this.productRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
