export enum ArticleState {
  PUBLIC, // 公开
  PRIVATE, // 私有
  DELETE, // 已删除
}

// 接口入参
export interface EditArticle {
  aid?: number;
  title: string;
  content: string;
}

export interface SetArticleState {
  aid: number;
  state: ArticleState;
}

export interface DeleteArticle {
  aid: number;
}
