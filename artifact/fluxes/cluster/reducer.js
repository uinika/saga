import { handleActions } from 'redux-actions'

export default handleActions({
  'CREATE_CLUSTER': (state = {}, action) => ({
    ...state,
    result1: action.payload
  }),
  'ADD_RESOURCE_URL': (state = {}, action) => ({
    ...state,
    result2: action.payload
  }),
}, {
  result1: {},
  result2: {},
})
