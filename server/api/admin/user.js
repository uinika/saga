const Router = require('express').Router(),
      Common = require('../../common.js');
/** Router definition */
Router.route('/sys/accounts')
  .get(function(request, response) {
    response.json(Common.Json('admin/user/sys-accounts.json'));
});
/** Module export */
module.exports = Router;
