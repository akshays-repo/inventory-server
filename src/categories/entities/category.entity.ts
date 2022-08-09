import { CategorieType } from 'src/metas/entities/categorieType.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  thumbNailImage: string;

  @OneToOne(() => CategorieType)
  @JoinColumn()
  type: CategorieType;
}
