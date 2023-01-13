import { ValidateItem } from '../type';

const userName = {
  key: 'userName',
  reg: /^[A-Za-z0-9]{4,12}$/,
  tigs: '4-12位由字母+数字的组合',
};

const password = {
  key: 'password',
  reg: /^[A-Za-z0-9]{4,12}$/,
  tigs: '4-12位由字母+数字的组合',
};

const nickName = {
  key: 'password',
  reg: /^[A-Za-z0-9]{4,12}$/,
  tigs: '4-12位由字母+数字的组合',
};

const jobTitle = {
  key: 'jobTitle',
  reg: /^[A-Za-z0-9]{4,12}$/,
  tigs: '4-12位由字母+数字的组合',
};

const company = {
  key: 'company',
  reg: /^[A-Za-z0-9]{4,12}$/,
  tigs: '4-12位由字母+数字的组合',
};

const blogAddress = {
  key: 'blogAddress',
  reg: /^[A-Za-z0-9]{4,12}$/,
  tigs: '4-12位由字母+数字的组合',
};

const description = {
  key: 'description',
  reg: /^[A-Za-z0-9]{4,12}$/,
  tigs: '4-12位由字母+数字的组合',
};

export const userValidate: Record<string, ValidateItem[]> = {
  login: [userName, password],
  register: [userName, password],
  updatePassword: [password],
  updateUserInfo: [nickName, jobTitle, company, blogAddress, description],
};
