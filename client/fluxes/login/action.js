import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import { url, http, validate } from '../../common/http'
import { message } from 'antd'
// Login
export const mountLogin = createAction('MOUNT_LOGIN')
export function launchLogin(httpParam) {
  return function(dispatch) {
    http({
      url: '/login',
      method: 'POST',
      param: httpParam
    })
    .then(data => {
       dispatch(mountLogin(data))
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
         dispatch(getValidateCode())
       }
     })
  }
}
// Vlidate Code
export const getValidateCode = createAction('GET_VALIDATE_CODE', () => (
  url + '/validatecode?_=' + Math.random()
))
