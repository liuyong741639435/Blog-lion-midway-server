import { Tips } from '../type/conterller';

export function validate(data: Record<string, any>, tips: Tips[]) {
  return tips
    .filter(item => item.reg.test(data[item.key]) === false)
    .map(item => ({ key: item.key, tigs: item.tigs }));
}
