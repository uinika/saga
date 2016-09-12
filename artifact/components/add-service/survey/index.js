import React from 'react'
import { Button, Input,  Form, Table, Progress, Alert } from 'antd'
export default React.createClass({

  render() {
    return (
      <div id='ad-service-survey'>
        <h1>概览</h1>
        <div><Alert message="Important:You may also need to restart another service for ..." type="error" /></div>
        <div><Alert message="下面是安装步骤的摘要信息。" type="info" /></div>
        <textarea>

        </textarea>
        <Button type='ghost'>返回</Button>
        <Button type='ghost'>下一步</Button>
    </div>
    )
  }
})
