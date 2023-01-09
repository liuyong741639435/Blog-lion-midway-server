import { MidwayConfig } from '@midwayjs/core';
import { Person } from '../entity/person';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1672908742942_4771',
  koa: {
    port: 7001,
  },
  sequelize: {
    dataSource: {
      default: {
        database: 'blog_mid_dev',
        username: 'root',
        password: 'dd123456!',
        host: '127.0.0.1',
        port: 3306,
        encrypt: false,
        dialect: 'mysql',
        define: { charset: 'utf8' },
        timezone: '+08:00',
        entities: [Person],
        // 本地的时候，可以通过 sync: true 直接 createTable
        sync: true,
      },
    },
  },
} as MidwayConfig;
