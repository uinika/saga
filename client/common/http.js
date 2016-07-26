import _ from 'lodash';
import 'whatwg-fetch';
import QueryString from 'query-string';
import SuperAgent from 'superagent';

/* 本机 */
const URL  = 'http://localhost:5002'
/* 本地 */
// const URL  = 'http://172.16.0.119:8080'
/* 远程 */
// const URL = 'http://192.168.13.185:8080'
/* 同源自动生成 */
// const URL  = 'http://' + window.location.href.split('/')[2]
exports.Url = URL;

exports.Fetch = (options) => {
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
};

exports.Xhr = () => {

}

exports.Validator = (data, status) => {
  switch(status) {
    case 200:
      return (data && data.head && data.head.status === status); break;
    case 201:
      return (data && data.head && data.head.status === status); break;
    case 202:
      return (data && data.head && data.head.status === status); break;
    case 400:
      return (data && data.head && data.head.status === status); break;
    case 404:
      return (data && data.head && data.head.status === status); break;
    case 405:
      return (data && data.head && data.head.status === status); break;
    case 415:
      return (data && data.head && data.head.status === status); break;
    case 500:
      return (data && data.head && data.head.status === status); break;
  }
}
