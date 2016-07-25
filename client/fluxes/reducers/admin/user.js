import { handleAction, handleActions } from 'redux-actions'

export default handleActions({
  'FIND_USER': (state = {}, action) => ({
    list: action.payload
  }),
  'TOGGLE_MODAL': (state = {}, action) => ({
    modal: action.payload
  })
}, {
  list: [],
  modal: false
})
