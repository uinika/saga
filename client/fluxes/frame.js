import { handleActions } from 'redux-actions'
import { createAction } from 'redux-actions'
import { Url, Fetch, Validator } from '../common/http'

/** ========== Reducer ========== */
export default handleActions({
  'FETCH_MENU_TREE': (state = {}, action) => ({
    menuTree: action.payload
  })
}, {
  menuTree: []
})


/** ========== Action Creator ========== */
export const fetchMenuTree = createAction('FETCH_MENU_TREE', async () => {
  let data = await Fetch({
    url: '/navigation/menuTree',
    method: 'GET'
  });
  if(Validator(data, 200)){
    return data.body
  }
})
