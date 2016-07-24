import { handleAction, handleActions } from 'redux-actions'

let UserReducer = handleActions({
  'FIND_USER': (state = {}, action) => ({
    users: action.payload
  })
}, { users: [] });

export default UserReducer
