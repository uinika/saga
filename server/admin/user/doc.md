# 用户管理
-----
## 用户信息列表
### /sys/accounts
    Type: GET
#### Parameter:
    loginName      String          登录名称（可选，模糊查询）
    realName       String          真实名称（可选，模糊查询）
    state          String          账号状态（可选，0：禁用，1：激活）
    current        Integer         当前页码（可选，默认为1）
    pageSize       Integer         每页行数（可选，默认为10）
#### Result:
    accountId      String          账号ID
    loginName      String          登录名
    realName       String          真实名称
    state          String          账号状态
    stateName      String          账号状态（中文名）
    tel            String          电话号码
    email          String          邮件
-----
## 添加用户
### /sys/account
    Type: POST
#### Parameter:
    loginName     String          登录名称
    realName      String          真实名称
    password      String          密码
    rePassword    String          确认密码
    tel           String          电话号码（可选）
    email         String          邮箱（可选）
#### Result:
    null
-----
## 用户详情
### /sys/account/{accountId}
    Type: GET
#### Parameter:
    null
#### Result:
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
## 修改用户信息 -- 查询用户信息
### /sys/account
    Type: GET
#### Parameter:
    accountId      String          账号ID
#### Result:
    accountId      String          账号ID
    loginName      String          登录名
    realName       String          真实名称
    password       String          加密后的密码
    state          String          账号状态
    tel            String          电话号码
    email          String          邮件
## 修改用户信息 -- 执行修改操作
### /sys/account
    Type: PUT
#### Parameter:
    accountId     String          账号ID（不可改变）
    loginName     String          登录名（不可改变）
    realName      String          真实名称
    state         String          账号状态
    tel           String          电话号码（可选）
    email         String          邮箱（可选）
#### Result:
    null
-----
## 用户账户 -- 启用
### /sys/account/start
    Type: PUT
#### Parameter:
    accountIds     String          账号ID集（以逗号分隔）
#### Result:
    null
## 用户账户 -- 禁用
### /sys/account/close
    Type: PUT
#### Parameter:
    accountIds     String          账号ID集（以逗号分隔）
#### Result:
    null
-----
## 用户授权 -- 装载用户角色数据
### /sys/account/{accountId}/roles
    Type: GET
#### Parameter:
    roleName       String          角色名称（可选）
#### Result:
    accountId      String          账号ID
    addList        Array           已分配的角色
    itemValue      String          角色id
    itemLabel      String          角色名
    notAddList     Array           未分配的角色
    itemValue      String          角色id
    itemLabel      String          角色名
## 用户授权 -- 授权用户角色
### /sys/account/{accountId}/role
    Type: POST
#### Parameter:
    roleIds        String          授权的角色id集（以逗号分隔）
#### Result:
    null
## 用户授权 -- 取消授权用户角色
### /sys/account/{accountId}/role/[{roleIds}]
    Type: DELETE
#### Parameter:
    null
#### Result:
    null
-----
## 检查用户名是否存在
### /sys/exists/loginName
    Type: GET
#### Parameter:
    accountId      String          要检查的账号ID（新增用户不需要，修改用户需要）
    loginName      String          要检查的用户名
#### Result:
    null
-----
