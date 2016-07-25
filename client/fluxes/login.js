import { createAction } from 'redux-actions'
import { Url, Fetch, Validator } from '../common/http'
import { push } from 'react-router-redux'
import { handleAction, handleActions } from 'redux-actions'

/** ========== Reducer ========== */
export default handleActions({
  'LAUNCH_LOGIN': (state = {}, action) => ({
    user: action.payload
  }),
  'GET_VALIDATE_CODE': (state = {}, action) => ({
    validatecode: action.payload
  })
}, {
  user: {},
  validatecode: ''
});


/** ========== Action Creator ========== */
export function launchLogin(httpParam) {
  return function(dispatch) {
    Fetch({
      url: '/login',
      method: 'POST',
      param: httpParam
    })
    .then(data => {
       if(Validator(data, 200)){
         sessionStorage.token = data.head.token;
         dispatch(mountLogin(data.body))
         dispatch(push('/frame/dashboard'))
       }
       else if(Validator(data, 201)){
         dispatch(getValidateCode())
       }
     })
  }
}

export const getValidateCode = createAction('GET_VALIDATE_CODE', () => (
  Url + '/validatecode?_=' + Math.random()
))

export const mountLogin = createAction('LAUNCH_LOGIN', user => (
  user
))
