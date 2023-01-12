import { Tips } from '../type/conterller';

export const userTips: Record<string, Tips[]> = {
  login: [
    {
      key: 'userName',
      reg: /^[A-Za-z0-9]{4,12}$/,
      tigs: '4-12位由字母+数字的组合',
    },
    {
      key: 'password',
      reg: /^[A-Za-z0-9]{4,12}$/,
      tigs: '4-12位由字母+数字的组合',
    },
  ],
  register: [
    {
      key: 'userName',
      reg: /^[A-Za-z0-9]{4,12}$/,
      tigs: '4-12位由字母+数字的组合',
    },
    {
      key: 'password',
      reg: /^[A-Za-z0-9]{4,12}$/,
      tigs: '4-12位由字母+数字的组合',
    },
  ],
};
