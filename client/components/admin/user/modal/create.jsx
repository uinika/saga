import React from 'react'
import { Modal, Input, Form } from 'antd'

export default Form.create()(
  React.createClass({
    contextTypes: {
       user: React.PropTypes.object
    },
    handleSubmit() {
      let httpParam = this.props.form.getFieldsValue()
      this.context.user.dispatch.userCreate(httpParam)
      this.context.user.dispatch.userCreateModal(false)
    },
    handleCancel(event) {
      this.context.user.dispatch.userCreateModal(false)
    },
    render() {
      const { getFieldProps } = this.props.form
      return (
        <span>
          <Modal
            title="新建用户"
            visible={this.context.user.state.create.modal}
            onOk={this.handleSubmit}
            onCancel={this.handleCancel}
          >
          <Form inline>
            <Form.Item label="登陆名称">
              <Input placeholder="请输入账户名" {...getFieldProps('loginName')} />
            </Form.Item>
            <Form.Item label="真实姓名">
              <Input placeholder="请输入账户名" {...getFieldProps('realName')} />
            </Form.Item>
            <Form.Item label="登陆密码">
              <Input placeholder="请输入账户名" {...getFieldProps('password')} />
            </Form.Item>
            <Form.Item label="确认密码">
              <Input placeholder="请输入账户名" {...getFieldProps('rePassword')} />
            </Form.Item>
            <Form.Item label="联系电话">
              <Input placeholder="请输入账户名" {...getFieldProps('tel')} />
            </Form.Item>
            <Form.Item label="电子邮箱">
              <Input placeholder="请输入账户名" {...getFieldProps('email')} />
            </Form.Item>
          </Form>
          </Modal>
        </span>
      )
    }
  })
)
