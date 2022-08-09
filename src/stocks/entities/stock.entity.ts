import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AllocatedStocks {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quntity: number;
  @Column()
  allocated: number;
  @OneToOne(() => Product, { eager: true })
  @JoinColumn()
  product: Product;
}

@Entity()
export class AllocatedTo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quntity: string;
  @ManyToOne(() => AllocatedStocks, { eager: true })
  @JoinColumn()
  stock: AllocatedStocks;
  @ManyToOne(() => User, { eager: true })
  @JoinColumn()
  user: User;
}

@Entity()
export class ConsumableStocks {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quntity: number;
  @OneToOne(() => Product, { eager: true })
  @JoinColumn()
  product: Product;
}
