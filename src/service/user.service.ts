import { Provide } from '@midwayjs/decorator';
import { InjectRepository } from '@midwayjs/sequelize';
import { Op } from 'sequelize';
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
  async delete(params: { userId: number; userName: string }) {
    // await User.destroy({
    //   where: {
    //     [Op.or]: [{ userId: params.userId }, { userName: params.userName }],
    //   },
    // })
    //   .then(res => console.log('then', res))
    //   .catch(err => console.error('catch', err));
    return await User.destroy({
      where: {
        [Op.or]: [{ userId: params.userId }, { userName: params.userName }],
      },
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
