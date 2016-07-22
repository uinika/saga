import { combineReducers } from 'redux'
import { RESPONSE_MENU_TREE } from '../actions/frame';

function FrameReducer(state = {}, action) {
  if( RESPONSE_MENU_TREE === action.type ){
    return {
      menuTree: action.menuTree
    }
  }
  else{
    return state
  }
}

export default FrameReducer
