import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

/* Selected */
export const select = handleActions({
  'ADD_CLUSTER_NAME': (state = {}, action) => ({
    ...state,
    result1: action.payload
  }),
  'ADD_RESOURCE_URL': (state = {}, action) => ({
    ...state,
    result2: action.payload
  }),
}, {
  result2: {
    clusterHDPUrl: 'http://ip:port/HDP/centos7/2.x/updates/2.4.2.0/HDP-2.4.2.0-centos7-rpm.tar.gz',
    clusterHDPUTTLUrl: 'http://ip:port/HDP-UTILS-1.1.0.20/repos/centos7/HDP-UTILS-1.1.0.20-centos7.tar.gz'
  },
  result1: {},
})
export default combineReducers({

  select
})
