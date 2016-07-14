# 日志管理
-----
## 日志统计列表 -- 获取所有用户的访问日志统计信息列表页面
### /sys/logs
    Type: GET
#### Parameter:
    loginName      String          登录名称（可选，模糊查询）
    current        Integer         当前页码（可选，默认为1）
    pageSize       Integer         每页行数（可选，默认为10）
#### Result:
    loginName      String          登录名称
    maxDate        String          最后访问时间
    maxIp          String          最后操作IP
    todayAmount    Integer         今日访问次数
    amount         Integer         总访问次数
-----
## 查看日志详情 -- 获取指定用户的访问日志详情
### /sys/logs/{loginName}
    Type: GET
#### Parameter:
    null
#### Result:
    loginName      String          登录名称
    realName       String          真实姓名
    accessDateTime String          访问时间
    accessIP       String          访问IP
    browser        String          访问者浏览器
    browserDetail  String          访问者浏览器详情
    command        String          访问操作
-----
