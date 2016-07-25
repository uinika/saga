import { createAction } from 'redux-actions'
import { Fetch, Validator } from '../../common/http'
import { handleActions } from 'redux-actions'

/** ========== Reducer ========== */
export default handleActions({
  'FIND_USER': (state = {}, action) => ({
    list: action.payload
  }),
  'TOGGLE_MODAL': (state = {}, action) => ({
    modal: action.payload
  })
}, {
  list: [],
  modal: false
})


/** ========== Action Creator ========== */
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

export const addUser = createAction('ADD_USER', async httpParam => {
  const data = await Fetch({
    url: '/sys/account',
    method: 'POST',
    param: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})

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

export const toggleModal = createAction('TOGGLE_MODAL', visible => (
  visible
))
