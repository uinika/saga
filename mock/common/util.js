const JsonLoader = require('load-json-file'),
      Path = require('path');

/** Basic path */
exports.url = (url) => {
  return Path.resolve(__dirname, '..') + url
};

/** Json loader */
exports.json = path => {
  return JsonLoader.sync(
    Path.resolve(__dirname, '..') + path
  );
};

/** Protocal between server & client */
exports.protocal = (head, body) => {
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
