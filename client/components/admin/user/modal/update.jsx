import React from 'react'
import { Modal, Input, Form } from 'antd'
import { CREATE, UPDATE, DETAIL, AUTH } from '../../../../common/marker'

export default Form.create()(
  React.createClass({
    contextTypes: {
       container: React.PropTypes.object
    },
    handleSubmit() {
      let httpParam = this.props.form.getFieldsValue()
      this.context.container.createUser(httpParam)
      this.context.container.toggleCreateModal(false)
    },
    handleCancel(event) {
      this.context.container.toggleCreateModal(false)
    },
    render() {
      const { getFieldProps } = this.props.form
      return (
        <span>
          <Modal
            title="修改用户"
            visible={this.context.container.user.create.modal}
            onOk={this.handleSubmit}
            onCancel={this.handleCancel}
          >
          <Form inline form={this.props.form}>
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
