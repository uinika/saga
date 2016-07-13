const Router = require('express').Router(),
      Common = require('../common.js');
/** Router definition */
Router.route('/navigation/menuTree')
  .get(function(request, response) {
    let protocal = Common.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'http response sucess';
    protocal.body = Common.Json('dashboard/menuTree.json');
    response.json(protocal);
});
/** Module export */
module.exports = Router;
