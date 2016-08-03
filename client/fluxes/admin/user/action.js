import { createAction } from 'redux-actions'
import { Fetch, Validator } from '../../../common/http'
import { message } from 'antd'

/* Selected */
export const selectSingle = createAction('SELECT_SINGLE')
export const selectMultiple = createAction('SELECT_MULTIPLE')

/* Find */
export const findFilter = createAction('FIND_FILTER')
export const find = createAction('FIND', async httpParam => {
  const data = await Fetch({
    url: '/sys/accounts',
    method: 'GET',
    query: httpParam
  })
  if(Validator(data, 200)){
    return data
  }
})

/* Create */
export const createModal = createAction('CREATE_MODAL')
export function create(httpParam) {
  return function(dispatch) {
    Fetch({
      url: '/sys/account',
      method: 'POST',
      param: httpParam
    })
    .then(data => {
      if(Validator(data, 200)) {
        message.success(data.head.message, 3)
      }
      else if(Validator(data, 201)) {
        message.error(data.head.message, 3)
      }
    })
    .then(() => dispatch(find({current: 1, pageSize: 12})))
    .then(() => dispatch(createModal()))
  }
}

/* Update */
export const updateModal = createAction('UPDATE_MODAL')
export const update = createAction('UPDATE', async httpParam => {
  const data = await Fetch({
    url: '/sys/account',
    method: 'PUT',
    param: httpParam
  })
  if(Validator(data, 200)){
    return data.body
  }
})

/* Detail */
export const detailModal = createAction('DETAIL_MODAL')
export const detail = createAction('DETAIL', async pathParam => {
  const data = await Fetch({
    url: '/sys/account/' + pathParam,
    method: 'GET'
  })
  if(Validator(data, 200)){
    return data.body
  }
})

/* Auth */
export const authModal = createAction('AUTH_MODAL')
export const auth = createAction('AUTH', async (pathParam, queryParam) => {
  const data = await Fetch({
    url: '/sys/account/' + pathParam +'/roles',
    method: 'GET',
    query: queryParam
  })
  if(Validator(data, 200)){
    return data.body
  }
})
