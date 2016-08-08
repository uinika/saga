import { handleActions } from 'redux-actions'

export default handleActions({
  'MENU_TREE': (state = {}, action) => ({
    ...state,
    menuTree: action.payload
  })
}, {
  menuTree: []
})
