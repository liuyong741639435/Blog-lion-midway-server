import { Controller, Inject, Post, Put, UseGuard } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import * as md5 from 'md5';
import response from '../utils/response';
import { getFormData } from '../utils/formData';
import { getToken } from '../utils/auth';
import { AuthGuard } from '../guard/authGuard';
import { Login, Register } from '../type/conterller/user';
import { validate } from '../utils/validate';
import { userTips } from '../tips/user';

@Controller('/api/user')
export class UserController {
  userService = new UserService();

  @Inject()
  ctx: Context;

  @Post('/login')
  async login() {
    const { userName, password } = getFormData<Login>(this.ctx);

    const vRes = validate({ userName, password }, userTips.login);
    if (vRes.length > 0) {
      return response.error('参数有误', vRes);
    }

    try {
      const res = await this.userService.login({
        userName: userName,
        password: md5(password),
      });

      if (res === null) {
        return response.error('登录失败');
      }
      const token = await await getToken({ userId: res.userId });
      return response.success({ token });
    } catch (error) {
      return response.error('内部错误');
    }
  }

  // 注册
  @Post('/register')
  async register() {
    const { userName, password } = getFormData<Register>(this.ctx);

    const vRes = validate({ userName, password }, userTips.register);
    if (vRes.length > 0) {
      return response.error('参数有误', vRes);
    }

    try {
      await this.userService.create({
        userName: userName,
        password: md5(password),
        nickName: '新用户', // 以后搞个包随机生成昵称
      });
      return response.success('注册成功');
    } catch (error) {
      return response.error(
        error.name === 'SequelizeUniqueConstraintError'
          ? '账号重复'
          : '内部错误'
      );
    }
  }

  // 删除当前登录的账号
  @Put('/delete')
  @UseGuard(AuthGuard)
  async delete() {
    const { userId } = this.ctx.userContext;
    try {
      const deleteCount = await this.userService.delete({ userId });
      return deleteCount > 0
        ? response.success({ deleteCount }, '删除成功')
        : response.error('删除失败');
    } catch (error) {
      return response.error('内部错误');
    }
  }
}
