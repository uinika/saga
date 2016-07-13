const Router = require('express').Router(),
      Common = require('../common.js');
/** Router definition */
Router.route('/login')
  .post(function(request, response) {
    let protocal = Common.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'http response sucess';
    protocal.body = Common.Json('login/login.json');
    response.json(protocal);
});
Router.route('/validatecode')
  .get(function(request, response) {
    response.sendFile(Common.Path + 'login/validatecode.jpg');
});
/** Module export */
module.exports = Router;
