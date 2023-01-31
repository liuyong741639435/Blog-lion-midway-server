import { Provide } from '@midwayjs/decorator';
import { InjectRepository } from '@midwayjs/sequelize';
import { Comment } from '../entity/comment';

@Provide()
export class CommentService {
  @InjectRepository(Comment)
  async create() {}
}
