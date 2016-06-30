import React from 'react';
import ReactDom from 'react-dom';
import {Row, Col, Menu, Icon} from 'antd';
import {Path, Http} from '../utils/http';

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
      <div id='dashboard-main'>
        <Row className='fill'>
          <Col span={3}>
            <Menu theme='dark' onClick={this.handleClick} mode='inline'>
              <Menu.SubMenu key='sub2' title={<span><Icon type='appstore' /><span>导航</span></span>}>
                <Menu.Item key='5'>选项</Menu.Item>
                <Menu.Item key='6'>选项</Menu.Item>
                <Menu.SubMenu key='sub3' title='二级导航'>
                  <Menu.Item key='7'>选项</Menu.Item>
                  <Menu.Item key='8'>选项</Menu.Item>
                </Menu.SubMenu>
              </Menu.SubMenu>
            </Menu>
          </Col>
          <Col span={21}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
};

export default Login;
