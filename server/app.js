const Express = require('express'),
      App = Express(),
      BaseUrl = '/server',
      BodyParser = require('body-parser');
/** Basic config for express */
App.use('/client', Express.static('./client'));
App.use(BodyParser.json());
App.listen(5002);
console.info('Server started http://localhost:5002/client/');
// Login
App.use(BaseUrl, require('./mock/login'));
// Dashboard
App.use(BaseUrl, require('./mock/dashboard'));
