import { handleAction, handleActions } from 'redux-actions'

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
