import { Controller, Get } from '@midwayjs/decorator';
import { InjectRepository } from '@midwayjs/sequelize';
import { Repository } from 'sequelize-typescript/dist/sequelize/repository/repository';
import { Person } from '../entity/person';

@Controller('/')
export class HomeController {
  @InjectRepository(Person)
  photoRepository: Repository<Person>;

  @Get('/')
  async home() {
    // 新增
    await this.photoRepository.create({
      name: '123',
    });
  }
}
