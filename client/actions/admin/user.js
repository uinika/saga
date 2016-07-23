import { Url, Fetch, Validator } from '../../common/http'

export const REQUEST_USER = 'REQUEST_USER'
export const RESPONSE_USER = 'RESPONSE_USER'

export function requestUser(httpParam) {
  return function(dispatch){
    Fetch({
      url: '/sys/accounts',
      method: 'GET',
      query: httpParam
    })
    .then(data => {
       if(Validator(data, 200)){
         dispatch(responseUser(data.body))
       }
     })
  }
}

export function responseUser(userList) {
  return {
    type : RESPONSE_USER,
    userList
  }
}
