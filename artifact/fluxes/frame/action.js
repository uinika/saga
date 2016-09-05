import { createAction } from 'redux-actions'
import { message } from 'antd'
import { push } from 'react-router-redux'
import { url, http, validate } from '../../common/http'

/** Menu tree  */
export const menuTree = createAction('MENU_TREE')
export const getMenuTree = () => {
  return dispatch => {
    http({
      url: '/navigation/menuTree',
      method: 'GET'
    })
    .then( data => dispatch(menuTree(data)) )
    .catch( (error) => console.warn(error) )
  }
}

/** Logout */
export const logout = httpParam => {
  return dispatch => {
    http({
      url: '/logout',
      method: 'POST'
    })
    .then(data => {
      if(validate(data, 200)) {
        sessionStorage.removeItem('token')
        return data.head
      }
    })
    .then(head => {
      message.success(head.message, 2)
    })
    .then( () => dispatch(push('login')) )
    .catch( (error) => console.warn(error) )
  }
}
