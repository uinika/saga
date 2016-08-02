import React from 'react'
import { Link } from 'react-router'
import { Push } from 'react-router-redux'
import { Icon, Dropdown, Menu } from 'antd'

export default React.createClass({
  contextTypes: {
    frame: React.PropTypes.object,
    router: React.PropTypes.object
  },
  handleLogout() {
    this.context.frame.launchLogout()
    .then(() => sessionStorage.removeItem('token'))
    .then(() => this.context.router.push('login'))
  },
  render() {
    const menu = (
      <Menu>
        <Menu.Item key='0' onClick={this.handleLogout}>
          <a onClick={this.handleLogout}>退出系统</a>
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
