import { ValidateItem } from '../type';

const followerUserId = {
  key: 'followerUserId',
  reg: /^[0-9]{1,12}$/,
  tigs: '参数有误，只能是数字',
};

export const followerValidate: Record<string, ValidateItem[]> = {
  setFollower: [followerUserId],
  setCancelFollower: [followerUserId],
};
