import {
  Table,
  Model,
  Column,
  PrimaryKey,
  DataType,
  AutoIncrement,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './user';

@Table
class Follower extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.BIGINT, comment: '唯一id' })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, comment: '用户id' })
  userId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, comment: '粉丝的userId' })
  followerUserId: number;
}

export { Follower };
