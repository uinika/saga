import React from 'react'
import { Button, Input , Form, Alert } from 'antd'
export default React.createClass({
  render() {
    return (
      <div id='cluster-survey'>
        <h1>概览</h1>
        <p>这里是对安装过程的总结</p>
        <Alert message="这里是对安装过程的总结" type="info" />
        <textarea rows='5' cols='152'></textarea>
        <br/>

        <Button type='ghost'>完成</Button>
      </div>
    )
  }
})
