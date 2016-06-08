'use strict';
const Koa = require('koa'),
      App = Koa();

/** CORS Filter */
// Setting static resource for express
// const path = require('path');
// var client = path.resolve(__dirname + '/../client');
// app.use(express.static(client));
// App.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', Config.cors);
//   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Age', 1728000);
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   if (req.method === 'OPTIONS') res.sendStatus(200);
//   else next();
// });
// App.listen(8080);
// console.info('http-server[koa] listening on 8080');
//
// /** Login */
// var login = require('./api/common/login');
// App.use('/api', login);

App.use(function *(next){
  let httpRequest = this.request;
  let httpResponse = this.response;
  httpResponse.set('Access-Control-Allow-Origin', 'http://localhost:8000');
  httpResponse.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  httpResponse.set('Access-Control-Allow-Credentials', true);
  httpResponse.set('Access-Control-Allow-Age', 1728000);
  httpResponse.set('Access-Control-Allow-Headers', 'Content-Type');
  if (httpRequest.method === 'OPTIONS') httpResponse.sendStatus(200);
  yield next;
});

App.listen(8000);
