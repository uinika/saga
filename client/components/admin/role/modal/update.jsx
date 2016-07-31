import React from 'react'
import { Modal, Input, Form } from 'antd'

export default Form.create()(
  React.createClass({
    contextTypes: {
       role: React.PropTypes.object
    },
    handleSubmit() {
      let httpParam = this.props.form.getFieldsValue()
      this.context.role.dispatch.roleUpdate(httpParam);
      this.context.role.dispatch.roleUpdateModal(false)
    },
    handleCancel(event) {
      this.context.role.dispatch.roleUpdateModal(false)
    },
    render() {
      const { getFieldProps } = this.props.form
      const target = this.context.role.state.select.single
      return (
        <span>
          <Modal
            title="修改用户"
            visible={this.context.role.state.update.modal}
            onOk={this.handleSubmit}
            onCancel={this.handleCancel}
          >
          <Form inline>
            <Form.Item label="登陆名称">
              <Input placeholder="请输入账户名"
                {...getFieldProps('loginName', {initialValue: target.loginName})} />
            </Form.Item>
            <Form.Item label="真实姓名">
              <Input placeholder="请输入账户名"
                {...getFieldProps('realName', {initialValue: target.realName})} />
            </Form.Item>
            <Form.Item label="联系电话">
              <Input placeholder="请输入账户名"
                {...getFieldProps('tel', {initialValue: target.tel})} />
            </Form.Item>
            <Form.Item label="电子邮箱">
              <Input placeholder="请输入账户名"
                {...getFieldProps('email', {initialValue: target.email})} />
            </Form.Item>
          </Form>
          </Modal>
        </span>
      )
    }
  })
)
