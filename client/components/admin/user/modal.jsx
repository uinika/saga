import React from 'react'
import { Input, Form, Modal } from 'antd';

export default React.createClass({
  contextTypes: {
     container: React.PropTypes.object
  },
  handleOk() {
    let httpParam = {
      loginName : this.refs.loginName.value.trim(),
      realName : this.refs.realName.value.trim(),
      password : this.refs.password.value.trim(),
      rePassword : this.refs.rePassword.value.trim(),
      tel : this.refs.tel.value.trim(),
      email : this.refs.email.value.trim()
    }
    this.context.container.addUser(httpParam)
    this.context.container.toggleModal(false)
  },
  handleCancel(event) {
    this.context.container.toggleModal(false)
  },
  render(){
    return (
      <span>
        <Modal
          title="新建用户"
          visible={this.context.container.user.modal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            <label>登陆名称</label>
            <input type='text' ref='loginName' />
          </p>
          <p>
            <label>真实姓名</label>
            <input type='text' ref='realName' />
          </p>
          <p>
            <label>登陆密码</label>
            <input type='text' ref='password' />
          </p>
          <p>
            <label>确认密码</label>
            <input type='text' ref='rePassword' />
          </p>
          <p>
            <label>联系电话</label>
            <input type='text' ref='tel' />
          </p>
          <p>
            <label>电子邮箱</label>
            <input type='text' ref='email' />
          </p>
        </Modal>
      </span>
    )
  }
})
