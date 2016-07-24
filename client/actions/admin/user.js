import { createAction } from 'redux-actions'
import { Url, Fetch, Validator } from '../../common/http'

export let findUser = createAction('FIND_USER', async httpParam => {
  let result = await Fetch({
    url: '/sys/accounts',
    method: 'GET',
    query: httpParam
  });
  return result.body
})

export let addUser = createAction('ADD_USER', async httpParam => {
  let result = await Fetch({
    url: '/sys/account',
    method: 'POST',
    param: httpParam
  });
  return result.body
})
