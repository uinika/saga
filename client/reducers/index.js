import {combineReducers} from 'redux'

function doWork(state = {}, action){
  if(action.type==='work'){
    return Object.assign({}, state, {
        task: 'i am working on react'
    })
  }
  else{
    return state
  }
}

const combineWork = combineReducers({
  doWork
})

export default combineWork
