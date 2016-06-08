'use strict';
const Mongodb = require('mongodb'),
      JsonLoader = require('load-json-file');

const Config = {
  cors: 'http://localhost:8001',
  path: __dirname + '/mock/',
  mongodb: new Mongodb.Db('autumn', new Mongodb.Server('localhost', 27017), {safe: true}),
  json: function(name){
    return JsonLoader.sync(__dirname + '/mock/' + name);
  },
  protocal: function(head, body){
    return {
      "head": {
        "status": head.status || '',
        "token": head.token || '',
        "message": head.message || '',
        "total": head.total || ''
      },
      "body": body || ''
    }
  }
}

module.exports = Config;
