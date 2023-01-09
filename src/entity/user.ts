import { Table, Model, Column } from 'sequelize-typescript';

@Table
class User extends Model {
  @Column
  name: string;

  @Column
  birthday: Date;

  //   @HasMany(() => Hobby)
  //   hobbies: Hobby[];
}

export { User };
