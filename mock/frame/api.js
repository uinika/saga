const Router = require('express').Router(),
      Util = require('../common/util.js');

// 导航栏菜单
Router.route('/navigation/menuTree')
  .get(function(request, response) {
    let protocal = Util.protocal();
    protocal.head.status = 200;
    protocal.head.message = 'http response sucess';
    protocal.body = Util.json('/frame/data/navigation-menuTree.json');
    response.json(protocal);
});

// 注销当前用户
Router.route('/logout')
  .post(function(request, response) {
    let protocal = Util.protocal();
    protocal.head.status = 200;
    protocal.head.message = '温馨提示：您已经退出系统!';
    response.json(protocal);
});

module.exports = Router;
