# 登录页面
-----
## 获取验证码图片
### /validatecode
    Type: GET
#### Parameter:
    null
#### Result:
    验证码图片
-----
## 用户登录
### /login
    Type: POST
#### Parameter:
    loginName      String          登录名
    password       String          登录密码
    validateCode   String          验证码
#### Result:
    null
-----
