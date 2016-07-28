import { createAction } from 'redux-actions'
import { Fetch, Validator } from '../../../common/http'

/* Selected */
export const userSelectSingle = createAction('USER_SELECT_SINGLE')
export const userSelectMultiple = createAction('USER_SELECT_MULTIPLE')

/* Find */
export const userFindFilter = createAction('USER_FIND_FILTER')
export const userFind = createAction('USER_FIND', async httpParam => {
  const data = await Fetch({
    url: '/sys/accounts',
    method: 'GET',
    query: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

/* Create */
export const userCreateModal = createAction('USER_CREATE_MODAL')
export const userCreate = createAction('USER_CREATE', async httpParam => {
  const data = await Fetch({
    url: '/sys/account',
    method: 'POST',
    param: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

/* Update */
export const userUpdateModal = createAction('USER_UPDATE_MODAL')
export const userUpdate = createAction('USER_UPDATE', async httpParam => {
  const data = await Fetch({
    url: '/sys/account',
    method: 'PUT',
    param: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

/* Detail */
export const userDetailModal = createAction('USER_DETAIL_MODAL')
export const userDetail = createAction('USER_DETAIL', async pathParam => {
  const data = await Fetch({
    url: '/sys/account/' + pathParam,
    method: 'GET'
  });
  if(Validator(data, 200)){
    return data.body
  }
})

/* Auth */
export const userAuthModal = createAction('USER_AUTH_MODAL')
