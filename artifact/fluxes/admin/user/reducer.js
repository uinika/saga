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
  'FIND_RESULT': (state = {}, action) => ({
    ...state,
    result: action.payload
  }),
  'FIND_FILTER': (state = {}, action) => ({
    ...state,
    filter: action.payload
  }),
}, {
  result: [],
  filter: {}
})

/* Create */
export const create = handleActions({
  'CREATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  }),
  'CREATE_RESULT': (state = {}, action) => ({
    ...state,
    result: action.payload
  })
}, {
  modal: false,
  result: {}
})

/* Update */
export const update = handleActions({
  'UPDATE_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  }),
  'UPDATE_RESULT': (state = {}, action) => ({
    ...state,
    result: action.payload
  })
}, {
  modal: false,
  result: {}
})

/* Detail */
export const detail = handleActions({
  'DETAIL_RESULT': (state = {}, action) => ({
    ...state,
    result: action.payload
  }),
  'DETAIL_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  })
}, {
  modal: false,
  result: []
})

/* Auth */
export const auth = handleActions({
  'AUTH_MODAL': (state = {}, action) => ({
    ...state,
    modal: action.payload
  }),
  'AUTH_RESULT': (state = {}, action) => ({
    ...state,
    result: action.payload
  }),
  'AUTH_ADD_RESULT': (state = {}, action) => ({
    ...state,
    resultAdd: action.payload
  }),
  'AUTH_REMOVE_RESULT': (state = {}, action) => ({
    ...state,
    resultRemove: action.payload
  })
}, {
  modal: false,
  result: {},
  resultAdd: {},
  resultRemove: {}
})

export default combineReducers({
  select,
  find,
  create,
  update,
  detail,
  auth
})
