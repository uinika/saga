const Express = require('express'),
      App = Express(),
      Cors = require('cors'),
      BodyParser = require('body-parser'),
      Common = require('./common.js'),
      Url = '/';

/** Middleware */
App.use('/client', Express.static('./client'));
App.use(Cors({
  origin: 'http://localhost:5000',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 1728000
}));
App.use(BodyParser.json());
App.use('/', function (request, response, next) {
  Common.Log(request, response);
  next();
});
App.listen(5002);
console.info('Server started http://localhost:5002' + Url);

/** Basic config for express */
App.use(Url, require('./login/api'));
App.use(Url, require('./frame/api'));
App.use(Url, require('./admin/user/api'));
App.use(Url, require('./admin/log/api'));
App.use(Url, require('./admin/role/api'));
