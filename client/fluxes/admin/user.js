import { createAction } from 'redux-actions'
import { Fetch, Validator } from '../../common/http'
import { handleActions } from 'redux-actions'

/** ========== Action Handler ========== */
export default handleActions({
  'FIND_USER': (state = {}, action) => ({
    ...state,
    find: action.payload
  }),
  'TOGGLE_CREATE_MODAL': (state = {}, action) => ({
    ...state,
    create: action.payload
  }),
  'TOGGLE_UPDATE_MODAL': (state = {}, action) => ({
    ...state,
    update: action.payload
  }),
  'SELECT_TARGET_ROW': (state = {}, action) => ({
    ...state,
    update: action.payload
  }),
  'TOGGLE_DETAIL_MODAL': (state = {}, action) => ({
    ...state,
    detail: action.payload
  }),
  'TOGGLE_AUTH_MODAL': (state = {}, action) => ({
    ...state,
    auth: action.payload
  })
}, {
  find: [],
  create: {
    modal: false
  },
  update: {
    modal: false,
    target: {}
  },
  detail: {
    modal: false
  },
  auth: {
    modal: false
  }
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
// Create
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
export const toggleCreateModal = createAction('TOGGLE_CREATE_MODAL', visible => (
  { modal: visible }
))
// Update
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
export const toggleUpdateModal = createAction('TOGGLE_UPDATE_MODAL', visible => (
  { modal: visible }
))
export const selectTargetRow = createAction('SELECT_TARGET_ROW', target => (
  {target: target}
))
// Detail
export const toggleDetailModal = createAction('TOGGLE_DETAIL_MODAL', visible => (
  { modal: visible }
))
// Auth
export const toggleAuthModal = createAction('TOGGLE_AUTH_MODAL', visible => (
  { modal: visible }
))
