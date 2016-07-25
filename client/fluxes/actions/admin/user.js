import { createAction } from 'redux-actions'
import { Fetch, Validator } from '../../../common/http'

export let findUser = createAction('FIND_USER', async httpParam => {
  let data = await Fetch({
    url: '/sys/accounts',
    method: 'GET',
    query: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

export let addUser = createAction('ADD_USER', async httpParam => {
  let data = await Fetch({
    url: '/sys/account',
    method: 'POST',
    param: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

export let updateUser = createAction('UPDATE_USER', async httpParam => {
  let data = await Fetch({
    url: '/sys/account',
    method: 'PUT',
    param: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

export let toggleModal = createAction('TOGGLE_MODAL', visible => (
  visible
))
