import { createAction } from 'redux-actions'
import { Url, Fetch, Validator } from '../../common/http'

export const fetchMenuTree = createAction('FETCH_MENU_TREE', async () => {
  let data = await Fetch({
    url: '/navigation/menuTree',
    method: 'GET'
  })
  if(Validator(data, 200)){
    return data.body
  }
})

export const launchLogout = createAction('LAUNCH_LOGOUT', async () => {
  let promise = await Fetch({
    url: '/logout',
    method: 'POST'
  })
  if(Validator(promise, 200)){
    return data.body
  }
})
