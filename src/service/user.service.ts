import { Provide } from '@midwayjs/decorator';
import { InjectRepository } from '@midwayjs/sequelize';
import { User } from '../entity/user';

@Provide()
export class UserService {
  @InjectRepository(User)

  // create
  async create(params: {
    userName: string;
    password: string;
    nickName: string;
  }) {
    return await new User(params).save();
  }

  // delete
  async delete(params: { userId: number }) {
    return await User.destroy({
      where: params,
    });
  }

  // update

  // selecte
  async login(params: { userName: string; password: string }) {
    return await User.findOne({
      where: params,
    });
  }
}
