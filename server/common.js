const Mongodb = require('mongodb'),
      JsonLoader = require('load-json-file');
/** Basic path */
exports.Path = __dirname + '/mock/';
/** Json loader */
exports.Json = function(name){
  return JsonLoader.sync(__dirname + '/mock/' + name);
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
