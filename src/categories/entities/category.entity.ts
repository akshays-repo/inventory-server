import { CategorieType } from 'src/metas/entities/categorieType.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  thumbNailImage: string;

  @ManyToOne(() => CategorieType, { eager: true })
  @JoinColumn()
  type: CategorieType;
}
