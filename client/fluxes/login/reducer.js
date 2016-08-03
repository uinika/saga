import { handleActions } from 'redux-actions'

export default handleActions({
  'MOUNT_LOGIN': (state = {}, action) => ({
    ...state,
    user: action.payload
  }),
  'GET_VALIDATE_CODE': (state = {}, action) => ({
    ...state,
    validatecode: action.payload
  })
}, {
  user: {},
  validatecode: ''
})
