import _ from 'lodash';
import 'whatwg-fetch';
import QueryString from 'query-string';
import SuperAgent from 'superagent';

const URL  = 'http://localhost:5002';
// const URL  = 'http://172.16.0.119:8080';
// const URL  = 'http://' + window.location.href.split('/')[2];
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

exports.Validator = (data) => {
  return (data.head.status === 200 && data.head.token);
}
