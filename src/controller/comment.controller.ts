import {
  Controller,
  //   Get,
  Inject,
  Post,
  //   Put,
  UseGuard,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { AuthGuard } from '../guard/authGuard';
// import { getFormData } from '../utils/formData';
// import response from '../utils/response';
// import { validate } from '../validate';
import { CommentService } from '../service/comment.service';
@Controller('/api/comment')
export class CommentController {
  service = new CommentService();

  @Inject()
  ctx: Context;

  // 编辑文章，或者创建文章
  @Post('/editArticle')
  @UseGuard(AuthGuard)
  async editArticle() {}
}
