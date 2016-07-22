import React from 'react';
import {Row, Col, Menu, Icon, Dropdown} from 'antd';
import {Link} from 'react-router';
import _ from 'lodash';

class Login extends React.Component {
  componentDidMount() {
    this.props.requestMenuTree();
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
    )
    const menuTree = [];
    _.map(this.props.menuTree, function(item1){
      _.map(item1.children, function(item2, index){
        menuTree.push(<Menu.Item key={index}><Link to={item2.entryURL}>{item2.menuName}</Link></Menu.Item>);
      })
    })
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
        </section>i
        <section className='second'>
          <div className='side-bar wiserv-ui'>
            <Menu className='menu' mode='inline' defaultOpenKeys={['menu']}>
              <Menu.SubMenu key='menu' title='系统管理'>
                {menuTree}
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
