const Router = require('express').Router(),
      Common = require('../common.js');
/** Router definition */
Router.route('/navigation/menuTree')
  .get(function(request, response) {
    response.json(Common.Json('frame/navigation-menuTree.json'));
});
/** Module export */
module.exports = Router;
