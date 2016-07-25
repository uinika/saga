import React from 'react'
import { Icon, Dropdown, Menu } from 'antd'

export default React.createClass({
  render() {
    const menu = (
      <Menu>
        <Menu.Item key='0'>
          <a target='_blank' href=''>管理员菜单项1</a>
        </Menu.Item>
        <Menu.Item key='1'>
          <a target='_blank' href=''>管理员菜单项2</a>
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
