import { createAction } from 'redux-actions'
import { url, http, validate } from '../../common/http'

export const fetchMenuTree = createAction('FETCH_MENU_TREE', async () => {
  let data = await http({
    url: '/navigation/menuTree',
    method: 'GET'
  })
  if(validate(data, 200)){
    return data.body
  }
})

export const launchLogout = createAction('LAUNCH_LOGOUT', async () => {
  let promise = await http({
    url: '/logout',
    method: 'POST'
  })
  if(validate(promise, 200)){
    return data.body
  }
})
