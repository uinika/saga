const Router = require('express').Router(),
      Util = require('../../common/util.js');

// 日志统计列表 -- 获取所有用户的访问日志统计信息列表页面
Router.route('/sys/logs')
  .get(function(request, response) {
    response.json(Util.Json('/admin/log/data/sys-logs.json'));
});
// 查看日志详情 -- 获取指定用户的访问日志详情
Router.route('/sys/logs/:loginName')
  .get(function(request, response) {
    response.json(Util.Json('/admin/log/data/sys-logs-{loginName}.json'));
});

module.exports = Router;
