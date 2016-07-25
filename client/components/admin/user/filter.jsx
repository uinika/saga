import React from 'react'
import { Input, Form, Button, Select } from 'antd';

export default React.createClass({
  contextTypes: {
     container: React.PropTypes.object
  },
  render(){
    return (
      <div>
        <span className='form1'>
          <Form inline>
            <Form.Item label="登陆名称">
              <Input />
            </Form.Item>
            <Button type="ghost" htmlType="submit">查询</Button>
          </Form>
        </span>
        <span className='form2'>
          <Form inline>
            <Form.Item label="用户状态">
            <Select defaultValue="1" style={{ width: 120 }} allowClear>
              <Select.Option value="1">闲置</Select.Option>
              <Select.Option value="2">激活</Select.Option>
            </Select>
            </Form.Item>
            <Button type="ghost" htmlType="submit">高级查询</Button>
          </Form>
        </span>
      </div>
    )
  }
})
