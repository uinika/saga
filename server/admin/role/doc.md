# 角色管理
-----
## 获取角色列表
### /sys/roles
    Type: GET
#### Parameter:
    roleName       String          角色名称（可选，模糊查询）
    current        Integer         当前页码（可选，默认为1）
    pageSize       Integer         每页行数（可选，默认为10）
#### Result:
    roleId         String          角色ID
    roleName       String          角色名
-----
## 新增角色
### /sys/role
    Type: POST
#### Parameter:
    roleName       String          角色名
    moduleIds      String          授权模块id集（以逗号分隔）
#### Result:
    null
-----
## 获取角色详情
### /sys/role/{roleId}
    Type: GET
#### Parameter:
    null
#### Result:
    roleId         String          角色ID
    roleName       String          角色名
    accountNames   String          用户授权详情
    moduleNames    String          模块授权详情
-----
## 修改角色信息
### /sys/role
    Type: PUT
#### Parameter:
    roleId         String          角色ID
    roleName       String          角色名
#### Result:
    null
-----
## 角色授权--根据查询参数获取指定角色的权限信息
### /sys/role/{roleId}/popedom
    Type: GET
#### Parameter:
    selectRoleId   String          查询范围（可选）
    moduleName     String          查询模块（可选，模糊）
#### Result:
    roleId         String          角色ID
    roleName       String          角色名
    listRole       Array           角色查询范围
    itemValue      String          角色id
    itemLabel      String          角色名
    popedom        Object          模块授权详情
    add            Array           已授权的模块
    itemValue      String          模块id
    itemLabel      String          模块名
    notAdd         Array           未授权的模块
    itemValue      String          模块id
    itemLabel      String          模块名
## 角色授权--授权角色模块
### /sys/role/{roleId}/popedom
    Type: POST
#### Parameter:
    moduleIds      String          授权的模块id集（以逗号分隔）
#### Result:
    null
## 角色授权--取消授权角色模块
### /sys/role/{roleId}/popedom/[moduleIds]
    Type: DELETE
#### Parameter:
    null
#### Result:
    null
-----
## 检查角色名是否存在
### /sys/exists/roleName
    Type: GET
#### Parameter:
    roleId         String        要检查的账号ID（新增用户不需要，修改用户需要）
    roleName       String        要检查的用户名
#### Result:
    null
-----
## 模块管理--加载模块信息(用于选择框)
### /sys/modules/box
    Type: GET
#### Parameter:
    moduleName     String        模块名称（可选，模糊查询）
#### Result:
    itemValue      String        模块id
    itemLabel      String        模块名
-----
