import { combineReducers } from 'redux'
import { LOGIN, VALIDATE_CODE } from '../actions/login';

function login(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: action.auth
      }
    case VALIDATE_CODE:
      return {
        ...state,
        path: action.path
      }
    default:
      return state
  }
}

export default login
