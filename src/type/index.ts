import { ArticleState } from './article';

// 环境相关。 入参与npm传入参数相关
export enum NodeEnv {
  Local = 'local',
}

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
