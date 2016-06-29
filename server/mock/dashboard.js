const Router = require('express').Router(),
      Util = require('../util.js');
/** Router definition */
Router.route('/navigation/menuTree')
  .get(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'http response sucess';
    protocal.body = Util.Json('/dashboard/menuTree.json');
    response.json(protocal);
});
/** Module export */
module.exports = Router;
