import { createAction } from 'redux-actions'
import { url, http, validate } from '../../../common/http'
import { message } from 'antd'

/** Selected */
export const selectSingle = createAction('SELECT_SINGLE')
export const selectMultiple = createAction('SELECT_MULTIPLE')

/** Find */
export const findFilter = createAction('FIND_FILTER')
export const findResult = createAction('FIND_RESULT')
export const find = httpParam => {
  return dispatch => {
    http({
      url: '/sys/accounts',
      method: 'GET',
      query: httpParam
    })
    .then( data => dispatch(findResult(data)) )
    .catch( (error) => console.warn(error) )
  }
}

/** Create */
export const createModal = createAction('CREATE_MODAL')
//
export const createResult = createAction('CREATE_RESULT')
export const create = httpParam => {
  return dispatch => {
    http({
      url: '/sys/account',
      method: 'POST',
      param: httpParam
    })
    .then(data => {
      dispatch(createResult(data))
      if(validate(data, 200)) {
        message.success(data.head.message, 3)
        return data.head.status
      }
      else if(validate(data, 201)) {
        message.error(data.head.message, 3)
        return data.head.status
      }
    })
    .then(status => {
        if(200 === status){
          dispatch(find({current: 1, pageSize: 12}))
          dispatch(createModal(false))
        }
        else if(201 === status){
          dispatch(createModal(true))
        }
    })
    .catch( (error) => console.warn(error) )
  }
}

/** Update */
export const updateModal = createAction('UPDATE_MODAL')
//
export const updateResult = createAction('UPDATE_RESULT')
export const update = httpParam => {
  return dispatch => {
    http({
      url: '/sys/account',
      method: 'PUT',
      param: httpParam
    })
    .then( data => dispatch(updateResult(data)) )
    .catch( (error) => console.warn(error) )
  }
}

/** Detail */
export const detailModal = createAction('DETAIL_MODAL')
//
export const detailResult = createAction('DETAIL_RESULT')
export const detail = pathParam => {
  return dispatch => {
    http({
      url: '/sys/account/' + pathParam,
      method: 'GET'
    })
    .then( data => dispatch(detailResult(data)) )
    .catch( (error) => console.warn(error) )
  }
}

/** Auth */
export const authModal = createAction('AUTH_MODAL')
// list
export const authResult = createAction('AUTH_RESULT')
export const auth = (pathParam, queryParam) => {
  return dispatch => {
    http({
      url: '/sys/account/' + pathParam +'/roles',
      method: 'GET',
      query: queryParam || ''
    })
    .then( data => authResult(detailResult(data)) )
    .catch( (error) => console.warn(error) )
  }
}
// add
export const authAddResult = createAction('AUTH_ADD_RESULT')
export const authAdd = (pathParam, queryParam) => {
  return dispatch => {
    http({
      url: '/sys/account/{accountId}/role',
      method: 'POST',
      query: queryParam
    })
  }
}
// remove
export const authRemoveResult = createAction('AUTH_REMOVE_RESULT')
export const authRemove = (pathParam, queryParam) => {
  return dispatch => {
    http({
      url: '/sys/account/{accountId}/role/[{roleIds}]',
      method: 'DELETE',
      query: queryParam
    })
  }
}
