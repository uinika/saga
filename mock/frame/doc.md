# 首页
-----
## 导航栏菜单
### /navigation/menuTree
    Type: GET
#### Parameter:
    null
#### Result:
    menuId         String          菜单ID
    parentId       String          父菜单ID
    menuName       String          菜单名
    hint           String          菜单描述
    entryURL       String          菜单地址
    icon           String          菜单图标
    children       Array           子菜单
-----
## 修改当前登录用户的密码
### /sys/account/password
    Type: PUT
#### Parameter:
    oldPassword    String          旧密码
    password       String          新密码
    rePassword     String          确认密码
#### Result:
    null
-----
## 注销当前用户
### /logout
    Type: POST
#### Parameter:
    null
#### Result:
    null
-----
