// 登录之后的上下文
export interface UserContext {
  userId: number;
  username: string;
  phoneNum: string;
}

// 校验相关
export interface Tips {
  key: string;
  reg: RegExp;
  tigs: string;
}
