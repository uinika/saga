const Router = require('express').Router(),
      Common = require('../../common.js');
/** Router definition */
Router.route('/sys/accounts')
  .get(function(request, response) {
    response.json(Common.Json('admin/user/sys-accounts.json'));
});
Router.route('/sys/account')
  .post(function(request, response) {
    console.info(request.body);
    let protocal = Common.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'http response sucess';
    response.json(protocal);
});
/** Module export */
module.exports = Router;
