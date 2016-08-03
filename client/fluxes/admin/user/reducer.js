import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

/* Selected */
export const select = handleActions({
  'SELECT_SINGLE': (state = {}, action) => ({
    ...state,
    single: action.payload
  }),
  'SELECT_MULTIPLE': (state = {}, action) => ({
    ...state,
    multiple: action.payload
  })
}, {
  single: {},
  multiple: []
})

/* Find */
export const find = handleActions({
  'FIND': (state = {}, action) => ({
    ...state,
    list: action.payload
  }),
  'FIND_FILTER': (state = {}, action) => ({
    ...state,
    filter: action.payload
  }),
}, {
  list: [],
  filter: {}
})

/* Create */
export const create = handleActions({
  'CREATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false
})

/* Update */
export const update = handleActions({
  'UPDATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false
})

/* Detail */
export const detail = handleActions({
  'DETAIL': (state = {}, action) => ({
    ...state,
    target: action.payload
  }),
  'DETAIL_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false,
  target: []
})

/* Auth */
export const auth = handleActions({
  'AUTH_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  }),
  'AUTH': (state = {}, action) => ({
    ...state,
    target: action.payload
  })
}, {
  modal: false,
  target: []
})

export default combineReducers({
  select,
  find,
  create,
  update,
  detail,
  auth
})
