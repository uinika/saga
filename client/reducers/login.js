import { combineReducers } from 'redux'
import { LOGIN, VLIDATE_CODE } from '../actions/login';

function auth(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return state.auth;
    case VLIDATE_CODE:
      return state.validateCode;
    default:
      return state
  }
}

export default combineReducers({
  auth
});
