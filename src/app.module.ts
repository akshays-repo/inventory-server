import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MetasModule } from './metas/metas.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { AllocatedStocksModule } from './allocated-stocks/allocated-stocks.module';
import { ConsumableStocksModule } from './consumable-stocks/consumable-stocks.module';
import { RecentActivitiesModule } from './recent-activities/recent-activities.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    UsersModule,
    MetasModule,
    CategoriesModule,
    ProductsModule,
    AllocatedStocksModule,
    ConsumableStocksModule,
    RecentActivitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
