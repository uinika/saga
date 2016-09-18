const Router = require('express').Router(),
      Util = require('../../common/util.js');

// 用户信息列表
Router.route('/sys/accounts')
  .get(function(request, response) {
    response.json(Util.Json('/admin/user/data/sys-accounts.json'));
});
// 添加用户
Router.route('/sys/account')
  .post(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});
// 修改用户信息 -- 执行修改操作
Router.route('/sys/account')
  .put(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});
// 用户详情
Router.route('/sys/account/:accountId')
  .get(function(request, response) {
    response.json(Util.Json('/admin/user/data/sys-account-{accountId}.json'));
});

// 检查用户名是否存在
Router.route('/sys/exists/loginName')
  .get(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});

// 用户账户 -- 启用
Router.route('/sys/account/start')
  .put(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});
// 用户账户 -- 禁用
Router.route('/sys/account/close')
  .put(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});

// 用户授权 -- 装载用户角色数据
Router.route('/sys/account/:accountId/roles')
  .get(function(request, response) {
    response.json(Util.Json('/admin/user/data/sys-account-{accountId}-roles.json'));
});
// 用户授权 -- 授权用户角色
Router.route('/sys/account/{accountId}/role')
  .post(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});
// 用户授权 -- 取消授权用户角色
Router.route('/sys/account/:accountId/role/:roleIds')
  .delete(function(request, response) {
    let protocal = Util.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});

module.exports = Router;
