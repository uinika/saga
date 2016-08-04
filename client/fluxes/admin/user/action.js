import { createAction } from 'redux-actions'
import { url, http, validate } from '../../../common/http'
import { message } from 'antd'

/* Selected */
export const selectSingle = createAction('SELECT_SINGLE')
export const selectMultiple = createAction('SELECT_MULTIPLE')

/* Find */
export const findFilter = createAction('FIND_FILTER')
export const find = createAction('FIND', async httpParam => {
  const data = await http({
    url: '/sys/accounts',
    method: 'GET',
    query: httpParam
  })
  if(validate(data, 200)){
    return data
  }
})

/* Create */
export const createModal = createAction('CREATE_MODAL')
export function create(httpParam) {
  return function(dispatch) {
    http({
      url: '/sys/account',
      method: 'POST',
      param: httpParam
    })
    .then(data => {
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
    .catch( (error) => console.error(error) )
  }
}

/* Update */
export const updateModal = createAction('UPDATE_MODAL')
export const update = createAction('UPDATE', async httpParam => {
  const data = await http({
    url: '/sys/account',
    method: 'PUT',
    param: httpParam
  })
  if(validate(data, 200)){
    return data.body
  }
})

/* Detail */
export const detailModal = createAction('DETAIL_MODAL')
export const detail = createAction('DETAIL', async pathParam => {
  const data = await http({
    url: '/sys/account/' + pathParam,
    method: 'GET'
  })
  if(validate(data, 200)){
    return data.body
  }
})

/* Auth */
export const authModal = createAction('AUTH_MODAL')
export const auth = createAction('AUTH', async (pathParam, queryParam) => {
  const data = await http({
    url: '/sys/account/' + pathParam +'/roles',
    method: 'GET',
    query: queryParam
  })
  if(validate(data, 200)){
    return data.body
  }
})
