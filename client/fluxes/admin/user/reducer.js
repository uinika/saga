import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

/* Find */
export const find = handleActions({
  'FIND_USER': (state = {}, action) => ({
    ...state,
    list: action.payload
  }),
}, {
  list: []
})

/* Create */
export const create = handleActions({
  'TOGGLE_CREATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  }),
}, {
  modal: false
})

/* Update */
export const update = handleActions({
  'TOGGLE_UPDATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  }),
  'SELECT_TARGET_ROW': (state = {}, action) => ({
    ...state,
    target: action.payload
  })
}, {
  modal: false,
  target: {}
})

/* Detail */
export const detail = handleActions({
  'TOGGLE_DETAIL_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false
})

/* Auth */
export const auth = handleActions({
  'TOGGLE_AUTH_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false
})

export default combineReducers({
  find,
  create,
  update,
  detail,
  auth
})
