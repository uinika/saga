import _ from 'lodash';
import 'whatwg-fetch';

const PATH  = 'http://172.16.0.119:8080';
exports.Path = PATH;
// const PATH  = 'http://' + window.location.href.split('/')[2];

exports.Http = (options) => {
  let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  let token = sessionStorage.token;
  if(token){
    header = _.assign({}, header, {'Authorization': 'Bearer ' + token});
  };
  return fetch(PATH + options.url, {
    credentials: 'include',
    method: options.method,
    headers: header,
    body: JSON.stringify(options.param)
  })
  .then(result => result.json());
};
