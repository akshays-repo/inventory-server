import { Category } from 'src/categories/entities/category.entity';
import { CategorieType } from 'src/metas/entities/categorieType.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  manufature: string;
  @Column({ nullable: true })
  thumNailImage: string;

  @Column({ nullable: true })
  price: number;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn()
  category: Category;

  @ManyToOne(() => CategorieType)
  @JoinColumn()
  categoryType: CategorieType;
}
