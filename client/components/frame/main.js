import React from 'react';
import ReactDom from 'react-dom';
import {Row, Col, Menu, Icon, Dropdown} from 'antd';
import {Url, Fetch} from '../../common/http';
import {Link} from 'react-router';

class Login extends React.Component {
  componentDidMount() {
    Fetch({
      url: '/navigation/menuTree',
      method: 'GET'
    })
    .then(data => {
      if(data.head.status === 200){
        
      }
    });
  };
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
    );
    return (
      <div id='frame-main'>
        <section className='first'>
          <Link className='logo' to={'/frame/dashboard'} activeClassName="active"></Link>
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
        </section>
        <section className='second'>
          <div className='side-bar'>
            <Menu className='menu' mode='inline' defaultOpenKeys={['menu']}>
              <Menu.SubMenu key='menu' title='系统管理'>
                <Menu.Item><Link to='/frame/admin/user'>用户管理</Link></Menu.Item>
                <Menu.Item><Link to='/frame/admin/role'>角色管理</Link></Menu.Item>
                <Menu.Item><Link to='/frame/admin/log'>日志管理</Link></Menu.Item>
                {
                // <Menu.Item><Link to='/main/admin/menu'>菜单管理</Link></Menu.Item>
                // <Menu.Item><Link to='/main/admin/module'>模块管理</Link></Menu.Item>
                }
              </Menu.SubMenu>
            </Menu>
          </div>
          <div className='main-content'>
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
};

export default Login;
