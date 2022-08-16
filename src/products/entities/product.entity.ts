import { Category } from 'src/categories/entities/category.entity';
import { CategorieType } from 'src/metas/entities/categorieType.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column()
  name: string;

  @Index({ fulltext: true })
  @Column()
  slug: string;

  @Index({ fulltext: true })
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
