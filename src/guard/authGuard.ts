import { Guard, httpError, IGuard } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { verifyToken } from '../utils/auth';

@Guard()
export class AuthGuard implements IGuard<Context> {
  async canActivate(ctx: Context): Promise<any> {
    const token = ctx.headers['authorization']?.trim();
    console.log('token: ', token);
    // 判断下有没有校验信息

    if (!token) {
      throw new httpError.ForbiddenError('token未携带');
    }
    try {
      //jwt.verify方法验证token是否有效
      ctx.userContext = await verifyToken(token);
      console.log('ctx.userContext:', ctx.userContext); // { userId: 6, iat: 1673404684, exp: 1673577484 }
      return true;
    } catch (error) {
      // token有问题
      // todo后续不同问题,区分处理
      console.error('error:', error);
      throw new httpError.ForbiddenError('内部错误');
    }
  }
}
