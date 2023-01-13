import { ArticleState } from './article';

// 登录之后的上下文
export interface UserContext {
  userId: number;
  username: string;
  phoneNum: string;
}

// 校验相关
export interface ValidateItem {
  key: string;
  tigs: string;
  reg?: RegExp;
  required?: boolean;
  values?: Array<ArticleState | string>;
}
