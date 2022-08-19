import {
  Inject,
  forwardRef,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { AllocatedStocks, ConsumableStocks } from './entities/stock.entity';

@Injectable()
export class StocksService {
  constructor(
    @InjectRepository(AllocatedStocks)
    private readonly allocatedStocks: Repository<AllocatedStocks>,
    @InjectRepository(ConsumableStocks)
    private readonly consumableStocks: Repository<ConsumableStocks>,

    @Inject(forwardRef(() => ProductsService))
    private readonly productService: ProductsService,
  ) {}

  async createAllocated(
    createStockDto: CreateStockDto,
  ): Promise<AllocatedStocks> {
    try {
      const { quntity: quantity, productId } = createStockDto;
      const product = await this.productService.findOne(productId);
      if (product.category.type.id !== 1) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'The product is not assignable',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const savingData: Partial<AllocatedStocks> = {
        quntity: quantity,
        allocated: 0,
        product: await this.productService.findOne(productId),
      };
      const stock = await this.allocatedStocks.save(savingData);
      return stock;
    } catch (error) {
      throw error;
    }
  }

  async createConsumable(
    createStockDto: CreateStockDto,
  ): Promise<ConsumableStocks> {
    try {
      const { quntity: quantity, productId } = createStockDto;
      const product = await this.productService.findOne(productId);
      if (product.category.type.id !== 2) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'The product is not a consumable',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      const savingData: Partial<ConsumableStocks> = {
        quntity: quantity,
        product: product,
      };
      const stock = await this.consumableStocks.save(savingData);
      return stock;
    } catch (error) {
      throw error;
    }
  }
  async findAllConsumable(): Promise<ConsumableStocks[]> {
    try {
      return await this.consumableStocks.find();
    } catch (error) {
      throw error;
    }
  }
  async findAllAllocated(): Promise<AllocatedStocks[]> {
    try {
      return await this.allocatedStocks.find();
    } catch (error) {
      throw error;
    }
  }

  async findAllocatedBySlug(slug: string): Promise<AllocatedStocks> {
    try {
      const stock = await this.allocatedStocks.findOneBy({ product: { slug } });
      console.log('The stock is ', { stock });
      if (stock) {
        return stock;
      } else {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'The stock is not found',
          },
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async findConsumableBySlug(slug: string): Promise<ConsumableStocks> {
    try {
      const stock = await this.consumableStocks.findOneBy({
        product: { slug },
      });
      if (stock) {
        return stock;
      } else {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'The stock is not found',
          },
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  async updateAllocated(id: number, updateStockDto: UpdateStockDto) {
    const { quntity } = updateStockDto;

    console.log({ id, quntity });
    const allocatedStock = await this.allocatedStocks
      .createQueryBuilder()
      .update({ quntity })
      .where({ id })
      .execute();
  }
  async updateConsumable(id: number, updateStockDto: UpdateStockDto) {
    const { quntity } = updateStockDto;

    const consumableStocks = await this.consumableStocks
      .createQueryBuilder()
      .update({ quntity })
      .where({ id })
      .execute();
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
