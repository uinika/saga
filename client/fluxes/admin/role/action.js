import { createAction } from 'redux-actions'
import { Fetch, Validator } from '../../../common/http'

/* Selected */
export const roleSelectSingle = createAction('ROLE_SELECT_SINGLE')
export const roleSelectMultiple = createAction('ROLE_SELECT_MULTIPLE')

/* Find */
export const roleFindFilter = createAction('ROLE_FIND_FILTER')
export const roleFind = createAction('ROLE_FIND', async httpParam => {
  const data = await Fetch({
    url: '/sys/roles',
    method: 'GET',
    query: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

/* Create */
export const roleCreateModal = createAction('ROLE_CREATE_MODAL')
export const roleCreate = createAction('ROLE_CREATE', async httpParam => {
  const data = await Fetch({
    url: '/sys/role',
    method: 'POST',
    param: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

/* Update */
export const roleUpdateModal = createAction('ROLE_UPDATE_MODAL')
export const roleUpdate = createAction('ROLE_UPDATE', async httpParam => {
  const data = await Fetch({
    url: '/sys/role',
    method: 'PUT',
    param: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

/* Detail */
export const roleDetailModal = createAction('ROLE_DETAIL_MODAL')
export const roleDetail = createAction('ROLE_DETAIL', async pathParam => {
  const data = await Fetch({
    url: '/sys/role/' + pathParam,
    method: 'GET'
  })
  if(Validator(data, 200)){
    return data.body
  }
})

/* Auth */
export const roleAuthModal = createAction('ROLE_AUTH_MODAL')
