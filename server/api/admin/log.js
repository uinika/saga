const Router = require('express').Router(),
      Common = require('../../common.js');
/** Router definition */
Router.route('/sys/accessLogList')
  .get(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'http response sucess';
    protocal.body = Common.Json('admin/log/accessLogList.json');
    response.json(protocal);
});
Router.route('/sys/accessLogDetailList')
  .get(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'http response sucess';
    protocal.body = Common.Json('admin/log/accessLogDetailList.json');
    response.json(protocal);
});
/** Module export */
module.exports = Router;
