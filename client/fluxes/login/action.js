import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import { url, http, validate } from '../../common/http'
import { message } from 'antd'
// Login
export const loginResult = createAction('LOGIN_RESULT')
export function login(httpParam) {
  return function(dispatch) {
    http({
      url: '/login',
      method: 'POST',
      param: httpParam
    })
    .then(data => {
       dispatch(loginResult(data))
       return data
     })
     .then(data => {
       if(validate(data, 200)){
         sessionStorage.token = data.head.token
         dispatch(push('/frame/dashboard'))
         message.success(data.head.message, 3)
       }
       return data
     })
     .then(data => {
       if(validate(data, 201)){
         message.warning(data.head.message, 3)
         dispatch(validateCode())
       }
     })
  }
}
// Vlidate Code
export const validateCode = createAction('VALIDATE_CODE', () => (
  url + '/validatecode?_=' + Math.random()
))
