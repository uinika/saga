import React from 'react'
import { Breadcrumb, Icon } from 'antd'

export default React.createClass({
  contextTypes: {
     user: React.PropTypes.object
  },
  render(){
    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          <Icon type="home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          系统管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          权限管理
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
})
