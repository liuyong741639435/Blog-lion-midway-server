import {
  Column,
  PrimaryGeneratedColumn,
  //   OneToOne,
  //   JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityModel } from '@midwayjs/orm';
// import { Photo } from './photo';

@EntityModel()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  height: number;

  @Column('int')
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  //   @OneToOne(type => Photo) // 使用一个名为 @OneToOne 的新装饰器。它允许我们在两个实体之间创建一对一的关系。type => Photo是一个函数，它返回我们要与其建立关系的实体的类。
  //   @JoinColumn()
  //   photo: Photo;

  // 是一个特殊列，自动为实体插入日期。
  @CreateDateColumn({
    name: 'gmt_create',
    type: 'timestamp',
  })
  gmtCreate: Date;

  // 是一个特殊列，在每次调用实体管理器或存储库的save时，自动更新实体日期。
  @UpdateDateColumn({
    name: 'gmt_modified',
    type: 'timestamp',
  })
  gmtModified: Date;
}
