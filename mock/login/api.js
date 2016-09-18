const Router = require('express').Router(),
      Util = require('../common/util.js');
/** Router definition */
Router.route('/login')
  .post(function(request, response) {
    response.json(Util.Json('/login/data/login.json'));
});
Router.route('/validatecode')
  .get(function(request, response) {
    response.sendFile(Util.Path('/login/data/validatecode.jpg'));
});
/** Module export */
module.exports = Router;
