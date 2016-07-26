import { createAction } from 'redux-actions'
import { Fetch, Validator } from '../../../common/http'

/* Find */
export const findUser = createAction('FIND_USER', async httpParam => {
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
export const createUser = createAction('CREATE_USER', async httpParam => {
  const data = await Fetch({
    url: '/sys/account',
    method: 'POST',
    param: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})
export const toggleCreateModal = createAction('TOGGLE_CREATE_MODAL')

/* Update */
export const toggleUpdateModal = createAction('TOGGLE_UPDATE_MODAL')
export const selectTargetRow = createAction('SELECT_TARGET_ROW')
export const updateUser = createAction('UPDATE_USER', async httpParam => {
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
export const toggleDetailModal = createAction('TOGGLE_DETAIL_MODAL')

/* Auth */
export const toggleAuthModal = createAction('TOGGLE_AUTH_MODAL')
