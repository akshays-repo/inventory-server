import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import slugify from 'slugify';

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
          slug: slugify(createProductDto.name, {
            replacement: '-', // replace spaces with replacement character, defaults to `-`
            lower: true, // convert to lower case, defaults to `false`
            trim: true, // trim leading and trailing replacement chars, defaults to `true`
          }),
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

  async searchMany(query: string): Promise<Product[]> {
    return this.productRepository
      .createQueryBuilder()
      .select()
      .where('name ILIKE :searchTerm', { searchTerm: `%${query}%` })
      .orWhere('manufature ILIKE :searchTerm', { searchTerm: `%${query}%` })
      .getMany();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({
      id,
    });
    if (product) {
      return product;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'product not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findOneBySlug(slug: string): Promise<Product> {
    const product = await this.productRepository.findOneBy({
      slug,
    });
    if (product) {
      return product;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'product not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
