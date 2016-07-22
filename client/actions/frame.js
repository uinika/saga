import { Url, Fetch, Validator } from '../common/http'

export const REQUEST_MENU_TREE = 'FETCH_MENU_TREE'
export const RESPONSE_MENU_TREE = 'RESPONSE_MENU_TREE'

export function requestMenuTree() {
  return function(dispatch) {
    Fetch({
      url: '/navigation/menuTree',
      method: 'GET'
    })
    .then(data => {
       if(Validator(data, 200)){
         dispatch(responseMenuTree(data.body))
       }
     })
  }
}

export function responseMenuTree(menuTree) {
  return {
    type: RESPONSE_MENU_TREE,
    menuTree
  }
}
