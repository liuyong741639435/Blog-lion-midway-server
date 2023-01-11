import { Context } from '@midwayjs/koa';
export function getFormData(ctx: Context): Record<string, any> {
  switch (ctx.method) {
    case 'GET':
      return ctx.request.query;
    case 'POST':
      return ctx.request.body;
    case 'PUT':
      return ctx.request.body; // todo待test
    default:
      console.log('尚未覆盖方法:', ctx.method);
      return {};
  }
}
