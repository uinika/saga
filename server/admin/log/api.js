const Router = require('express').Router(),
      Common = require('../../common.js');

// 日志统计列表 -- 获取所有用户的访问日志统计信息列表页面
Router.route('/sys/logs')
  .get(function(request, response) {
    response.json(Common.Json('/admin/log/mock/sys-logs.json'));
});
// 查看日志详情 -- 获取指定用户的访问日志详情
Router.route('/sys/logs/:loginName')
  .get(function(request, response) {
    response.json(Common.Json('/admin/log/mock/sys-logs-{loginName}.json'));
});

module.exports = Router;
