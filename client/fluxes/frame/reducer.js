import { handleActions } from 'redux-actions'

export default handleActions({
  'FETCH_MENU_TREE': (state = {}, action) => ({
    menuTree: action.payload
  })
}, {
  menuTree: []
})
