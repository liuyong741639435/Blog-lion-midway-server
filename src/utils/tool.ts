// 去除 undefined
export function removeUndefined(data: Record<string, any>) {
  const res = { ...data };
  Object.keys(data).forEach(key => {
    if (data[key] === undefined) {
      delete res[key];
    }
  });
  return res;
}
