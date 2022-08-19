import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import slugify from 'slugify';
import { StocksService } from 'src/stocks/stocks.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Category)
    private readonly categorieRepository: Repository<Category>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @Inject(forwardRef(() => StocksService))
    private readonly stockService: StocksService,
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
            replacement: '-',
            lower: true,
            trim: true,
          }),
        };
        const product = await this.productRepository.save(savingData);

        if (product.category.type.id === 1) {
          await this.stockService.createAllocated({
            quntity: 0,
            productId: product.id,
          });
        }
        if (product.category.type.id === 2) {
          await this.stockService.createConsumable({
            quntity: 0,
            productId: product.id,
          });
        }

        return product;
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

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const { name, manufature, price } = updateProductDto;

      console.log({ updateProductDto });
      const product = await this.productRepository
        .createQueryBuilder()
        .update({
          name,
          manufature,
          price,
          slug: slugify(name, {
            replacement: '-',
            lower: true,
            trim: true,
          }),
        })
        .where({ id })
        .execute();

      console.log({ product });
      // return product.raw[0].raw[0];
    } catch (error) {
      throw error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
