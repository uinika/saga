import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import { Url, Fetch, Validator } from '../../common/http'
import { message } from 'antd'
// Login
export const mountLogin = createAction('MOUNT_LOGIN')
export function launchLogin(httpParam) {
  return function(dispatch) {
    Fetch({
      url: '/login',
      method: 'POST',
      param: httpParam
    })
    .then(data => {
       dispatch(mountLogin(data))
       return data
     })
     .then(data => {
       if(Validator(data, 200)){
         sessionStorage.token = data.head.token
         dispatch(push('/frame/dashboard'))
         message.success(data.head.message, 3)
       }
       return data
     })
     .then(data => {
       if(Validator(data, 201)){
         message.warning(data.head.message, 3)
         dispatch(getValidateCode())
       }
     })
  }
}
// Vlidate Code
export const getValidateCode = createAction('GET_VALIDATE_CODE', () => (
  Url + '/validatecode?_=' + Math.random()
))
