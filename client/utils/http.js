import _ from 'lodash';
import 'whatwg-fetch';

const PATH  = 'http://localhost:5002';
// const PATH  = 'http://172.16.0.119:8080';
// const PATH  = 'http://' + window.location.href.split('/')[2];
exports.Path = PATH;

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
