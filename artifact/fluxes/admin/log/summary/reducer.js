import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

/* Find */
export const find = handleActions({
  'LOG_SUMMARY_FIND': (state = {}, action) => ({
    ...state,
    list: action.payload
  }),
  'LOG_SUMMARY_FIND_FILTER': (state = {}, action) => ({
    ...state,
    filter: action.payload
  }),
}, {
  list: [],
  filter: {}
})

export default combineReducers({
  find
})
