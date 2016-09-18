const Router = require('express').Router(),
      Util = require('../common/util.js');

// 导航栏菜单
Router.route('/navigation/menuTree')
  .get(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'http response sucess';
    protocal.body = Util.Json('/frame/data/navigation-menuTree.json');
    response.json(protocal);
});

// 注销当前用户
Router.route('/logout')
  .get(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'http response sucess';
    response.json(protocal);
});

module.exports = Router;
