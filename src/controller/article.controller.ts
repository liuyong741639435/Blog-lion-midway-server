import { Controller, Inject, Post, Put, UseGuard } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { AuthGuard } from '../guard/authGuard';
import { ArticleService } from '../service/article.service';
import {
  ArticleState,
  DeleteArticle,
  EditArticle,
  SetArticleState,
} from '../type/article';
import { getFormData } from '../utils/formData';
import response from '../utils/response';
import { validate } from '../validate';
import { articleValidate } from '../validate/article';

@Controller('/api/article')
export class UserController {
  service = new ArticleService();

  @Inject()
  ctx: Context;

  @Post('/editArticle')
  @UseGuard(AuthGuard)
  async editArticle() {
    const { aid, title, content } = getFormData<EditArticle>(this.ctx);
    const { userId } = this.ctx.userContext;
    const vRes = validate({ aid, title, content }, articleValidate.editArticle);
    if (vRes.length > 0) {
      return response.error('参数有误', vRes);
    }
    // 没传入aid，创建文章，并返回ai
    if (aid === undefined) {
      try {
        const res = await this.service.create({
          userId,
          title,
          content,
          state: ArticleState.PRIVATE,
        });
        response.success({ aid: res.aid });
      } catch (error) {
        response.error('内部错误');
      }
    } else {
      try {
        const res = await this.service.updateArticle(
          {
            title,
            content,
          },
          { aid, userId }
        );
        return res[0] > 0 ? response.success() : response.error();
      } catch (error) {
        response.error('内部错误');
      }
    }
  }

  @Post('/setArticleState')
  @UseGuard(AuthGuard)
  async setArticleState() {
    const { aid, state } = getFormData<SetArticleState>(this.ctx);
    const { userId } = this.ctx.userContext;

    const vRes = validate({ aid }, articleValidate.updateArticleState);
    if (vRes.length > 0) {
      return response.error('参数有误', vRes);
    }
    try {
      const res = await this.service.updateArticleState({
        userId,
        aid,
        state,
      });
      return res[0] > 0 ? response.success() : response.error();
    } catch (error) {
      return response.error('内部错误');
    }
  }

  @Put('/deleteArticle')
  @UseGuard(AuthGuard)
  async deleteArticle() {
    const { aid } = getFormData<DeleteArticle>(this.ctx);
    const { userId } = this.ctx.userContext;
    try {
      const deleteCount = await this.service.delete({ userId, aid });
      return deleteCount > 0
        ? response.success({ deleteCount })
        : response.error('删除失败');
    } catch (error) {
      return response.error('内部错误');
    }
  }
}
