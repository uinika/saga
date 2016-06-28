import React from 'react';
import ReactDom from 'react-dom';
import {Menu, Icon} from 'antd';

class Login extends React.Component {
  componentDidMount() {
    fetch('http://172.16.0.119:8080/test/12345', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.token
      }
    })
    .then(result => result.json())
    .then(data => console.log(data));
  };
  render() {
    return (
      <div id='dashboard-main'>
        <Menu onClick={this.handleClick} style={{width: 240}} mode='inline'>
          <Menu.SubMenu key='sub2' title={<span><Icon type='appstore' /><span>导航二</span></span>}>
            <Menu.Item key='5'>选项5</Menu.Item>
            <Menu.Item key='6'>选项6</Menu.Item>
            <Menu.SubMenu key='sub3' title='三级导航'>
              <Menu.Item key='7'>选项7</Menu.Item>
              <Menu.Item key='8'>选项8</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu>
         {this.props.children}
      </div>
    );
  }
};

export default Login;
