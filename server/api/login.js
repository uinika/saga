const Router = require('express').Router(),
      Common = require('../common.js');
/** Router definition */
Router.route('/login')
  .post(function(request, response) {
    response.json(Common.Json('login/login.json'));
});
Router.route('/validatecode')
  .get(function(request, response) {
    response.sendFile(Common.Path + 'login/validatecode.jpg');
});
/** Module export */
module.exports = Router;
