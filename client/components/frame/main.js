import React from 'react';
import ReactDom from 'react-dom';
import {Row, Col, Menu, Icon} from 'antd';
import {Path, Http} from '../../common/http';
import {Link} from 'react-router';

class Login extends React.Component {
  componentDidMount() {
    Http({
      url: '/navigation/menuTree',
      method: 'GET'
    })
    .then(data => {
      if(data.head.status === 200){
        console.log(data);
      }
    });
  };
  render() {
    return (
      <div id='frame-main'>
        <section className='first'>
          <span className='logo'></span>
          <span className='avatar'></span>
        </section>
        <section className='second'>
          <div className='side-bar'>
            <Menu className='menu' mode='inline' defaultOpenKeys={['menu']}>
              <Menu.SubMenu key='menu' title='系统管理'>
                <Menu.Item><Link to='/main/admin/user'>用户管理</Link></Menu.Item>
                <Menu.Item><Link to='/main/admin/role'>角色管理</Link></Menu.Item>
                <Menu.Item><Link to='/main/admin/log'>日志管理</Link></Menu.Item>
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
