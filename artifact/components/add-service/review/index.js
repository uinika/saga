import React from 'react'
import { Button, Alert } from 'antd'
export default React.createClass({
  render() {
    return (
      <div id='cluster-comfirm-hosts'>
        <h1>配置</h1>
        <div><Alert message="有些服务的配置不完全正确。我们建议您检查并更改标出的配置值。在不修改配置的情况下，您是否选择继续？" type="info" /></div>

        <Button type='ghost'>返回</Button>
        <Button type='ghost'>下一步</Button>
    </div>
    )
  }
})
