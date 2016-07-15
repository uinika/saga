export const LOGIN = 'LOGIN';
export const VLIDATE_CODE = "VLIDATE_CODE";

export function login(username, password, validateCode) {
  return {
    type: LOGIN,
    username,
    password,
    validateCode
  }
};

export function validateCode(path) {
  return {
    type: VLIDATE_CODE,
    path
  }
};
