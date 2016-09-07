import React from 'react'
import { Input, Form, Button, Select } from 'antd';

export default Form.create({})(
  React.createClass({
    contextTypes: {
       role: React.PropTypes.object
    },
    handleFind() {
      let httpParam = {
        roleName: this.props.form.getFieldValue('roleName')
      }
      this.context.role.dispatch.roleFindFilter(httpParam)
      this.context.role.dispatch.roleFind(httpParam)
    },
    render(){
      const { getFieldProps } = this.props.form
      return (
        <span className='form'>
          <Form inline>
            <Form.Item label='角色名称'>
              <Input placeholder='输入查询条件' {...getFieldProps('roleName')} />
            </Form.Item>
            <Button onClick={this.handleFind} type='ghost'>查询</Button>
          </Form>
        </span>
      )
    }
  })
)
