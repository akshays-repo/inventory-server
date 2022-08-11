import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MetasModule } from './metas/metas.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

import { RecentActivitiesModule } from './recent-activities/recent-activities.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { StocksModule } from './stocks/stocks.module';
import { AuthsModule } from './auths/auths.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    MetasModule,
    CategoriesModule,
    ProductsModule,
    RecentActivitiesModule,
    StocksModule,
    AuthsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
