export const LOGIN = 'LOGIN';
export const VALIDATE_CODE = 'VALIDATE_CODE';
import { Url, Fetch, Validator } from '../common/http'

export function loginForm(httpParam) {
  return function() {
    Fetch({
      url: '/login',
      method: 'POST',
      param: httpParam
    })
    .then(data => {
       console.log(data);
     })
  }
}

export function getValidateCode(path) {
  return {
    type: VALIDATE_CODE,
    path
  }
}
