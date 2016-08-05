import { handleActions } from 'redux-actions'

export default handleActions({
  'LOGIN_RESULT': (state = {}, action) => ({
    ...state,
    result: action.payload
  }),
  'VALIDATE_CODE': (state = {}, action) => ({
    ...state,
    validatecode: action.payload
  })
}, {
  result: {},
  validatecode: ''
})
