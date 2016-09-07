import React from 'react'
import { Modal, Input, Form } from 'antd'

export default Form.create()(
  React.createClass({
    contextTypes: {
       role: React.PropTypes.object
    },
    handleSubmit() {
      let httpParam = this.props.form.getFieldsValue();
      this.context.role.dispatch.roleUpdate(httpParam);
      this.context.role.dispatch.roleUpdateModal(false);
      //this.context.role.dispatch.roleFind();?

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
            title="修改角色"
            visible={this.context.role.state.update.modal}
            onOk={this.handleSubmit}
            onCancel={this.handleCancel}
          >
            <Form>
              <Form.Item label="原角色名称">
                <Input placeholder="请输入角色名称" {...getFieldProps('roleId', {initialValue: target.roleName})} disabled />
              </Form.Item>
              <Form.Item label="现角色名称">
                <Input placeholder="请输入角色名称" {...getFieldProps('roleName')} />
              </Form.Item>
            </Form>
          </Modal>
        </span>
      )
    }
  })
)
