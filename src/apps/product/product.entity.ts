import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { TypeormEntity } from '../../common/typeorm';
import { CategoryEntity } from '../category';

@Entity('Product')
export class ProductEntity extends TypeormEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public body: string;

  @ManyToOne(() => CategoryEntity, (category: CategoryEntity): ProductEntity[] => category.products)
  public category: CategoryEntity
}
