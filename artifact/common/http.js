import 'whatwg-fetch'
import QueryString from 'query-string'
import _ from 'lodash'

const URL  = 'http://localhost:5002'

export const url = URL

export const http = (options) => {
  let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  let token = sessionStorage.token;
  if(token) {
    header = _.assign({}, header, {'Authorization': 'Bearer ' + token});
  };
  if(options.query && options.method === 'GET') {
    return fetch(URL + options.url + '?' + QueryString.stringify(options.query), {
      credentials: 'include',
      method: 'GET',
      headers: header
    })
    .then(result => result.json());
  }else{
    return fetch(URL + options.url, {
      credentials: 'include',
      method: options.method,
      headers: header,
      body: JSON.stringify(options.param)
    })
    .then(result => result.json());
  }
}

export const validate = (data, status) => {
  let resolve = (code) => (data && data.head && data.head.status === code)
  switch(status) {
    case 200:
      return (resolve(status)); break;
    case 201:
      return (resolve(status)); break;
    case 202:
      return (resolve(status)); break;
    case 400:
      return (resolve(status)); break;
    case 404:
      return (resolve(status)); break;
    case 405:
      return (resolve(status)); break;
    case 415:
      return (resolve(status)); break;
    case 500:
      return (resolve(status)); break;
  }
}

export const paging = (current, pageSize) => ({
  current: current || 1,
  pageSize: pageSize || 12
})
