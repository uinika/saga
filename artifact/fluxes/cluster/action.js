import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import { url, http, validate } from '../../common/http'
import { message } from 'antd'

/* start */
export const addclusterName=createAction('ADD_CLUSTER_NAME')
export const addclusterNameNext = createAction('ADD_CLUSTER_NAME_NEXT', (dispatch) => (
  dispatch(push('/frame/cluster/resource-url'))
))
/*resource-url*/
export const addResourceUrl=createAction('ADD_RESOURCE_URL')
export const addResourceUrlBack = createAction('ADD_CLUSTER_NAME_NEXT', (dispatch) => (
  dispatch(push('/frame/cluster/start'))
))
export const addResourceUrlNext = createAction('ADD_CLUSTER_NAME_NEXT', (dispatch) => (
  dispatch(push('/frame/cluster/install-items'))
))
