const Mongodb = require('mongodb'),
      JsonLoader = require('load-json-file');
/** Basic path */
exports.Path = (url) => {
  return __dirname + url
};
/** Json loader */
exports.Json = name => {
  return JsonLoader.sync(__dirname  + name);
};
/** Protocal between server & client */
exports.Protocal = function(head, body){
  head = head || {};
  body = body || {};
  return {
    "head": {
      "status": head.status || '',
      "token": head.token || '',
      "message": head.message || '',
      "total": head.total || ''
    },
    "body": body || ''
  }
};
/** Mongodb connection */
exports.Mongodb = new Mongodb.Db('autumn', new Mongodb.Server('localhost', 27017), {
  safe: true
});
/** Log for http request */
exports.Log = function(request, response) {
  console.info('================================================');
  console.info('Request URL:', request.path);
  console.info('Request Type:', request.method);
  console.info('Request Body:', request.body);
  console.info('Request Cookie:', request.cookies);
  console.info('Request Query:', request.query);
  console.info('Request Parameter:', request.params);
}
