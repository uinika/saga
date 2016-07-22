import { Url, Fetch, Validator } from '../common/http'
import { push } from 'react-router-redux'

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN'
export const GET_VALIDATE_CODE_URL = 'GET_VALIDATE_CODE_URL'

export function fetchLogin(httpParam) {
  return function(dispatch) {
    Fetch({
      url: '/login',
      method: 'POST',
      param: httpParam
    })
    .then(data => {
       if(Validator(data, 200)){
         sessionStorage.token = data.head.token;
         dispatch(submitLogin(data.body))
         dispatch(push('/frame/dashboard'))
       }
       else if(Validator(data, 201)){
         dispatch(getValidateCodeUrl())
       }
     })
  }
}

export function submitLogin(user) {
  return {
    type: SUBMIT_LOGIN,
    user
  }
}

export function getValidateCodeUrl() {
  return {
    type: GET_VALIDATE_CODE_URL,
    url: Url + '/validatecode?_=' + Math.random()
  }
}
