import React from 'react'
import { Input, Form, Button, Select } from 'antd';

export default Form.create({})(
  React.createClass({
    contextTypes: {
       user: React.PropTypes.object
    },
    handleFind() {
      let httpParam = {
        loginName: this.props.form.getFieldValue('loginName')
      }
      this.context.user.dispatch.userFindFilter(httpParam)
      this.context.user.dispatch.userFind(httpParam)
    },
    handleFindAdvanced() {
      let httpParam = this.props.form.getFieldsValue()
      this.context.user.dispatch.userFindFilter(httpParam)
      this.context.user.dispatch.userFind(httpParam)
    },
    render(){
      const { getFieldProps } = this.props.form
      return (
        <div>
          <span className='form'>
            <Form inline>
              <Form.Item label='登陆名称'>
                <Input placeholder='输入查询条件' {...getFieldProps('loginName')} />
              </Form.Item>
              <Button onClick={this.handleFind} type='ghost'>查询</Button>
            </Form>
          </span>
          <span className='form'>
            <Form inline>
              <Form.Item label='用户状态'>
                <Select { ...getFieldProps('state', {initialValue: '1'}) }>
                  <Select.Option value='1'>激活</Select.Option>
                  <Select.Option value='0'>禁用</Select.Option>
                </Select>
              </Form.Item>
              <Button onClick={this.handleFindAdvanced} type='ghost'>高级查询</Button>
            </Form>
          </span>
        </div>
      )
    }
  })
)
