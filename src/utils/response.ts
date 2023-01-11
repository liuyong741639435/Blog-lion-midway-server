function success(data: any = null, msg = 'success', code = 0) {
  return {
    code,
    msg,
    data,
  };
}

function error(msg = 'error', data = '', code = 1) {
  return {
    code,
    msg,
    data,
  };
}

export default { success, error };
