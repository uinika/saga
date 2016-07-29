import React from 'react'
import { Link } from 'react-router'
import { Icon, Dropdown, Menu } from 'antd'

export default React.createClass({
  render() {
    const menu = (
      <Menu>
        <Menu.Item key='0'>
          <Link to={'/'}>退出系统</Link>
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
