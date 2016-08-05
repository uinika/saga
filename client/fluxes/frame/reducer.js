import { handleActions } from 'redux-actions'

export default handleActions({
  'MENU_TREE_RESULT': (state = {}, action) => ({
    ...state,
    menuTree: action.payload
  })
}, {
  menuTree: []
})
