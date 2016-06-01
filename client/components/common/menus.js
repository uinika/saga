import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;
class Menus extends React.Component {
  render() {
    return (
      <Menu defaultOpenKeys={[ 'sub1' ]} mode="inline">
        <SubMenu key="sub0" title={<span><Icon type="mail" /><span><Link to="dashboard">Dashboard</Link></span></span>} />
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>组织人员管理</span></span>}>
          <Menu.Item key="1">
            <Link to="demo">组织机构管理</Link>
          </Menu.Item>
          <Menu.Item key="2">用户管理</Menu.Item>
          <Menu.Item key="3">系统角色管理</Menu.Item>
          <Menu.Item key="4">数据角色管理</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Menus;
