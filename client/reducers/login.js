import { SUBMIT_LOGIN, GET_VALIDATE_CODE_URL } from '../actions/login';

function LoginReducer(state = {}, action) {
  switch (action.type) {
    case SUBMIT_LOGIN:
      return {
        ...state,
        user: action.user
      }
    case GET_VALIDATE_CODE_URL:
      return {
        ...state,
        validate_code_url: action.url
      }
    default:
      return state
  }
}

export default LoginReducer
