2016-6-8:创建后端仓库

-----
# 登录页面
-----
## 验证码
### 获取验证码图片
#### http://ip:port/validatecode
 Type: GET
##### Parameter:
 null
##### Result:
 验证码图片
-----
## 登录
### 用户登录
#### http://ip:port/login
 Type: POST
##### Parameter:
 loginName      String          登录名
 password       String          登录密码
 validateCode   String          验证码
##### Result:
 null
-----

# 首页
-----
## 导航栏
### 用户具备权限的菜单
#### http://ip:port/navigation/menuTree
 Type: GET
##### Parameter:
 null
##### Result:
 menuId         String          菜单ID
 parentId       String          父菜单ID
 menuName       String          菜单名
 hint           String          菜单描述
 entryURL       String          菜单地址
 icon           String          菜单图标
 children       Array           子菜单
-----
## 修改密码
### 修改当前登录用户的密码
#### http://ip:port/sys/account/password
 Type: PUT
##### Parameter:
 oldPassword    String          旧密码
 password       String          新密码
 rePassword     String          确认密码
##### Result:
 null
-----
## 注销
### 退出当前登录
#### http://ip:port/logout
 Type: POST
##### Parameter:
 null
##### Result:
 null
-----

# 日志管理
-----
## 日志统计列表查询
### 获取所有用户的访问日志统计信息列表页面
#### http://ip:port/sys/logs
 Type: GET
##### Parameter:
 loginName      String          登录名称（可选）
 current        Integer         当前页码（可选，默认为1）
 pageSize       Integer         每页行数（可选，默认为10）
##### Result:
 loginName      String          登录名称
 maxDate        String          最后访问时间
 maxIp          String          最后操作IP
 todayAmount    Integer         今日访问次数
 amount         Integer         总访问次数
-----
## 访问日志详情
### 获取指定用户的访问日志详情
#### http://ip:port/sys/logs/{loginName}
 Type: GET
##### Parameter:
 null
##### Result:
 loginName      String          登录名称
 realName       String          真实姓名
 accessDateTime String          访问时间
 accessIP       String          访问IP
 browser        String          访问者浏览器
 browserDetail  String          访问者浏览器详情
 command        String          访问操作
-----

# 用户管理
-----
## 用户列表查询
### 获取所有用户信息列表页面
#### http://ip:port/sys/accounts
 Type: GET
##### Parameter:
 loginName      String          登录名称（可选）
 realName       String          真实名称（可选）
 state          String          账号状态（可选，0：禁用，1：激活）
 current        Integer         当前页码（可选，默认为1）
 pageSize       Integer         每页行数（可选，默认为10）
##### Result:
 accountId      String          账号ID
 loginName      String          登录名
 realName       String          真实名称
 state          String          账号状态
 stateName      String          账号状态（中文名）
 tel            String          电话号码
 email          String          邮件
-----
## 新增用户
### 提交新增用户信息
#### http://ip:port/sys/account
 Type: POST
##### Parameter:
 loginName     String          登录名称
 realName      String          真实名称
 password      String          密码
 rePassword    String          确认密码
 tel           String          电话号码（可选）
 email         String          邮箱（可选）
##### Result:
 null
-----
## 用户详情
### 获取用户详情
#### http://ip:port/sys/account/{accountId}
 Type: GET
##### Parameter:
 null
##### Result:
 accountId      String          账号ID
 loginName      String          登录名
 realName       String          真实名称
 password       String          加密后的密码
 state          String          账号状态
 stateName      String          账号状态（中文名）
 tel            String          电话号码
 email          String          邮件
 roleNames      String          所属角色（可多个，已逗号分隔符分隔）
-----
## 修改用户信息
### 加载用户信息
#### http://ip:port/sys/account
 Type: GET
##### Parameter:
 accountId      String          账号ID
##### Result:
 accountId      String          账号ID
 loginName      String          登录名
 realName       String          真实名称
 password       String          加密后的密码
 state          String          账号状态
 tel            String          电话号码
 email          String          邮件
### 修改用户信息（head里将返回新token）
#### http://ip:port/sys/account
 Type: PUT
##### Parameter:
 accountId     String          账号ID（不可改变）
 loginName     String          登录名（不可改变）
 realName      String          真实名称
 state         String          账号状态
 tel           String          电话号码（可选）
 email         String          邮箱（可选）
##### Result:
 null
-----
## 启用/禁用账号
### 启用账号
#### http://ip:port/sys/account/start
 Type: PUT
##### Parameter:
 accountIds     String          账号ID集（以逗号分隔）
##### Result:
 null
### 禁用账号
#### http://ip:port/sys/account/close
 Type: PUT
##### Parameter:
 accountIds     String          账号ID集（以逗号分隔）
##### Result:
 null
-----
## 用户授权
### 装载用户角色数据
#### http://ip:port/sys/account/{accountId}/roles
 Type: GET
##### Parameter:
 roleName       String          角色名称（可选）
##### Result:
 accountId      String          账号ID
 addList        Array           已分配的角色
   itemValue    String          角色id
   itemLabel    String          角色名
 notAddList     Array           未分配的角色
   itemValue    String          角色id
   itemLabel    String          角色名
### 授权用户角色
#### http://ip:port/sys/account/{accountId}/role
 Type: POST
##### Parameter:
 roleIds        String          授权的角色id集（以逗号分隔）
##### Result:
 null
### 取消授权用户角色
#### http://ip:port/sys/account/{accountId}/role/[{roleIds}]
 Type: DELETE
##### Parameter:
 null
##### Result:
 null
-----
