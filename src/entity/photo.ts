import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

@EntityModel('test_user')
export class Photo {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number = 222;

  @Column({ name: 'name' })
  name: string = '333';
}
