import { Controller, Inject, Post, UseGuard } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { AuthGuard } from '../guard/authGuard';
import { FollowerService } from '../service/follower.service';
import { UserService } from '../service/user.service';
import { SetCancelFollower, SetFollower } from '../type/follower';
import { getFormData } from '../utils/formData';
import response from '../utils/response';
import { validate } from '../validate';
import { followerValidate } from '../validate/follower';

@Controller('/api/follower')
export class FollowerController {
  service = new FollowerService();

  @Inject()
  ctx: Context;

  // 关注
  @Post('/setFollower')
  @UseGuard(AuthGuard)
  async setFollower() {
    const { followerUserId } = getFormData<SetFollower>(this.ctx);
    const { userId } = this.ctx.userContext;

    const vRes = validate({ followerUserId }, followerValidate.setFollower);
    if (vRes.length > 0) {
      return response.error('参数有误', vRes);
    }

    try {
      // 先查目标followerUserId是否存在

      const userInfo = await new UserService().getUserInfo({
        userId: followerUserId,
      });

      if (userInfo === null) {
        return response.error('目标不存在');
      }
      await this.service.setFollower({
        followerUserId,
        userId,
      });
      return response.success();
    } catch (error) {
      return response.error('内部错误');
    }
  }

  // 取消关注
  @Post('/setCancelFollower')
  @UseGuard(AuthGuard)
  async setCancelFollower() {
    const { followerUserId } = getFormData<SetCancelFollower>(this.ctx);
    const { userId } = this.ctx.userContext;

    const vRes = validate(
      { followerUserId },
      followerValidate.setCancelFollower
    );
    if (vRes.length > 0) {
      return response.error('参数有误', vRes);
    }

    try {
      await this.service.deleteFollower({ userId, followerUserId });
      return response.success();
    } catch (error) {
      return response.error('内部错误');
    }
  }
}
