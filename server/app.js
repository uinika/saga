const Express = require('express'),
      App = Express(),
      Cors = require('cors'),
      BaseUrl = '/',
      BodyParser = require('body-parser');
/** Basic config for express */
App.use('/client', Express.static('./client'));
App.use(Cors({
  origin: 'http://localhost:5000',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 1728000
}));
App.use(BodyParser.json());
App.listen(5002);
console.info('Server started http://localhost:5002' + BaseUrl);
// Login
App.use(BaseUrl, require('./mock/login'));
// Dashboard
App.use(BaseUrl, require('./mock/dashboard'));
