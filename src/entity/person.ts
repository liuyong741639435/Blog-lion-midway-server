import { Table, Model, Column } from 'sequelize-typescript';

// @Table
// class Hobby extends Model {
//   @Column
//   name: string;
// }

@Table
class Person extends Model {
  @Column
  name: string;

  @Column
  birthday: Date;

  //   @HasMany(() => Hobby)
  //   hobbies: Hobby[];
}

export { Person };
