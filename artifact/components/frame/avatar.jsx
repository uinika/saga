import React from 'react'
import { Link } from 'react-router'
import { Push } from 'react-router-redux'
import { Icon, Dropdown, Menu } from 'antd'

export default React.createClass({
  contextTypes: {
    frame: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired,
    router: React.PropTypes.object
  },
  render() {
    const menu = (
      <Menu>
        <Menu.Item key='0' >
          <a onClick={this.context.action.logout}>退出系统</a>
        </Menu.Item>
      </Menu>
    )
    return (
      <span className='avatar'>
        <div className='portrait'></div>
        <div className='dropdown'>
          <Dropdown overlay={menu}>
            <a className='ant-dropdown-link'>
              管理员 <Icon type='down' />
            </a>
          </Dropdown>
        </div>
      </span>
    )
  }
})
