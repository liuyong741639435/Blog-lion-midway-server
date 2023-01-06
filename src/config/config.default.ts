import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1672908742942_4771',
  koa: {
    port: 7001,
  },
  orm: {
    /**
     * 单数据库实例
     */
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'dd123456!',
    database: 'blog_mid_dev',
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
    dateStrings: true,
    // timezone: '+08:00', // 也可以配置时区（不建议）
  },
} as MidwayConfig;
