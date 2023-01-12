import { Controller, Inject, Post, UseGuard } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { AuthGuard } from '../guard/authGuard';
import { UserService } from '../service/user.service';
// import * as md5 from 'md5';
import response from '../utils/response';
// import { getFormData } from '../utils/formData';

@Controller('/api/article')
export class UserController {
  userService = new UserService();

  @Inject()
  ctx: Context;

  @Post('/editArticle')
  @UseGuard(AuthGuard)
  async editArticle() {
    // const { aId, title, content } = getFormData(this.ctx);
    // 校验 todo
    try {
      //   const res = await this.userService.create({
      //     userName: userName,
      //     password: md5(password),
      //     nickName: '新用户', // 以后搞个包随机生成昵称
      //   });
      //   const res = await this.userService.login({
      //     userName: userName,
      //     password: md5(password),
      //   });
      //   return response.success(res);
    } catch (error) {
      console.log('error:', error);
      return response.error('内部错误', error);
    }
  }
}
