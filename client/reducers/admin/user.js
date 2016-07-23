import { REQUEST_USER, RESPONSE_USER } from '../../actions/admin/user';

function UserReducer(state = {}, action) {
  switch (action.type) {
    case RESPONSE_USER:
      return {
        userList: action.userList
      }
    default:
      return state
  }
}

export default UserReducer
