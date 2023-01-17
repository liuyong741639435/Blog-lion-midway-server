import { ValidateItem } from '../type';
import { ArticleState } from '../type/article';

const aid: ValidateItem = {
  key: 'aid',
  reg: /^[0-9]{1,12}$/,
  tigs: '参数有误，只能是数字',
};

const state: ValidateItem = {
  key: 'state',
  tigs: `参数有误:${Object.values(ArticleState).join('-')}`,
  values: Object.values(ArticleState),
};

const title: ValidateItem = {
  key: 'title',
  reg: /^.{0,30}$/,
  tigs: '最大长度30',
  required: false,
};

const content: ValidateItem = {
  key: 'content',
  reg: /^.{0,30000}$/,
  tigs: '最大长度30000',
  required: false,
};

// const type: ValidateItem = {
//   key: 'type',
//   reg: /^.{0,30000}$/,
//   tigs: '最大长度30000',
// };

const limit: ValidateItem = {
  key: 'limit',
  reg: /^[0-3]{0,10}$/,
  tigs: '最大值999',
  required: false,
};

const offset: ValidateItem = {
  key: 'offset',
  reg: /^[0-3]{0,10}$/,
  tigs: '最大值999',
  required: false,
};

export const articleValidate: Record<string, ValidateItem[]> = {
  editArticle: [aid, title, content],
  setArticleState: [state],
  articleList: [limit, offset],
  articleListByUser: [limit, offset],
  article: [aid],
  articleByUser: [aid],
};
