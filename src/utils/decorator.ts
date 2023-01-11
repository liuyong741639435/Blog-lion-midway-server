export const loginInterceptList: string[] = [];

// 标记需要校验token的接口,

export function Login(url?: string) {
  return function (target: any, name: string) {
    const path = url ?? name;
    if (loginInterceptList.includes(path)) {
      console.error(
        `-------------loginInterceptList: ${path}重复请查询原因-------------`
      );
    } else {
      loginInterceptList.push(path);
    }
  };
}
