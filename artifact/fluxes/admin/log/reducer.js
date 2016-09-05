import { combineReducers } from 'redux'
import summary from './summary/reducer'
import detail from './detail/reducer'

export default combineReducers({
  summary,
  detail
})
