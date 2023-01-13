import { ValidateItem } from '../type';
import { ArticleState } from '../type/article';

const aid = {
  key: 'aid',
  reg: /^[A-Za-z0-9]{4,12}$/,
  tigs: '参数有误，只能是大小写和数字',
  values: Object.values(ArticleState),
};

const title = {
  key: 'title',
  reg: /^.{0,30}$/,
  tigs: '最大长度30',
};

const content = {
  key: 'content',
  reg: /^.{0,30000}$/,
  tigs: '最大长度30000',
};

export const articleValidate: Record<string, ValidateItem[]> = {
  editArticle: [aid, title, content],
  setArticleState: [aid],
};
