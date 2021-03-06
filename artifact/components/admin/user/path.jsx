import React from 'react'
import { Breadcrumb, Icon } from 'antd'

export default React.createClass({
  contextTypes: {
    user: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render(){
    return (
      <span>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            系统管理
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            用户管理
          </Breadcrumb.Item>
        </Breadcrumb>
      </span>
    )
  }
})
