import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

/* Selected */
export const select = handleActions({
  'USER_SELECT_SINGLE': (state = {}, action) => ({
    ...state,
    single: action.payload
  }),
  'USER_SELECT_MULTIPLE': (state = {}, action) => ({
    ...state,
    multiple: action.payload
  })
}, {
  single: {},
  multiple: []
})

/* Find */
export const find = handleActions({
  'USER_FIND': (state = {}, action) => ({
    ...state,
    list: action.payload
  }),
  'USER_FIND_FILTER': (state = {}, action) => ({
    ...state,
    filter: action.payload
  }),
}, {
  list: [],
  filter: {}
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
  'USER_DETAIL': (state = {}, action) => ({
    ...state,
    target: action.payload
  }),
  'USER_DETAIL_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false,
  target: []
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
  select,
  find,
  create,
  update,
  detail,
  auth
})
