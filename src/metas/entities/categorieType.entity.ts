import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategorieType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
