import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

/* Selected */
export const select = handleActions({
  'ROLE_SELECT_SINGLE': (state = {}, action) => ({
    ...state,
    single: action.payload
  }),
  'ROLE_SELECT_MULTIPLE': (state = {}, action) => ({
    ...state,
    multiple: action.payload
  })
}, {
  single: {},
  multiple: []
})

/* Find */
export const find = handleActions({
  'ROLE_FIND': (state = {}, action) => ({
    ...state,
    list: action.payload
  }),
  'ROLE_FIND_FILTER': (state = {}, action) => ({
    ...state,
    filter: action.payload
  }),
}, {
  list: [],
  filter: {}
})

/* Create */
export const create = handleActions({
  'ROLE_CREATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  }),
  'ROLE_UPDATE': (state = {}, action) => ({
    ...state,
    result: action.payload
  })
}, {
  modal: false
})

/* Update */
export const update = handleActions({
  'ROLE_UPDATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  }),
  'ROLE_UPDATE': (state = {}, action) => ({
    ...state,
    result: action.payload
  })
}, {
  modal: false
})

/* Detail */
export const detail = handleActions({
  'ROLE_DETAIL': (state = {}, action) => ({
    ...state,
    target: action.payload
  }),
  'ROLE_DETAIL_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false,
  target: []
})

/* Auth */
export const auth = handleActions({
  'ROLE_AUTH_MODAL': (state = {}, action) => ({
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
