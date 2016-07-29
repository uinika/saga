const Router = require('express').Router(),
      Common = require('../../common.js');

// 获取角色列表
Router.route('/sys/roles')
  .get(function(request, response) {
    response.json(Common.Json('/admin/role/mock/sys-roles.json'));
});
// 添加角色
Router.route('/sys/role')
  .post(function(request, response) {
    let protocal = Common.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});
// 获取角色详情
Router.route('/sys/role/:roleId')
  .get(function(request, response) {
    response.json(Common.Json('/admin/role/mock/sys-role-{roleId}.json'));
});
// 修改角色信息
Router.route('/sys/role')
  .put(function(request, response) {
    let protocal = Common.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});
// 检查角色名是否存在
Router.route('/sys/exists/roleName')
  .get(function(request, response) {
    let protocal = Common.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});

// 角色授权--根据查询参数获取指定角色的权限信息
Router.route('/sys/role/:roleId/popedom')
  .get(function(request, response) {
    response.json(Common.Json('/admin/role/mock/sys-role-{roleId}-popedom'));
});
// 角色授权--授权角色模块
Router.route('/sys/role/{roleId}/popedom')
  .post(function(request, response) {
    let protocal = Common.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});
// 角色授权--取消授权角色模块
Router.route('/sys/role/:roleId/popedom/:roleIds')
  .delete(function(request, response) {
    let protocal = Common.Protocal();
    protocal.head.status = 200;
    protocal.head.message = 'successful operation';
    response.json(protocal);
});

module.exports = Router;
