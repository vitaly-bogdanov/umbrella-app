import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

import { TypeormEntity } from '../../common/typeorm';
import { ProductEntity } from '../product';

@Entity('Category')
export class CategoryEntity extends TypeormEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @OneToMany(() => ProductEntity, (product: ProductEntity): CategoryEntity => product.category)
  public products: ProductEntity[]
}
