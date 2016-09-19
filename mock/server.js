const Express = require('express'),
      App = Express(),
      Cors = require('cors'),
      BodyParser = require('body-parser'),
      Middleware = require('./common/middleware.js'),
      Color = require('colors/safe');

/** Middleware */
App.use('/wiserv', Express.static('./release'));
App.use(Cors({
  origin: 'http://localhost:5000',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 1728000
}));
App.use(BodyParser.json());
App.use('/', (request, response, next) => {
  Middleware.log(request, response);
  next();
});
App.listen(5002);
console.info(Color.yellow('Mock started on http://localhost:5002/wiserv'));

/** Basic config for express */
App.use('/', require('./login/api'));
App.use('/', require('./frame/api'));
App.use('/', require('./admin/user/api'));
App.use('/', require('./admin/log/api'));
App.use('/', require('./admin/role/api'));
