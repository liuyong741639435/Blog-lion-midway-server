import { Provide } from '@midwayjs/decorator';
import { Person } from '../entity/person';

@Provide()
export class PersonService {
  async createPerson() {
    const person = new Person({ name: 'bob', age: 99 });
    await person.save();
  }
}
