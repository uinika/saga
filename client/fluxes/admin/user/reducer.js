import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

/* Selected */
export const target = handleActions({
  'USER_SELECT_TARGET': (state = {}, action) => (
    action.payload
  )
}, {
  target: []
})

/* Find */
export const find = handleActions({
  'USER_FIND': (state = {}, action) => ({
    ...state,
    list: action.payload
  })
}, {
  list: []
})

/* Create */
export const create = handleActions({
  'USER_CREATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false
})

/* Update */
export const update = handleActions({
  'USER_UPDATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false
})

/* Detail */
export const detail = handleActions({
  'USER_DETAIL_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false
})

/* Auth */
export const auth = handleActions({
  'USER_AUTH_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false
})

export default combineReducers({
  target,
  find,
  create,
  update,
  detail,
  auth
})
