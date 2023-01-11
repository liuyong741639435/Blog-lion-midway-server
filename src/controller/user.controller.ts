import { Controller, Inject, Post, Put, UseGuard } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import * as md5 from 'md5';
import response from '../utils/response';
import { getFormData } from '../utils/formData';
import { getToken } from '../utils/auth';
import { AuthGuard } from '../guard/authGuard';

@Controller('/api/user')
export class UserController {
  userService = new UserService();

  @Inject()
  ctx: Context;

  @Post('/login')
  async login() {
    const { userName, password } = getFormData(this.ctx);
    // 校验 todo
    try {
      const { userId } = await this.userService.login({
        userName: userName,
        password: md5(password),
      });
      const token = await await getToken({ userId });

      return response.success({ token });
    } catch (error) {
      console.log('error:', error);
      return response.error('内部错误', error);
    }
  }

  @Post('/register')
  async register() {
    const { userName, password } = getFormData(this.ctx);
    // 校验 todo
    try {
      const res = await this.userService.create({
        userName: userName,
        password: md5(password),
        nickName: '新用户', // 以后搞个包随机生成昵称
      });
      return response.success(res);
    } catch (error) {
      return response.error('内部错误', error);
    }
  }

  @Put('/delete')
  @UseGuard(AuthGuard)
  async delete() {
    console.log('delete');
    const { userName } = getFormData(this.ctx);
    const { userId } = this.ctx.userContext;
    // 校验 todo
    try {
      const res = await this.userService.delete({ userName, userId });
      return response.success(res);
    } catch (error) {
      console.log('error', error);
      return response.error('内部错误', error);
    }
  }
}
